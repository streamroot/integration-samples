package io.streamroot.dna.samples.jwplayer

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.exoplayer2.DefaultLoadControl
import com.google.android.exoplayer2.LoadControl
import com.longtailvideo.jwplayer.JWPlayerView
import com.longtailvideo.jwplayer.configuration.PlayerConfig
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem
import io.streamroot.dna.core.DnaClient
import io.streamroot.dna.core.log.LogLevel
import io.streamroot.dna.utils.stats.StatsView
import io.streamroot.dna.utils.stats.StreamStatsManager

class PlayerActivity : AppCompatActivity() {
    data class PlayerActivityArgs(val url:String?)

    companion object {
        private const val ARG_STREAM_URL = "streamUrl"

        fun makeIntent(ctx: Context, args: PlayerActivityArgs) : Intent {
            return Intent(ctx, PlayerActivity::class.java).apply {
                putExtra(ARG_STREAM_URL, args.url)
            }
        }
        fun extractArgs(i: Intent) : PlayerActivityArgs {
            return PlayerActivityArgs(
                    i.getStringExtra(ARG_STREAM_URL)
            )
        }
    }

    private lateinit var streamrootDnaStatsView: StatsView

    private var mStreamUrl: String? = null

    private var player: JWPlayerView? = null

    private var dnaClient: DnaClient? = null
    private var streamStatsManager: StreamStatsManager? = null

    private val latency: Int = 30
    private val srEnabled = true

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_player)

        val args = extractArgs(intent)
        mStreamUrl = args.url

        player = findViewById(R.id.jwplayer)
        streamrootDnaStatsView = findViewById(R.id.streamrootDnaStatsView)

        initPlayer()
    }

    override fun onStart() {
        super.onStart()
        player?.onStart()
    }

    override fun onResume() {
        super.onResume()
        player?.onResume()
    }

    override fun onPause() {
        player?.onPause()
        super.onPause()
    }

    override fun onStop() {
        player?.onStop()
        super.onStop()
    }

    override fun onDestroy() {
        player?.onDestroy()
        stopStreamroot()
        super.onDestroy()
    }

    private fun initPlayer() {
        if (srEnabled) {
            val loadControl = DefaultLoadControl.Builder()
                    .setBufferDurationsMs(
                            10_000,
                            DefaultLoadControl.DEFAULT_MAX_BUFFER_MS,
                            DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_MS,
                            DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS
                    )
                    .createDefaultLoadControl()
            player!!.exoPlayerSettings.setLoadControl(loadControl)

            dnaClient = initStreamroot(player!!, loadControl)
        }

        val manifestUri = dnaClient?.manifestUrl ?: Uri.parse(mStreamUrl)

        val playerConfig = PlayerConfig.Builder()
                .playlist(mutableListOf(PlaylistItem.Builder()
                        .file(manifestUri.toString())
                        .build()
                ))
                .allowCrossProtocolRedirects(true)
                .autostart(true)
                .repeat(true)
                .apply { if (BuildConfig.DEBUG) mute(true) }
                .build()

        player!!.setup(playerConfig)
    }

    private fun initStreamroot(
        newPlayer: JWPlayerView,
        loadControl: LoadControl
    ): DnaClient? {
        var mSdk: DnaClient? = null
        try {
            mSdk = DnaClient.newBuilder()
                .context(applicationContext)
                .playerInteractor(JWPlayerInteractor(this, newPlayer, loadControl, false))
                .latency(latency)
                .qosModule(JWPlayerQosModule(newPlayer))
                .logLevel(LogLevel.OFF) // Default level: ERROR. Available: [VERBOSE, DEBUG, INFO, WARN, ERROR, OFF]
                .start(Uri.parse(mStreamUrl))

            streamStatsManager = StreamStatsManager.newStatsManager(mSdk, streamrootDnaStatsView)
        } catch (e: Exception) {
            Toast.makeText(applicationContext, e.message, Toast.LENGTH_LONG).show()
        }

        return mSdk
    }

    private fun stopStreamroot() {
        dnaClient?.close()
        dnaClient = null

        streamStatsManager?.close()
        streamStatsManager = null
    }
}