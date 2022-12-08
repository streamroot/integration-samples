package io.streamroot.lumen.delivery.client.samples.theoplayer;

import static org.junit.Assert.assertEquals;

import androidx.annotation.NonNull;
import com.theoplayer.android.api.timerange.TimeRange;
import com.theoplayer.android.api.timerange.TimeRanges;
import java.util.ArrayList;
import java.util.Iterator;
import org.junit.Test;

public class PlayerInteractorTest {

  private static class TimeRangesBuilder {
    private final ArrayList<TimeRange> list = new ArrayList<>();

    public TimeRangesBuilder tr(double start, double end) {
      list.add(
          new TimeRange() {
            @Override
            public double getStart() {
              return start;
            }

            @Override
            public double getEnd() {
              return end;
            }
          });
      return this;
    }

    public TimeRanges build() {
      return new TimeRanges() {
        @Override
        public double getStart(int i) {
          return 0; // unused
        }

        @Override
        public double getEnd(int i) {
          return 0; // unused
        }

        @Override
        public int length() {
          return 0; // unused
        }

        @NonNull
        @Override
        public Iterator<TimeRange> iterator() {
          return list.iterator();
        }
      };
    }
  }

  @Test
  public void timeRangesToBufferHealthMs_merging() {
    final TimeRanges tr1Separate =
        new TimeRangesBuilder()
            .tr(-5.39482984, -3.22849)
            .tr(-1.0398293, -0.0)
            .tr(0.0000001, 2.2102309203)
            .tr(1000000.0, 1023238123918.1091)
            .build();

    final TimeRanges tr1SeparateDisorder =
        new TimeRangesBuilder()
            .tr(0.0000001, 2.2102309203)
            .tr(-1.0398293, -0.0)
            .tr(1000000.0, 1023238123918.1091)
            .tr(-5.39482984, -3.22849)
            .build();

    final TimeRanges tr2PartialJoint =
        new TimeRangesBuilder()
            .tr(-5.5, -3.5)
            .tr(-3.5, -0.0)
            .tr(-17.5, 0.0)
            .tr(-0.5, 50.5)
            .tr(-16.0, 13.0)
            .tr(-15.0, 52.0)
            .tr(-77.0, -76.2)
            .tr(150.15, 217.8)
            .tr(-16.0, 13.0)
            .build();

    final TimeRanges tr2PartialJointDisorder =
        new TimeRangesBuilder()
            .tr(-0.5, 50.5)
            .tr(-3.5, -0.0)
            .tr(150.15, 217.8)
            .tr(-16.0, 13.0)
            .tr(-15.0, 52.0)
            .tr(-77.0, -76.2)
            .tr(-5.5, -3.5)
            .tr(-16, 13.0)
            .tr(-17.5, 0.0)
            .build();

    for (TimeRanges tr : new TimeRanges[] {tr1Separate, tr1SeparateDisorder}) {
      assertEquals(PlayerInteractor.timeRangesToBufferHealth(-150, tr), 0.0, 0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(-4.33, tr), -3.22849 - (-4.33), 0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(-2.5, tr), 0, 0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(-0.15, tr), 0.15, 0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(0.000000000001, tr), 0.0, 0);

      assertEquals(
          PlayerInteractor.timeRangesToBufferHealth(1000000.0 + 1.11, tr),
          1023238123918.1091 - (1000000.0 + 1.11),
          0);
    }

    for (TimeRanges tr : new TimeRanges[] {tr2PartialJoint, tr2PartialJointDisorder}) {
      assertEquals(
          PlayerInteractor.timeRangesToBufferHealth(-77 + 0.1, tr), -76.2 - (-77 + 0.1), 0);

      assertEquals(
          PlayerInteractor.timeRangesToBufferHealth(150.15 + 10.10320913821938, tr),
          217.8 - (150.15 + 10.10320913821938),
          0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(0.0, tr), 52.0, 0.0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(10.0, tr), 42, 0);
      assertEquals(PlayerInteractor.timeRangesToBufferHealth(51.99, tr), 52.0 - 51.99, 0);

      assertEquals(PlayerInteractor.timeRangesToBufferHealth(-17.5, tr), 52 - (-17.5), 0);
    }
  }

  @Test
  public void timeRangesToBufferHealthMs_one_or_less() {
    TimeRanges tr0 = new TimeRangesBuilder().build();

    TimeRanges tr1 = new TimeRangesBuilder().tr(7.7, 777.77).build();

    TimeRanges tr2 = new TimeRangesBuilder().tr(-7.7, 777.77).build();

    // Zero
    assertEquals(PlayerInteractor.timeRangesToBufferHealth(-17.5, tr0), 0.0, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(-2132391.1392838, tr0), 0.0, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(1392893.02139, tr0), 0.0, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(0.0, tr0), 0.0, 0);

    // 1
    assertEquals(PlayerInteractor.timeRangesToBufferHealth(0.0, tr1), 0.0, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(7.69999999999, tr1), 0.0, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(7.70000, tr1), 777.77 - 7.7, 0);

    assertEquals(
        PlayerInteractor.timeRangesToBufferHealth(100.1102930, tr1), 777.77 - 100.1102930, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(0, tr2), 777.77, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(-1938239.909, tr2), 0.0, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(112, tr2), 777.77 - 112, 0);

    assertEquals(PlayerInteractor.timeRangesToBufferHealth(2323910232983.0, tr2), 0, 0);
  }
}
