package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.exoplayer2.C
import com.google.android.exoplayer2.ExoPlaybackException
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.PlaybackParameters
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.SimpleExoPlayer
import com.google.android.exoplayer2.Timeline
import com.google.android.exoplayer2.mediacodec.MediaCodecRenderer
import com.google.android.exoplayer2.mediacodec.MediaCodecUtil
import com.google.android.exoplayer2.source.LoopingMediaSource
import com.google.android.exoplayer2.source.MediaSource
import com.google.android.exoplayer2.source.TrackGroupArray
import com.google.android.exoplayer2.source.dash.DashMediaSource
import com.google.android.exoplayer2.source.dash.DefaultDashChunkSource
import com.google.android.exoplayer2.source.hls.HlsMediaSource
import com.google.android.exoplayer2.trackselection.TrackSelectionArray
import com.google.android.exoplayer2.ui.PlayerView
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource
import com.google.android.exoplayer2.upstream.DefaultHttpDataSourceFactory
import com.google.android.exoplayer2.util.Util
import io.streamroot.ctl.delivery.client.core.CTLDeliveryClient
import io.streamroot.ctl.delivery.client.core.LogLevelPublic
import io.streamroot.ctl.delivery.client.utils.StatsView

class PlayerActivity : AppCompatActivity(), Player.EventListener {
    data class PlayerActivityArgs(
            val url:String?,
            val orchProperty: String?
    )

    companion object {
        private const val ARG_STREAM_URL = "streamUrl"
        private const val ARG_ORCH_PROP = "orchestratorProperty"

        fun makeIntent(ctx: Context, args: PlayerActivityArgs) : Intent {
            return Intent(ctx, PlayerActivity::class.java).apply {
                putExtra(ARG_STREAM_URL, args.url)
                putExtra(ARG_ORCH_PROP, args.orchProperty)
            }
        }
        fun extractArgs(i: Intent) : PlayerActivityArgs {
            return PlayerActivityArgs(
                    i.getStringExtra(ARG_STREAM_URL),
                    i.getStringExtra(ARG_ORCH_PROP)
            )
        }
    }

    private lateinit var exoPlayerView: PlayerView
    private lateinit var dcStatsView: StatsView

    private var mStreamUrl: String? = null
    private var mOrchProperty: String? = null

    private var player: ExoPlayer? = null

    private var deliveryClient: CTLDeliveryClient? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_player)

        val args = extractArgs(intent)
        mStreamUrl = args.url
        mOrchProperty = args.orchProperty?.takeUnless { it.isBlank() }

        exoPlayerView = findViewById(R.id.exoplayerView)
        dcStatsView = findViewById(R.id.dcStatsView)
    }

    override fun onStart() {
        super.onStart()

        if (Util.SDK_INT > 23) {
            initPlayer()
        }
    }

    override fun onResume() {
        super.onResume()

        if (Util.SDK_INT <= 23 || player == null) {
            initPlayer()
        }
    }

    override fun onPause() {
        super.onPause()
        if (Util.SDK_INT <= 23) {
            releasePlayer()
        }
    }

    override fun onStop() {
        super.onStop()
        if (Util.SDK_INT > 23) {
            releasePlayer()
        }
    }

    private fun initPlayer() {
        if (player == null) {
            val newPlayer = SimpleExoPlayer.Builder(applicationContext).build()

            newPlayer.playWhenReady = true
            newPlayer.addListener(this)

            initDeliveryClient(newPlayer).let { dc ->
                deliveryClient = dc

                dc.addStateStatsListener(dcStatsView)
                dcStatsView.showStats()
                dc.start()

                val uri = Uri.parse(dc.localUrl())
                newPlayer.prepare(LoopingMediaSource(buildMediaSource(uri)), true, false)
            }

            player = newPlayer
            exoPlayerView.player = newPlayer
        }
    }

    private fun releasePlayer() {
        player?.release()
        player = null

        stopDeliveryClient()
    }

    @SuppressLint("SwitchIntDef")
    private fun buildMediaSource(uri: Uri): MediaSource {
        val defaultDataSourceFactory =
            DefaultHttpDataSourceFactory(
                    Util.getUserAgent(applicationContext, "StreamrootQA"),
                    DefaultHttpDataSource.DEFAULT_CONNECT_TIMEOUT_MILLIS,
                    DefaultHttpDataSource.DEFAULT_READ_TIMEOUT_MILLIS,
                    true
            )

        return when (Util.inferContentType(uri)) {
            C.TYPE_HLS -> HlsMediaSource.Factory(defaultDataSourceFactory)
                //.setDrmSessionManager()
                .createMediaSource(uri)
            C.TYPE_DASH -> DashMediaSource.Factory(
                DefaultDashChunkSource.Factory(
                    defaultDataSourceFactory
                ), defaultDataSourceFactory
            )
                //.setDrmSessionManager()
                .createMediaSource(uri)
            else -> {
                throw IllegalStateException("Unsupported type for url: $uri")
            }
        }
    }

    private fun initDeliveryClient(newPlayer: SimpleExoPlayer) =
            CTLDeliveryClient.orchestratorBuilder(applicationContext)
                    .mediaInterface(ExoPlayerMediaInterface(newPlayer))
                    .options {
                        qosInterface(ExoPlayerQosModule(newPlayer))
                        orchestratorProperty(mOrchProperty!!)
                        logLevel(LogLevelPublic.TRACE)
                    }
                    .build(mStreamUrl!!)


    private fun stopDeliveryClient() {
        deliveryClient?.terminate()
        deliveryClient = null
    }

    /**
     * Utils
     */

    private fun showToast(message: String) {
        Toast.makeText(applicationContext, message, Toast.LENGTH_LONG).show()
    }

    /**
     * Player EventListener
     */

    override fun onPlayerError(error: ExoPlaybackException) {
        var errorString: String? = null
        if (error.type == ExoPlaybackException.TYPE_RENDERER) {
            val cause = error.rendererException
            if (cause is MediaCodecRenderer.DecoderInitializationException) {
                // Special case for decoder initialization failures.
                val codecInfo = cause.codecInfo
                errorString = when {
                    codecInfo != null -> getString(
                            R.string.error_instantiating_decoder,
                            codecInfo.name
                    )
                    cause.cause is MediaCodecUtil.DecoderQueryException -> getString(R.string.error_querying_decoders)
                    cause.secureDecoderRequired -> getString(
                            R.string.error_no_secure_decoder,
                            cause.mimeType
                    )
                    else -> getString(R.string.error_no_decoder, cause.mimeType)
                }
            }
        }

        if (errorString != null) {
            showToast(errorString)
        }
    }

    override fun onPlaybackParametersChanged(playbackParameters: PlaybackParameters) {}
    override fun onSeekProcessed() {}
    override fun onTracksChanged(trackGroups: TrackGroupArray, trackSelections: TrackSelectionArray) {}

    override fun onLoadingChanged(isLoading: Boolean) {}
    override fun onPositionDiscontinuity(reason: Int) {}
    override fun onRepeatModeChanged(repeatMode: Int) {}
    override fun onShuffleModeEnabledChanged(shuffleModeEnabled: Boolean) {}
    override fun onTimelineChanged(timeline: Timeline, manifest: Any?, reason: Int) {}
    override fun onPlayerStateChanged(playWhenReady: Boolean, playbackState: Int) {}
}