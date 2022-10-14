package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer;

import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Tracks;

import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState;

public final class PlayerInteractor extends LumenPlayerInteractorBase implements Player.Listener {
    private final ExoPlayer player;

    public PlayerInteractor(ExoPlayer player) {
        this.player = player;
        player.addListener(this);
    }

    @Override
    public void onSeekProcessed() {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING);
    }

    @Override
    public void onTracksChanged(Tracks tracks) {
        super.playerTrackSwitch();
    }

    @Override
    public void onPlayerError(PlaybackException error) {
        super.playerError();
    }

    @Override
    public void onIsPlayingChanged(boolean isPlaying) {
        if (player.getPlaybackState() != Player.STATE_BUFFERING && player.getPlaybackState() != Player.STATE_ENDED && player.getPlaybackState() != Player.STATE_IDLE) {
            super.playerStateChange(isPlaying ? LumenVideoPlaybackState.PLAYING : LumenVideoPlaybackState.PAUSED);
        }
    }

    @Override
    public void onPlaybackStateChanged(int playbackState) {
        switch (playbackState) {
            case Player.STATE_IDLE:
                super.playerStateChange(LumenVideoPlaybackState.IDLE);
                break;
            case Player.STATE_BUFFERING:
                super.playerStateChange(LumenVideoPlaybackState.REBUFFERING);
                break;
            case Player.STATE_READY:
                super.playerStateChange(player.getPlayWhenReady() ? LumenVideoPlaybackState.PLAYING : LumenVideoPlaybackState.PAUSED);
                break;
            case Player.STATE_ENDED:
                super.playerStateChange(LumenVideoPlaybackState.ENDED);
                break;
        }
    }
}