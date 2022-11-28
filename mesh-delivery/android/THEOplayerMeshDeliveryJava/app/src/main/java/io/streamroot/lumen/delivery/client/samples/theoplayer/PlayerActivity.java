package io.streamroot.lumen.delivery.client.samples.theoplayer;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import com.theoplayer.android.api.THEOplayerConfig;
import com.theoplayer.android.api.THEOplayerView;
import com.theoplayer.android.api.player.Player;
import com.theoplayer.android.api.source.SourceDescription;
import com.theoplayer.android.api.source.TypedSource;
import com.theoplayer.android.api.ui.UIConfiguration;
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import io.streamroot.lumen.delivery.client.samples.theoplayer.databinding.ActivityPlayerBinding;
import io.streamroot.lumen.delivery.client.utils.LumenStatsView;

public class PlayerActivity extends AppCompatActivity {
  private static final String ARG_STREAM_CONFIG = "streamConfig";

  public static Intent makeIntent(Context ctx, @NonNull StreamConfig config) {
    return new Intent(ctx, PlayerActivity.class).putExtra(ARG_STREAM_CONFIG, config);
  }

  private static @NonNull StreamConfig extractConfig(Intent i) {
    return i.getParcelableExtra(ARG_STREAM_CONFIG);
  }

  private @NonNull StreamConfig streamConfig;

  private @NonNull ActivityPlayerBinding bindings;
  private @Nullable THEOplayerView player = null;
  private @Nullable LumenDeliveryClient lumenDeliveryClient = null;

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    bindings = ActivityPlayerBinding.inflate(getLayoutInflater());
    setContentView(bindings.getRoot());

    streamConfig = extractConfig(getIntent());
  }

  @Override
  protected void onStart() {
    super.onStart();
    if (Build.VERSION.SDK_INT > 23) {
      initializePlayer();
    }
  }

  @Override
  protected void onResume() {
    super.onResume();
    if (Build.VERSION.SDK_INT <= 23 || player == null) {
      initializePlayer();
    }
    if (player != null) {
      player.onResume();
    }
  }

  @Override
  protected void onPause() {
    if (Build.VERSION.SDK_INT <= 23) {
      releasePlayer();
    }
    if (player != null) {
      player.onPause();
    }
    super.onPause();
  }

  @Override
  protected void onStop() {
    if (Build.VERSION.SDK_INT > 23) {
      releasePlayer();
    }
    super.onStop();
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    if (player != null) {
      player.onDestroy();
    }
  }

  private void initializePlayer() {
    if (player == null) {
      bindings.playerContainer.removeAllViews();
      THEOplayerConfig playerConfig =
          new THEOplayerConfig.Builder()
              .license(Application.THEO_LICENSE(this))
              .build();
      player = new THEOplayerView(this, playerConfig);

      bindings.playerContainer.addView(
          player, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);

      if (streamConfig.isStreamrootEnabled) {
        // Below, we initialize and start Lumen delivery client
        lumenDeliveryClient = createDeliveryClient(player.getPlayer());
        lumenDeliveryClient.start();
        showStatsView(lumenDeliveryClient);
      }

      // We fetch the final URL from the delivery client
      final String deliveryManifest =
          lumenDeliveryClient != null ? lumenDeliveryClient.localUrl() : streamConfig.contentUrl;

      TypedSource typedSource = TypedSource.Builder.typedSource().src(deliveryManifest).build();

      SourceDescription sourceDescription =
          SourceDescription.Builder.sourceDescription(typedSource).build();

      player.getPlayer().setSource(sourceDescription);
      if (streamConfig.autostart) {
        player.getPlayer().play();
      }

      // Add controls for unified only
      PlayerControls.setupUIForUnified(
          getLayoutInflater(), player.getPlayer(), bindings.playerContainer);
    }
  }

  private LumenDeliveryClient createDeliveryClient(Player player) {
    final PlayerInteractor playerInteractor = new PlayerInteractor(player);

    return LumenDeliveryClient.meshBuilder(this)
        .playerInteractor(playerInteractor)
        .options(
            o -> {
              o.logLevel(streamConfig.logLevel);
              o.deliveryClientKey(streamConfig.streamrootKey);
              if (streamConfig.property != null) o.meshProperty(streamConfig.property);
              if (streamConfig.contentId != null) o.contentId(streamConfig.contentId);
              if (streamConfig.latency != null) o.latency(Short.parseShort(streamConfig.latency));
              return null;
            })
        .build(streamConfig.contentUrl);
  }

  private void showStatsView(LumenDeliveryClient dc) {
    ViewGroup svc = bindings.statsviewContainer;
    svc.removeAllViews();
    final LumenStatsView statsView = new LumenStatsView(this);
    dc.addStateStatsListener(statsView);
    statsView.showStats();
    svc.addView(
        statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
  }

  private void releasePlayer() {
    if (player == null) return;

    stopDeliveryClient();

    player.getPlayer().stop();
    player = null;
  }

  private void stopDeliveryClient() {
    if (lumenDeliveryClient == null) return;
    lumenDeliveryClient.stop();
    lumenDeliveryClient = null;
  }
}
