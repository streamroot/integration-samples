package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import com.google.android.exoplayer2.MediaItem
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.util.Util
import io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer.databinding.ActivityPlayerBinding
import io.streamroot.lumen.delivery.client.core.LumenLogLevel
import io.streamroot.lumen.delivery.client.plugin.LumenDeliveryClientPlugin
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
    private var plugin: LumenDeliveryClientPlugin? = null

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
        if (Util.SDK_INT <= 23 || plugin == null) {
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
        if (plugin == null) {
            LumenDeliveryClientPlugin.Builder(this, streamUrl).meshOptions {
                deliveryClientKey?.let { deliveryClientKey(it) }
                meshProperty?.let { meshProperty(it) }
                logLevel(LumenLogLevel.INFO)
            }.start().apply {
                plugin = this

                bindings.playerView.player = exoPlayer
                showStatsView(this)

                exoPlayer.playWhenReady = true
                exoPlayer.addMediaItem(MediaItem.fromUri(Uri.parse(finalUri)))
                exoPlayer.repeatMode = Player.REPEAT_MODE_ALL
                exoPlayer.prepare()
            }
        }
    }

    private fun showStatsView(dc: LumenDeliveryClientPlugin) {
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
        if (plugin == null) return

        stopDeliveryClient()
    }

    private fun stopDeliveryClient() {
        plugin?.stop()
        plugin?.exoPlayer?.release()
        plugin = null
    }
}