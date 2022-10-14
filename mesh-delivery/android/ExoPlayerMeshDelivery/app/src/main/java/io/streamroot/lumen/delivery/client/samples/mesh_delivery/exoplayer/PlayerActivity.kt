package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import com.google.android.exoplayer2.DefaultLoadControl
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.MediaItem
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.util.Util
import io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer.databinding.ActivityPlayerBinding
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient
import io.streamroot.lumen.delivery.client.core.LumenLogLevel
import io.streamroot.lumen.delivery.client.utils.LumenStatsView

class PlayerActivity : AppCompatActivity() {
    data class PlayerActivityArgs(
        val deliveryClientKey: String?,
        val streamUrl: String?,
        val meshProperty: String?
    )

    companion object {
        private const val ARG_DC_KEY = "deliveryClientKey"
        private const val ARG_STREAM_URL = "streamUrl"
        private const val ARG_MESH_PROP = "meshProperty"

        fun makeIntent(ctx: Context, args: PlayerActivityArgs): Intent {
            return Intent(ctx, PlayerActivity::class.java).apply {
                putExtra(ARG_STREAM_URL, args.streamUrl)
                putExtra(ARG_MESH_PROP, args.meshProperty)
                putExtra(ARG_DC_KEY, args.deliveryClientKey)
            }
        }

        fun extractArgs(i: Intent): PlayerActivityArgs {
            return PlayerActivityArgs(
                i.getStringExtra(ARG_DC_KEY),
                i.getStringExtra(ARG_STREAM_URL),
                i.getStringExtra(ARG_MESH_PROP)
            )
        }
    }

    private var deliveryClientKey: String? = null
    private lateinit var streamUrl: String
    private var meshProperty: String? = null

    private lateinit var bindings: ActivityPlayerBinding
    private var player: ExoPlayer? = null
    private var mediaItem: MediaItem? = null
    private var lumenDeliveryClient: LumenDeliveryClient? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bindings = ActivityPlayerBinding.inflate(layoutInflater)
        setContentView(bindings.root)

        val args = extractArgs(intent)
        streamUrl = args.streamUrl!!
        deliveryClientKey = args.deliveryClientKey?.takeUnless { it.isBlank() }
        meshProperty = args.meshProperty?.takeUnless { it.isBlank() }
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
                .setBufferDurationsMs(
                    10_000,
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
                    val finalUrl = Uri.parse(dc.localUrl())

                    mediaItem = MediaItem.fromUri(finalUrl)
                    player = exoPlayer
                    bindings.playerView.player = exoPlayer
                    lumenDeliveryClient = dc
                }
        }

        player!!.addMediaItem(mediaItem!!)
        player!!.repeatMode = Player.REPEAT_MODE_ALL
        player!!.prepare()
    }

    private fun createDeliveryClient(
        player: ExoPlayer,
        loadControl: DefaultLoadControl,
        bandwidthMeter: ExoPlayerBandwidthMeter
    ): LumenDeliveryClient {
        val playerInteractor = PlayerInteractor(player, loadControl, bandwidthMeter)

        return LumenDeliveryClient.meshBuilder(this)
            .playerInteractor(playerInteractor)
            .options {
                deliveryClientKey?.let { deliveryClientKey(it) }
                meshProperty?.let { meshProperty(it) }
                logLevel(LumenLogLevel.INFO)
            }
            .build(streamUrl)
    }

    private fun showStatsView(dc: LumenDeliveryClient) {
        bindings.statsviewContainer.apply {
            removeAllViews()
            val statsView = LumenStatsView(this@PlayerActivity)
            dc.addStateStatsListener(statsView)
            statsView.showStats()
            addView(
                statsView,
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
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

