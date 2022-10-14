package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer

import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.PlaybackException
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.Tracks
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState

class PlayerInteractor(
    private val player: ExoPlayer
) : LumenPlayerInteractorBase(),
    Player.Listener {

    init {
        player.addListener(this)
    }

    override fun onSeekProcessed() {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING)
    }

    override fun onTracksChanged(tracks: Tracks) {
        super.playerTrackSwitch()
    }

    override fun onPlayerError(error: PlaybackException) {
        super.playerError()
    }

    override fun onIsPlayingChanged(isPlaying: Boolean) {
        if (player.playbackState != Player.STATE_BUFFERING && player.playbackState != Player.STATE_ENDED && player.playbackState != Player.STATE_IDLE) {
            super.playerStateChange(if (isPlaying) LumenVideoPlaybackState.PLAYING else LumenVideoPlaybackState.PAUSED)
        }
    }

    override fun onPlayerStateChanged(playWhenReady: Boolean, playbackState: Int) {
        when (playbackState) {
            Player.STATE_IDLE -> {
                super.playerStateChange(LumenVideoPlaybackState.IDLE)
            }
            Player.STATE_BUFFERING -> {
                super.playerStateChange(LumenVideoPlaybackState.REBUFFERING)
            }
            Player.STATE_READY -> {
                super.playerStateChange(if (playWhenReady) LumenVideoPlaybackState.PLAYING else LumenVideoPlaybackState.PAUSED)
            }
            Player.STATE_ENDED -> {
                super.playerStateChange(LumenVideoPlaybackState.ENDED)
            }
        }
    }
}