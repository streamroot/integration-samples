package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer;

import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Player.EventListener;
import com.google.android.exoplayer2.source.TrackGroupArray;
import com.google.android.exoplayer2.trackselection.TrackSelectionArray;

import io.streamroot.ctl.delivery.client.core.CTLQosInterfaceBase;
import io.streamroot.ctl.delivery.client.core.CTLVideoPlaybackState;

public final class ExoPlayerQosModule extends CTLQosInterfaceBase implements EventListener {
    public ExoPlayerQosModule(ExoPlayer exoPlayer) {
        exoPlayer.addListener(this);
    }

    @Override
    public void onSeekProcessed() {
        super.playerStateChange(CTLVideoPlaybackState.SEEKING);
    }

    @Override
    public void onTracksChanged(TrackGroupArray trackGroups, TrackSelectionArray trackSelections) {
        super.playerTrackSwitch();
    }

    @Override
    public void onPlayerError(ExoPlaybackException error) {
        super.playerError();
    }

    @Override
    public void onPlayerStateChanged(boolean playWhenReady, int playbackState) {
        switch(playbackState) {
            case Player.STATE_IDLE:
                super.playerStateChange(CTLVideoPlaybackState.IDLE);
                break;
            case Player.STATE_BUFFERING:
                super.playerStateChange(CTLVideoPlaybackState.REBUFFERING);
                break;
            case Player.STATE_READY:
                super.playerStateChange(playWhenReady ? CTLVideoPlaybackState.PLAYING : CTLVideoPlaybackState.PAUSED);
                break;
            case Player.STATE_ENDED:
                super.playerStateChange(CTLVideoPlaybackState.ENDED);
                break;
        }
    }
}