package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer

import com.google.android.exoplayer2.ExoPlaybackException
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.source.TrackGroupArray
import com.google.android.exoplayer2.trackselection.TrackSelectionArray
import io.streamroot.lumen.delivery.client.core.LumenQosInterfaceBase
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState

class ExoPlayerQosModule(exoPlayer: ExoPlayer) : LumenQosInterfaceBase(), Player.EventListener {

    init { exoPlayer.addListener(this) }

    override fun onSeekProcessed() {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING)
    }

    override fun onTracksChanged(trackGroups: TrackGroupArray, trackSelections: TrackSelectionArray) {
        super.playerTrackSwitch()
    }

    override fun onPlayerError(error: ExoPlaybackException) {
        super.playerError()
    }

    override fun onLoadingChanged(isLoading: Boolean) {}

    override fun onPositionDiscontinuity(reason: Int) {}

    override fun onRepeatModeChanged(repeatMode: Int) {}

    override fun onShuffleModeEnabledChanged(shuffleModeEnabled: Boolean) {}

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