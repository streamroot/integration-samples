package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.LoadControl;
import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.source.TrackGroupArray;
import com.google.android.exoplayer2.trackselection.TrackSelectionArray;
import com.google.android.exoplayer2.upstream.BandwidthMeter;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.DataSpec;
import com.google.android.exoplayer2.upstream.DefaultBandwidthMeter;
import com.google.android.exoplayer2.upstream.TransferListener;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorWrapperInterface;
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState;

public final class PlayerInteractor extends LumenPlayerInteractorBase implements Player.EventListener {

    private static final String TAG = "ExoPlayerInteractor";

    public static class DefaultBandwidthMeterSR implements BandwidthMeter, TransferListener {
        private final DefaultBandwidthMeter wrappedEstimator;

        public DefaultBandwidthMeterSR(Context context) {
            this.wrappedEstimator = new DefaultBandwidthMeter.Builder(context).build();
        }

        @Nullable
        @Override
        public TransferListener getTransferListener() {
            return this;
        }

        @Override
        public long getBitrateEstimate() {
            return wrappedEstimator.getBitrateEstimate();
        }

        @Override
        public void addEventListener(Handler eventHandler, EventListener eventListener) {
            wrappedEstimator.addEventListener(eventHandler, eventListener);
        }

        @Override
        public void removeEventListener(EventListener eventListener) {
            wrappedEstimator.removeEventListener(eventListener);
        }

        @Override
        public void onTransferInitializing(DataSource source, DataSpec dataSpec, boolean isNetwork) {
            wrappedEstimator.onTransferInitializing(source, dataSpec, isNetwork);
        }

        @Override
        public void onTransferStart(DataSource source, DataSpec dataSpec, boolean isNetwork) {
            wrappedEstimator.onTransferStart(source, dataSpec, isNetwork);
        }

        @Override
        public void onBytesTransferred(DataSource source, DataSpec dataSpec, boolean isNetwork, int bytesTransferred) {
            wrappedEstimator.onBytesTransferred(source, dataSpec, isNetwork, bytesTransferred);
        }

        @Override
        public void onTransferEnd(DataSource source, DataSpec dataSpec, boolean isNetwork) {
            wrappedEstimator.onTransferEnd(source, dataSpec, isNetwork);
        }
    }

    public static class ExoPlayerBandwidthMeter implements BandwidthMeter, TransferListener {
        private class HandlerAndListener {
            final Handler handler;
            final BandwidthMeter.EventListener eventListener;

            private HandlerAndListener(Handler handler, EventListener eventListener) {
                this.handler = handler;
                this.eventListener = eventListener;
            }
        }

        private final Context context;
        private final ArrayList<HandlerAndListener> listeners;

        private DefaultBandwidthMeterSR defaultBandwidthMeterSR = null;
        private LumenPlayerInteractorWrapperInterface.Driver bwDriver = null;

        private Long meshEstimatedBandwidth;

        ExoPlayerBandwidthMeter(Context context, SimpleExoPlayer.Builder playerBuilder) {
            this.context = context;
            this.listeners = new ArrayList<>();

            setDriver(Driver.PLAYER);
            meshEstimatedBandwidth = defaultBandwidthMeterSR.getBitrateEstimate();
            playerBuilder.setBandwidthMeter(this);
        }

        synchronized void setDriver(Driver driver) {
            if (bwDriver != null && bwDriver == driver) return;

            bwDriver = driver;
            Log.d(TAG, "[Lumen][android][BandwidthMeter] => set BW driver : " + driver);

            if (driver == Driver.PLAYER) {
                // Transfer listeners to a new BW meter
                if (defaultBandwidthMeterSR != null) {
                    for (HandlerAndListener it : listeners) {
                        defaultBandwidthMeterSR.removeEventListener(it.eventListener);
                    }
                }
                defaultBandwidthMeterSR = new DefaultBandwidthMeterSR(context);
                for (HandlerAndListener it : listeners) {
                    defaultBandwidthMeterSR.addEventListener(it.handler, it.eventListener);
                }
            }
        }

        @Override
        public synchronized long getBitrateEstimate() {
            switch (bwDriver) {
                case PLAYER:
                    return defaultBandwidthMeterSR.getBitrateEstimate();
                case MESH:
                    return meshEstimatedBandwidth;
                default:
                    return 0L;
            }
        }

        public synchronized void setMeshEstimatedBandwidth(Long bps) {
            meshEstimatedBandwidth = bps;
        }

        @Nullable
        @Override
        public TransferListener getTransferListener() {
            return this;
        }

        @Override
        public synchronized void addEventListener(Handler eventHandler, EventListener eventListener) {
            listeners.add(new HandlerAndListener(eventHandler, eventListener));
            defaultBandwidthMeterSR.addEventListener(eventHandler, eventListener);
        }

        @Override
        public synchronized void removeEventListener(EventListener eventListener) {
            for (Iterator<HandlerAndListener> iterator = listeners.iterator(); iterator.hasNext(); ) {
                if (iterator.next().eventListener == eventListener) {
                    iterator.remove();
                }
            }
            defaultBandwidthMeterSR.removeEventListener(eventListener);
        }

        @Override
        public synchronized void onTransferInitializing(DataSource source, DataSpec dataSpec, boolean isNetwork) {
            defaultBandwidthMeterSR.onTransferInitializing(source, dataSpec, isNetwork);
        }

        @Override
        public synchronized void onTransferStart(DataSource source, DataSpec dataSpec, boolean isNetwork) {
            defaultBandwidthMeterSR.onTransferStart(source, dataSpec, isNetwork);
        }

        @Override
        public synchronized void onBytesTransferred(DataSource source, DataSpec dataSpec, boolean isNetwork, int bytesTransferred) {
            defaultBandwidthMeterSR.onBytesTransferred(source, dataSpec, isNetwork, bytesTransferred);
        }

        @Override
        public synchronized void onTransferEnd(DataSource source, DataSpec dataSpec, boolean isNetwork) {
            defaultBandwidthMeterSR.onTransferEnd(source, dataSpec, isNetwork);
        }
    }

    private interface BufferTargetBridge {
        double bufferTarget();

        void setBufferTarget(double bufferTarget);
    }

    private static abstract class LoadControlBufferTargetBridge implements BufferTargetBridge {
        private static final String MAX_BUFFER_FIELD_NAME = "maxBufferUs";

        private final LoadControl loadControl;

        private final Field maxBufferField;
        private final Field minBufferField;

        private LoadControlBufferTargetBridge(LoadControl loadControl, Field minBufferField) {
            this.loadControl = loadControl;
            maxBufferField = getAccessibleFieldElseThrow(loadControl.getClass(), MAX_BUFFER_FIELD_NAME);
            this.minBufferField = minBufferField;
        }

        protected static Field getAccessibleFieldElseThrow(Class<?> clazz, String fieldName) {
            try {
                final Field myField = clazz.getDeclaredField(fieldName);
                myField.setAccessible(true);
                return myField;
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
            final long bufferTargetUs = TimeUnit.SECONDS.toMicros((long) bufferTarget);
            try {
                maxBufferField.setLong(
                        loadControl,
                        bufferTargetUs
                );
                minBufferField.setLong(
                        loadControl,
                        bufferTargetUs
                );
            } catch (Exception ignored) {
            }
        }
    }

    // 2.10- & 2.12+
    private static final class LoadControlBufferTargetBridgeV1 extends LoadControlBufferTargetBridge {
        private static final String MIN_BUFFER_FIELD_NAME = "minBufferUs";

        private LoadControlBufferTargetBridgeV1(LoadControl loadControl) {
            super(
                    loadControl,
                    getAccessibleFieldElseThrow(loadControl.getClass(), MIN_BUFFER_FIELD_NAME)
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
                    getAccessibleFieldElseThrow(
                            loadControl.getClass(),
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

    public PlayerInteractor(ExoPlayer player, LoadControl loadControl, ExoPlayerBandwidthMeter bandwidthMeter) {
        this.handler = new Handler(player.getApplicationLooper());
        this.player = player;
        this.loadControl = loadControl;
        this.bandwidthMeter = bandwidthMeter;
        this.bridge = BufferTargetBridgeFactory.createInteractor(loadControl, false);

        player.addListener(this);
        updateBWMeter(bandwidthMeter.getBitrateEstimate());
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
    public void onIsPlayingChanged(boolean isPlaying) {
        if (player.getPlaybackState() != Player.STATE_BUFFERING && player.getPlaybackState() != Player.STATE_ENDED && player.getPlaybackState() != Player.STATE_IDLE) {
            super.playerStateChange(isPlaying ? LumenVideoPlaybackState.PLAYING : LumenVideoPlaybackState.PAUSED);
        }
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
                super.playerStateChange(player.getPlayWhenReady() ? LumenVideoPlaybackState.PLAYING : LumenVideoPlaybackState.PAUSED);
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
        } catch (InterruptedException ignored) {
        }
    }

    // Bandwidth

    private void updateBWMeter(Long bps) {
        bandwidthMeter.setMeshEstimatedBandwidth(bps);
    }

    @Override
    public void setEstimatedBandwidth(@Nullable Long bps) {
        if (bps != null) {
            updateBWMeter(bps);
        }
    }

    @Override
    public void setBandwidthDriver(@NonNull Driver driver) {
        bandwidthMeter.setDriver(driver);
    }
}