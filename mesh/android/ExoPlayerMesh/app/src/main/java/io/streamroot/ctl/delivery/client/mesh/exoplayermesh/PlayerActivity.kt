package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import android.content.Context
import android.net.Uri
import android.os.Bundle
import android.os.Handler
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContentProviderCompat.requireContext
import com.google.android.exoplayer2.*
import com.google.android.exoplayer2.trackselection.DefaultTrackSelector
import com.google.android.exoplayer2.upstream.BandwidthMeter
import com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
import com.google.android.exoplayer2.upstream.TransferListener
import com.google.android.exoplayer2.util.Util
import io.streamroot.ctl.delivery.client.mesh.exoplayermesh.databinding.ActivityPlayerBinding
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient
import io.streamroot.lumen.delivery.client.core.LumenLogLevel
import io.streamroot.lumen.delivery.client.utils.LumenStatsView
import java.util.concurrent.atomic.AtomicLong

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

    private fun initializeDeliveryClient(player: ExoPlayer, loadControl: DefaultLoadControl, bandwidthMeter: ExoPlayerBandwidthMeter) {
        val playerInteractor = PlayerInteractor(player as SimpleExoPlayer, loadControl, bandwidthMeter)

        lumenDeliveryClient = LumenDeliveryClient.meshBuilder(this)
            .playerInteractor(playerInteractor)
            .options {
                deliveryClientKey("demoswebsiteandpartners")
            }
            .build(manifestUrl)
    }

    private fun initStatsView() {
        bindings.statsviewContainer.apply {
            removeAllViews()
            val statsView = LumenStatsView(context)
            lumenDeliveryClient?.addStateStatsListener(statsView)
            statsView.showStats()
            addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        }
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

    private fun initializePlayer() {
        if (player == null) {
            val loadControl = DefaultLoadControl.Builder()
                .setBufferDurationsMs(10_000,
                    DefaultLoadControl.DEFAULT_MAX_BUFFER_MS,
                    DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_MS,
                    DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS
                )
                .build()

            val trackSelector = DefaultTrackSelector(this)
            val bandwidthMeter = ExoPlayerBandwidthMeter.new(this)

            with(SimpleExoPlayer.Builder(this)) {
                setTrackSelector(trackSelector)
                setBandwidthMeter(bandwidthMeter)
                setLoadControl(loadControl)
            }.build().also { exoPlayer ->
                exoPlayer.playWhenReady = true

                // Below, we initialize and start Lumen delivery client
                initializeDeliveryClient(exoPlayer, loadControl, bandwidthMeter)
                lumenDeliveryClient?.start()
                initStatsView()

                val deliveryManifest = Uri.parse(lumenDeliveryClient?.localUrl())
                mediaItem = MediaItem.fromUri(deliveryManifest)

                player = exoPlayer
                bindings.playerView.player = exoPlayer
            }
        }

        player!!.addMediaItem(mediaItem!!)
        player!!.repeatMode = Player.REPEAT_MODE_ALL
        player!!.prepare()
    }

    private fun releasePlayer() {
        if (player == null) return

        lumenDeliveryClient?.terminate()
        lumenDeliveryClient = null

        player?.release()
        player = null
        mediaItem = null
    }
}

