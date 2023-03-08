package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.theoplayer;

import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.SeekBar;
import com.theoplayer.android.api.event.player.PlayerEventTypes;
import com.theoplayer.android.api.player.Player;
import io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.theoplayer.databinding.ActivityPlayerUnifiedControlsBinding;
import java.util.Locale;

/**
 * This class only implements trivial controls for the Unified THEOplayer SDK It should not be
 * ported in any final implementation
 */
public final class PlayerControls {
  private static String secondsToTimeString(final double seconds) {
    int h = (int) (seconds / 3600);
    int m = (int) ((seconds % 3600) / 60);
    int s = (int) (seconds % 60);
    if (h > 100) {
      return "LIVE";
    } else if (h > 0) {
      return String.format(Locale.getDefault(), "%02d:%02d:%02d", h, m, s);
    } else {
      return String.format(Locale.getDefault(), "%02d:%02d", m, s);
    }
  }

  public static void setupUIForUnified(
      LayoutInflater inflater, Player player, ViewGroup controlsContainer) {
    final ActivityPlayerUnifiedControlsBinding controlsBinding =
        ActivityPlayerUnifiedControlsBinding.inflate(inflater, controlsContainer, true);

    // Pause/start
    controlsBinding.btnPlay.setOnClickListener(
        v -> {
          if (player.isPaused()) {
            player.play();
          } else {
            player.pause();
          }
        });

    // Progress granularity
    final int maxProgress = 1000;

    // Timing
    player.addEventListener(
        PlayerEventTypes.PROGRESS,
        event -> {
          final double currentTime = event.getCurrentTime();
          final double duration = player.getDuration();
          controlsBinding.tvCurrentTime.setText(secondsToTimeString(currentTime));
          controlsBinding.tvMaxTime.setText(secondsToTimeString(duration));

          if (duration == 0) return;
          controlsBinding.seekBar.setProgress((int) (currentTime / duration * maxProgress));
        });

    // Seekbar
    controlsBinding.seekBar.setMax(maxProgress);
    controlsBinding.seekBar.setOnSeekBarChangeListener(
        new SeekBar.OnSeekBarChangeListener() {
          @Override
          public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
            if (!fromUser) return;
            final double ratio = progress * 1.0 / maxProgress;
            final double duration = player.getDuration();
            final double newTime = ratio * duration;
            player.setCurrentTime(newTime);
            controlsBinding.tvCurrentTime.setText(secondsToTimeString(newTime));
          }

          @Override
          public void onStartTrackingTouch(SeekBar seekBar) {}

          @Override
          public void onStopTrackingTouch(SeekBar seekBar) {}
        });
  }
}
