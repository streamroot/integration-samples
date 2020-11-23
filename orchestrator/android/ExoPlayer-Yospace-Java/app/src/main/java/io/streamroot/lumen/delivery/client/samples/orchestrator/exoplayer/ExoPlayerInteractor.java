package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import androidx.annotation.NonNull;

import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Player.EventListener;
import com.google.android.exoplayer2.source.TrackGroupArray;
import com.google.android.exoplayer2.trackselection.TrackSelectionArray;

import java.util.concurrent.atomic.AtomicBoolean;

import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState;

public final class ExoPlayerInteractor extends LumenPlayerInteractorBase implements EventListener {

    private AtomicBoolean listening = new AtomicBoolean(false);

    public ExoPlayerInteractor() {}
    public ExoPlayerInteractor(@NonNull ExoPlayer exoPlayer) { setPlayer(exoPlayer); }

    public void setPlayer(@NonNull ExoPlayer exoPlayer) {
        if (listening.compareAndSet(false, true)) {
            exoPlayer.addListener(this);
        }
    }

    @Override
    public void onSeekProcessed() {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING);
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
                super.playerStateChange(LumenVideoPlaybackState.IDLE);
                break;
            case Player.STATE_BUFFERING:
                super.playerStateChange(LumenVideoPlaybackState.REBUFFERING);
                break;
            case Player.STATE_READY:
                super.playerStateChange(playWhenReady ? LumenVideoPlaybackState.PLAYING : LumenVideoPlaybackState.PAUSED);
                break;
            case Player.STATE_ENDED:
                super.playerStateChange(LumenVideoPlaybackState.ENDED);
                break;
        }
    }
}