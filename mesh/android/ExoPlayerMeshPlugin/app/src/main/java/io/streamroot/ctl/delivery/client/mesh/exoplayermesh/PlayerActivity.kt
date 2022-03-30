package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import android.net.Uri
import android.os.Bundle
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import com.google.android.exoplayer2.MediaItem
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.util.Util
import io.streamroot.ctl.delivery.client.mesh.exoplayermesh.databinding.ActivityPlayerBinding
import io.streamroot.lumen.delivery.client.core.LumenLogLevel
import io.streamroot.lumen.delivery.client.plugin.LumenDeliveryClientPlugin
import io.streamroot.lumen.delivery.client.utils.LumenStatsView

class PlayerActivity : AppCompatActivity() {
    private lateinit var bindings: ActivityPlayerBinding
    private var plugin: LumenDeliveryClientPlugin? = null

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
            LumenDeliveryClientPlugin.Builder(this, manifestUrl).meshOptions {
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

    private fun showStatsView(plugin: LumenDeliveryClientPlugin) {
        bindings.statsviewContainer.apply {
            removeAllViews()
            val statsView = LumenStatsView(this@PlayerActivity)
            plugin.addStateStatsListener(statsView)
            statsView.showStats()
            addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
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

