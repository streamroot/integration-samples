package io.streamroot.lumen.delivery.client.samples.theoplayer;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.theoplayer.android.api.event.EventType;
import com.theoplayer.android.api.event.player.PlayerEventTypes;
import com.theoplayer.android.api.event.track.mediatrack.video.VideoTrackEventTypes;
import com.theoplayer.android.api.event.track.mediatrack.video.list.VideoTrackListEventTypes;
import com.theoplayer.android.api.player.Player;
import com.theoplayer.android.api.timerange.TimeRange;
import com.theoplayer.android.api.timerange.TimeRanges;
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState;
import java.util.ArrayList;
import java.util.Collections;

public final class PlayerInteractor extends LumenPlayerInteractorBase {
  private static final String TAG = "TheoPlayerInteractor";
  private static final double DEFAULT_INITIAL_BUFFER_TARGET_S = 50.0;

  public static class CustomTimeRange implements TimeRange {
    private final double mStart, mEnd;

    CustomTimeRange(double start, double end) {
      mStart = start;
      mEnd = end;
    }

    @Override
    public double getEnd() {
      return mEnd;
    }

    @Override
    public double getStart() {
      return mStart;
    }
  }

  public static double timeRangesToBufferHealth(double currentTime, TimeRanges timeRanges) {
    // Extract future ranges
    ArrayList<CustomTimeRange> futureRanges = new ArrayList<>();

    for (TimeRange tr : timeRanges) {
      if (tr.getEnd() >= currentTime)
        futureRanges.add(new CustomTimeRange(tr.getStart(), tr.getEnd()));
    }

    // Sort by Start
    Collections.sort(futureRanges, (o1, o2) -> Double.compare(o1.getStart(), o2.getStart()));

    if (futureRanges.size() > 1) {
      // Attempt range merge

      ArrayList<CustomTimeRange> tmpRanges;
      boolean noMoreWorkToDo;
      CustomTimeRange currTr, nextTr;
      while (true) {
        if (futureRanges.size() <= 1) break;

        noMoreWorkToDo = true;
        tmpRanges = new ArrayList<>();

        for (int i = 0; i < futureRanges.size(); i++) {
          currTr = futureRanges.get(i);
          if (i == futureRanges.size() - 1) {
            tmpRanges.add(currTr);
            continue;
          }
          nextTr = futureRanges.get(i + 1);

          if (nextTr.getStart() >= currTr.getStart() && nextTr.getStart() <= currTr.getEnd()
              || currTr.getStart() >= nextTr.getStart() && currTr.getStart() <= nextTr.getEnd()) {
            // Intersection => merge
            noMoreWorkToDo = false;
            i++;
            tmpRanges.add(
                new CustomTimeRange(
                    Math.min(currTr.getStart(), nextTr.getStart()),
                    Math.max(currTr.getEnd(), nextTr.getEnd())));
          } else {
            tmpRanges.add(currTr);
          }
        }
        futureRanges = tmpRanges;
        if (noMoreWorkToDo) break;
      }
    }

    // At this point we have non aliasing intervals, find the interval containing currentTime
    double bufferHealth = 0.0;
    for (CustomTimeRange p : futureRanges) {
      if (p.getStart() <= currentTime && p.getEnd() >= currentTime) {
        bufferHealth = p.getEnd() - currentTime;
        break;
      }
    }
    return bufferHealth;
  }

  @NonNull private final Player player;
  @Nullable private EventType<?> lastEvent = null;

  public PlayerInteractor(@NonNull Player player) {
    this(player, DEFAULT_INITIAL_BUFFER_TARGET_S);
  }

  public PlayerInteractor(@NonNull Player player, double initialBufferTargetS) {
    this.player = player;

    setBufferTarget(initialBufferTargetS);
    addListeners();
  }

  private void addListeners() {
    player.addEventListener(
        PlayerEventTypes.SOURCECHANGE,
        sourceChangeEvent ->
            playerStateChange(PlayerEventTypes.SOURCECHANGE, LumenVideoPlaybackState.IDLE));
    player.addEventListener(
        PlayerEventTypes.PLAYING,
        playingEvent ->
            playerStateChange(PlayerEventTypes.PLAYING, LumenVideoPlaybackState.PLAYING));
    player.addEventListener(
        PlayerEventTypes.PAUSE,
        pauseEvent -> playerStateChange(PlayerEventTypes.PAUSE, LumenVideoPlaybackState.PAUSED));
    player.addEventListener(
        PlayerEventTypes.SEEKING,
        pauseEvent -> playerStateChange(PlayerEventTypes.SEEKING, LumenVideoPlaybackState.SEEKING));
    player.addEventListener(
        PlayerEventTypes.WAITING,
        pauseEvent -> {
          if (lastEvent != null
              && (lastEvent.equals(PlayerEventTypes.SOURCECHANGE)
                  || lastEvent.equals(PlayerEventTypes.SEEKING)
                  || lastEvent.equals(PlayerEventTypes.ENDED))) return;

          playerStateChange(PlayerEventTypes.WAITING, LumenVideoPlaybackState.REBUFFERING);
        });
    player.addEventListener(
        PlayerEventTypes.ENDED,
        pauseEvent -> playerStateChange(PlayerEventTypes.ENDED, LumenVideoPlaybackState.ENDED));

    player.addEventListener(PlayerEventTypes.ERROR, pauseEvent -> super.playerError());

    player
        .getVideoTracks()
        .addEventListener(
            VideoTrackListEventTypes.TRACKLISTCHANGE,
            trackListChangeEvent ->
                trackListChangeEvent
                    .getTrack()
                    .addEventListener(
                        VideoTrackEventTypes.ACTIVEQUALITYCHANGEDEVENT,
                        activeQualityChangedEvent -> super.playerTrackSwitch()));
  }

  private void playerStateChange(
      @NonNull EventType<?> event, @NonNull LumenVideoPlaybackState videoPlaybackState) {
    if (event.equals(lastEvent)) return;
    lastEvent = event;
    super.playerStateChange(videoPlaybackState);
  }

  @Override
  public Double bufferTarget() {
    return (double) player.getAbr().getTargetBuffer();
  }

  @Override
  public void setBufferTarget(double target) {
    player.getAbr().setTargetBuffer((int) (target + 0.5));
  }

  @Override
  public Double bufferHealth() {
    return timeRangesToBufferHealth(player.getCurrentTime(), player.getBuffered());
  }

  @Override
  public Double playbackTime() {
    return player.getCurrentTime();
  }
}
