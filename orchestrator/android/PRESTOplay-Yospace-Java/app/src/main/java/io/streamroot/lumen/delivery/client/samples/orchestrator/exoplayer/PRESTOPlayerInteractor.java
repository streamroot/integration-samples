package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.castlabs.android.player.DisplayInfo;
import com.castlabs.android.player.PlayerController;
import com.castlabs.android.player.PlayerListener;
import com.castlabs.android.player.TrackSelectionListener;
import com.castlabs.android.player.exceptions.CastlabsPlayerException;
import com.castlabs.android.player.models.VideoTrackQuality;

import java.lang.ref.WeakReference;

import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState;

public final class PRESTOPlayerInteractor extends LumenPlayerInteractorBase implements PlayerListener, TrackSelectionListener {

    private WeakReference<PlayerController> mPlayerInterface = null;

    public PRESTOPlayerInteractor(PlayerController playerInterface) {
        setPlayerInterface(playerInterface);
    }

    public synchronized void setPlayerInterface(PlayerController playerInterface) {
        if (mPlayerInterface == null) {
            mPlayerInterface = new WeakReference<>(playerInterface);
            playerInterface.addPlayerListener(this);
            playerInterface.addTrackSelectionListener(this);
        }
    }

    /**
     * PlayerListener
     */

    @Override
    public void onError(@NonNull CastlabsPlayerException e) {
        super.playerError();
    }

    @Override
    public void onStateChanged(@NonNull PlayerController.State state) {
        switch (state) {
            case Idle:
                super.playerStateChange(LumenVideoPlaybackState.IDLE);
                break;
            case Preparing:
                break;
            case Buffering:
                super.playerStateChange(LumenVideoPlaybackState.REBUFFERING);
                break;
            case Pausing:
                super.playerStateChange(LumenVideoPlaybackState.PAUSED);
                break;
            case Playing:
                super.playerStateChange(LumenVideoPlaybackState.PLAYING);
                break;
            case Finished:
                super.playerStateChange(LumenVideoPlaybackState.ENDED);
                break;
        }
    }

    @Override
    public void onSeekTo(long l) {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING);
    }

    @Override public void onFatalErrorOccurred(@NonNull CastlabsPlayerException e) {}
    @Override public void onVideoSizeChanged(int i, int i1, float v) {}
    @Override public void onSeekRangeChanged(long l, long l1) {}
    @Override public void onPlaybackPositionChanged(long l) {}
    @Override public void onDisplayChanged(DisplayInfo displayInfo, boolean b) {}
    @Override public void onDurationChanged(long l) {}
    @Override public void onSpeedChanged(float v) {}
    @Override public void onPlayerModelChanged() {}
    @Override public void onFullyBuffered() {}

    /**
     * TrackSelectionListener
     */

    @Override
    public void onVideoQualitySelectionChanged(@NonNull VideoTrackQuality videoTrackQuality, int i, @Nullable String s, long l, long l1) {
        super.playerTrackSwitch();
    }
}