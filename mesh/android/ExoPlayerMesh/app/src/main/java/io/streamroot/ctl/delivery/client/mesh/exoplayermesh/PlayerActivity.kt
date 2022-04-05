package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import android.net.Uri
import android.os.Bundle
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import com.google.android.exoplayer2.DefaultLoadControl
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.MediaItem
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.util.Util
import io.streamroot.ctl.delivery.client.mesh.exoplayermesh.databinding.ActivityPlayerBinding
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient
import io.streamroot.lumen.delivery.client.core.LumenLogLevel
import io.streamroot.lumen.delivery.client.utils.LumenStatsView

class PlayerActivity : AppCompatActivity() {
    private lateinit var bindings: ActivityPlayerBinding
    private var player: ExoPlayer? = null
    private var mediaItem: MediaItem? = null
    private var lumenDeliveryClient: LumenDeliveryClient? = null

    private val manifestUrl: String = "http://wowza-test-cloudfront.streamroot.io/liveOrigin/Sintel1/playlist.m3u8"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bindings = ActivityPlayerBinding.inflate(layoutInflater)
        setContentView(bindings.root)
    }

    override fun onStart() {
        super.onStart()
        if (Util.SDK_INT > 23) {
            initializePlayer()
        }
    }

    override fun onResume() {
        super.onResume()
        if (Util.SDK_INT <= 23 || player == null) {
            initializePlayer()
        }
    }

    override fun onPause() {
        if (Util.SDK_INT <= 23) {
            releasePlayer()
        }
        super.onPause()
    }

    override fun onStop() {
        if (Util.SDK_INT > 23) {
            releasePlayer()
        }
        super.onStop()
    }

    private fun initializePlayer() {
        if (player == null) {
            val loadControl = DefaultLoadControl.Builder()
                .setBufferDurationsMs(10_000,
                    DefaultLoadControl.DEFAULT_MAX_BUFFER_MS,
                    DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_MS,
                    DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS
                )
                .build()

            val exoPlayerBuilder = ExoPlayer.Builder(this)
            val bandwidthMeter = ExoPlayerBandwidthMeter(this, exoPlayerBuilder)

            exoPlayerBuilder
                .setLoadControl(loadControl)
                .setBandwidthMeter(bandwidthMeter)
                .build().also { exoPlayer ->
                exoPlayer.playWhenReady = true

                // Below, we initialize and start Lumen delivery client
                val dc = createDeliveryClient(exoPlayer, loadControl, bandwidthMeter)
                dc.start()
                showStatsView(dc)

                // We fetch the final URL from the delivery client
                val deliveryManifest = Uri.parse(dc.localUrl())

                mediaItem = MediaItem.fromUri(deliveryManifest)
                player = exoPlayer
                bindings.playerView.player = exoPlayer
                lumenDeliveryClient = dc
            }
        }

        player!!.addMediaItem(mediaItem!!)
        player!!.repeatMode = Player.REPEAT_MODE_ALL
        player!!.prepare()
    }

    private fun createDeliveryClient(player: ExoPlayer, loadControl: DefaultLoadControl, bandwidthMeter: ExoPlayerBandwidthMeter) : LumenDeliveryClient {
        val playerInteractor = PlayerInteractor(player, loadControl, bandwidthMeter)

        return LumenDeliveryClient.meshBuilder(this)
            .playerInteractor(playerInteractor)
            .options {
                logLevel(LumenLogLevel.INFO)
            }
            .build(manifestUrl)
    }

    private fun showStatsView(dc: LumenDeliveryClient) {
        bindings.statsviewContainer.apply {
            removeAllViews()
            val statsView = LumenStatsView(this@PlayerActivity)
            dc.addStateStatsListener(statsView)
            statsView.showStats()
            addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        }
    }

    private fun releasePlayer() {
        if (player == null) return

        stopDeliveryClient()

        player?.release()
        player = null
        mediaItem = null
    }

    private fun stopDeliveryClient() {
        lumenDeliveryClient?.stop()
        lumenDeliveryClient = null
    }
}

