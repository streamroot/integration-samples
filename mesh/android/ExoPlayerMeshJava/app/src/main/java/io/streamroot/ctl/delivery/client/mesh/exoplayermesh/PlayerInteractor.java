package io.streamroot.ctl.delivery.client.mesh.exoplayermesh;

import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import androidx.annotation.Nullable;

import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.LoadControl;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.source.TrackGroupArray;
import com.google.android.exoplayer2.trackselection.TrackSelectionArray;

import org.jetbrains.annotations.NotNull;

import java.lang.reflect.Field;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState;

public final class ExoPlayerInteractor extends LumenPlayerInteractorBase implements Player.Listener {

    private interface BufferTargetBridge {
        double bufferTarget();
        void setBufferTarget(double bufferTarget);
    }

    private static abstract class LoadControlBufferTargetBridge implements BufferTargetBridge {
        private static final String MAX_BUFFER_FIELD_NAME = "maxBufferUs";

        private final LoadControl loadControl;

        private final Field maxBufferField;
        private final long minBufferUs;

        private LoadControlBufferTargetBridge(LoadControl loadControl, long minBufferUs) {
            this.loadControl = loadControl;
            maxBufferField = getAccessibleFieldElseThrow(loadControl.getClass(), MAX_BUFFER_FIELD_NAME);
            this.minBufferUs = minBufferUs;
        }

        private static Field getAccessibleFieldElseThrow(Class<?> clazz, String fieldName) {
            try {
                final Field minBufferField = clazz.getDeclaredField(fieldName);
                minBufferField.setAccessible(true);
                return minBufferField;
            } catch (Exception e) {
                throw new IllegalArgumentException(String.format(
                        "Impossible to retrieve field `%s` value from LoadControl of type `%s`",
                        fieldName, LoadControl.class.getSimpleName()));
            }
        }

        static long getLongFromFieldElseThrow(LoadControl loadControl, String fieldName) {
            try {
                return getAccessibleFieldElseThrow(loadControl.getClass(), fieldName).getLong(loadControl);
            } catch (Exception e) {
                throw new IllegalArgumentException(String.format(
                        "Impossible to retrieve long field `%s` value from LoadControl of type `%s`",
                        fieldName, LoadControl.class.getSimpleName()));
            }
        }

        @Override
        public double bufferTarget() {
            try {
                return (double) TimeUnit.MICROSECONDS.toSeconds(maxBufferField.getLong(loadControl));
            } catch (Exception e) {
                return 0.0;
            }
        }

        @Override
        public void setBufferTarget(double bufferTarget) {
            final long maxBufferUs = TimeUnit.SECONDS.toMicros((long)bufferTarget);
            if (maxBufferUs >= minBufferUs) try {
                maxBufferField.setLong(
                        loadControl,
                        maxBufferUs
                );
            } catch (Exception ignored) {}
        }
    }

    // 2.10- & 2.12+
    private static final class LoadControlBufferTargetBridgeV1 extends LoadControlBufferTargetBridge {
        private static final String MIN_BUFFER_FIELD_NAME = "minBufferUs";

        private LoadControlBufferTargetBridgeV1(LoadControl loadControl) {
            super(
                    loadControl,
                    getLongFromFieldElseThrow(loadControl, MIN_BUFFER_FIELD_NAME)
            );
        }
    }

    // 2.11
    private static final class LoadControlBufferTargetBridgeV2 extends LoadControlBufferTargetBridge {
        private static final String MIN_BUFFER_AUDIO_FIELD_NAME = "minBufferAudioUs";
        private static final String MIN_BUFFER_VIDEO_FIELD_NAME = "minBufferVideoUs";

        private LoadControlBufferTargetBridgeV2(LoadControl loadControl, boolean audioOnly) {
            super(
                    loadControl,
                    getLongFromFieldElseThrow(
                            loadControl,
                            audioOnly ? MIN_BUFFER_AUDIO_FIELD_NAME : MIN_BUFFER_VIDEO_FIELD_NAME
                    )
            );
        }
    }

    private static final class BufferTargetBridgeFactory {
        private static BufferTargetBridge createInteractor(LoadControl loadControl, boolean audioOnly) {
            try {
                final LoadControlBufferTargetBridge bridge = new LoadControlBufferTargetBridgeV1(loadControl);
                Log.v("Misc", "Using interactor V1");
                return bridge;
            } catch (Exception ignored) {
                try {
                    final LoadControlBufferTargetBridge bridge = new LoadControlBufferTargetBridgeV2(loadControl, audioOnly);
                    Log.v("Misc", "Using interactor V2");
                    return bridge;
                } catch (Exception e) {
                    throw new RuntimeException("Unsupported ExoPlayer version");
                }
            }
        }
    }

    private final Handler handler;

    private final ExoPlayer player;
    final LoadControl loadControl;
    private final ExoPlayerBandwidthMeter bandwidthMeter;

    // Conversion from milliseconds to seconds does not use TimeUnit because we want
    // to keep a floating precision
    final private BufferTargetBridge bridge;

    public ExoPlayerInteractor(ExoPlayer player, LoadControl loadControl, ExoPlayerBandwidthMeter bandwidthMeter) {
        this.handler = new Handler(player.getApplicationLooper());
        this.player = player;
        this.loadControl = loadControl;
        this.bandwidthMeter = bandwidthMeter;
        this.bridge = BufferTargetBridgeFactory.createInteractor(loadControl, false);

        player.addListener(this);
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
    public void onPlayerError(PlaybackException error) {
        super.playerError();
    }

    @Override
    public void onPlayerStateChanged(boolean playWhenReady, int playbackState) {
        switch (playbackState) {
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

    private interface Function<T> {
        T execute();
    }

    private <T> T runSyncOnEPHandler(final Function<T> block) throws InterruptedException {
        final Object lock = new Object();
        final AtomicReference<T> tRef = new AtomicReference<>(null);
        synchronized (lock) {
            handler.post(() -> {
                synchronized (lock) {
                    tRef.set(block.execute());
                    lock.notify();
                }
            });
            lock.wait();
        }
        return tRef.get();
    }

    private void runSyncOnEPHandler(final Runnable block) throws InterruptedException {
        runSyncOnEPHandler((Function<Void>) () -> {
            block.run();
            return null;
        });
    }

    @Nullable
    @Override
    public Double bufferHealth() {
        try {
            return runSyncOnEPHandler(() -> (player.getBufferedPosition() - player.getCurrentPosition()) / 1000.0);
        } catch (InterruptedException e) {
            return 0.0;
        }
    }

    @Nullable
    @Override
    public Double bufferTarget() {
        try {
            return runSyncOnEPHandler(bridge::bufferTarget);
        } catch (InterruptedException e) {
            return 0.0;
        }
    }

    @Override
    public void setBufferTarget(double target) {
        try {
            runSyncOnEPHandler(() -> bridge.setBufferTarget(target));
        } catch (InterruptedException ignored) {}
    }

    @Override
    public void setEstimatedBandwidth(@Nullable Long bps) {
        if (bps != null) {
            bandwidthMeter.setEstimatedBandwidth(bps);
        }
    }
}