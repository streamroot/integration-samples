package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer

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
import io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer.databinding.ActivityPlayerBinding
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient
import io.streamroot.lumen.delivery.client.core.LumenLogLevel
import io.streamroot.lumen.delivery.client.utils.LumenStatsView

class PlayerActivity : AppCompatActivity() {
    data class PlayerActivityArgs(
        val deliveryClientKey: String?,
        val streamUrl: String?,
        val orchestratorProperty: String?
    )

    companion object {
        private const val ARG_DC_KEY = "deliveryClientKey"
        private const val ARG_STREAM_URL = "streamUrl"
        private const val ARG_ORCH_PROP = "orchestratorProperty"

        fun makeIntent(ctx: Context, args: PlayerActivityArgs): Intent {
            return Intent(ctx, PlayerActivity::class.java).apply {
                putExtra(ARG_STREAM_URL, args.streamUrl)
                putExtra(ARG_ORCH_PROP, args.orchestratorProperty)
                putExtra(ARG_DC_KEY, args.deliveryClientKey)
            }
        }

        fun extractArgs(i: Intent): PlayerActivityArgs {
            return PlayerActivityArgs(
                i.getStringExtra(ARG_DC_KEY),
                i.getStringExtra(ARG_STREAM_URL),
                i.getStringExtra(ARG_ORCH_PROP)
            )
        }
    }

    private var deliveryClientKey: String? = null
    private lateinit var streamUrl: String
    private var orchestratorProperty: String? = null

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
        orchestratorProperty = args.orchestratorProperty?.takeUnless { it.isBlank() }
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
            val exoPlayerBuilder = ExoPlayer.Builder(this)

            exoPlayerBuilder
                .build().also { exoPlayer ->
                    exoPlayer.playWhenReady = true

                    // Below, we initialize and start Lumen delivery client
                    val dc = createDeliveryClient(exoPlayer)
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

    private fun createDeliveryClient(player: ExoPlayer): LumenDeliveryClient {
        val playerInteractor = PlayerInteractor(player)

        return LumenDeliveryClient.orchestratorBuilder(this)
            .playerInteractor(playerInteractor)
            .options {
                deliveryClientKey?.let { deliveryClientKey(it) }
                orchestratorProperty?.let { orchestratorProperty(it) }
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