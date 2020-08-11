package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer;

import android.os.Handler;

import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.Timeline;

import org.jetbrains.annotations.NotNull;

import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import io.streamroot.ctl.delivery.client.core.CTLMediaInterface;
import io.streamroot.ctl.delivery.client.core.CTLTimeRange;


public final class ExoPlayerMediaInterface implements CTLMediaInterface {
    private interface InnerBlockReturner<T> {
        T run();
    }

    private final List<CTLTimeRange> emptyTRList = Collections.unmodifiableList(Collections.<CTLTimeRange>emptyList());

    private final Handler handler;
    private final ExoPlayer player;

    public ExoPlayerMediaInterface(ExoPlayer player) {
        this.player = player;
        this.handler = new Handler(player.getApplicationLooper());
    }

    private <T> T runSyncOnEPHandler(final InnerBlockReturner<T> block) {
        final AtomicReference<T> t = new AtomicReference<>();
        final Object lock = new Object();
        synchronized (lock) {
            handler.post(new Runnable() {
                @Override
                public void run() {
                    synchronized (lock) {
                        t.set(block.run());
                        lock.notify();
                    }
                }
            });
            try {
                lock.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        return t.get();
    }

    @Override
    public double playbackTime() {
        final Double pt = runSyncOnEPHandler(new InnerBlockReturner<Double>() {
            @Override
            public Double run() {
                return (double) (getCurrentWindowShift() + player.getCurrentPosition());
            }
        });
        return pt != null ? pt : 0L;
    }

    private long getCurrentWindowShift() {
        final Timeline current = player.getCurrentTimeline();
        final Timeline.Window timelineWindow = new Timeline.Window();

        if (player.getCurrentWindowIndex() < current.getWindowCount()) {
            current.getWindow(player.getCurrentWindowIndex(), timelineWindow);
            return timelineWindow.getPositionInFirstPeriodMs();
        }
        return 0L;
    }

    @NotNull
    @Override
    public List<CTLTimeRange> timeRanges() {
        final List<CTLTimeRange> trs = runSyncOnEPHandler(new InnerBlockReturner<List<CTLTimeRange>>() {
            @Override
            public List<CTLTimeRange> run() {
                final long shift = getCurrentWindowShift();
                final long rangeDurationMs = player.getBufferedPosition() - player.getCurrentPosition();

                if (rangeDurationMs > 0) {
                    return Collections.singletonList(new CTLTimeRange(shift + player.getCurrentPosition(), rangeDurationMs / 1000f));
                }
                return emptyTRList;
            }
        });
        return trs != null ? trs : emptyTRList;
    }
}
