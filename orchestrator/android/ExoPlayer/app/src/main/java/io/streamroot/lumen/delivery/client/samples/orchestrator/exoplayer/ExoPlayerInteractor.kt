package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer

import com.google.android.exoplayer2.ExoPlaybackException
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.PlaybackParameters
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.source.TrackGroupArray
import com.google.android.exoplayer2.trackselection.TrackSelectionArray
import io.streamroot.lumen.delivery.client.core.*

class ExoPlayerInteractor(player: ExoPlayer) : LumenPlayerInteractorBase(), Player.EventListener {

    init { player.addListener(this) }

    override fun onSeekProcessed() {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING)
    }

    override fun onTracksChanged(trackGroups: TrackGroupArray, trackSelections: TrackSelectionArray) {
        super.playerTrackSwitch()
    }

    override fun onPlayerError(error: ExoPlaybackException) {
        super.playerError()
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
