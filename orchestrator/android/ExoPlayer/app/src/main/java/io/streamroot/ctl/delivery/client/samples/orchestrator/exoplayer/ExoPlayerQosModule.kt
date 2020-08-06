package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer

import com.google.android.exoplayer2.ExoPlaybackException
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.source.TrackGroupArray
import com.google.android.exoplayer2.trackselection.TrackSelectionArray
import io.streamroot.jericho.bridge.QosInterfaceBase
import io.streamroot.jericho.bridge.VideoPlaybackStatePublic

class ExoPlayerQosModule(exoPlayer: ExoPlayer) : QosInterfaceBase(), Player.EventListener {

    init { exoPlayer.addListener(this) }

    override fun onSeekProcessed() {
        super.playerStateChange(VideoPlaybackStatePublic.SEEKING)
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
                super.playerStateChange(VideoPlaybackStatePublic.IDLE)
            }
            Player.STATE_BUFFERING -> {
                super.playerStateChange(VideoPlaybackStatePublic.REBUFFERING)
            }
            Player.STATE_READY -> {
                super.playerStateChange(if (playWhenReady) VideoPlaybackStatePublic.PLAYING else VideoPlaybackStatePublic.PAUSED)
            }
            Player.STATE_ENDED -> {
                super.playerStateChange(VideoPlaybackStatePublic.ENDED)
            }
        }
    }
}