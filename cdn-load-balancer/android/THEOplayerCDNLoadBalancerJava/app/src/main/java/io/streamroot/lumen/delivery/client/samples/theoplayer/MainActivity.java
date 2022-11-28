package io.streamroot.lumen.delivery.client.samples.theoplayer;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;
import io.streamroot.lumen.delivery.client.samples.theoplayer.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
  private ActivityMainBinding binding;

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    binding = ActivityMainBinding.inflate(getLayoutInflater());
    setContentView(binding.getRoot());
    binding.dcPlayerVersions.setText(
        String.format(
            "DC: %s / Player: %s",
            io.streamroot.lumen.delivery.client.core.BuildConfig.DC_VERSION_NAME,
            BuildConfig.PLAYER_VERSION));
    binding.launchButton.setOnClickListener(
        v -> {
          final String stream = binding.streamET.getText().toString();
          if (stream.isEmpty()) return;

          launchStream(
              new StreamConfig(
                  true,
                  true,
                  binding.dcKeyET.getText().toString(),
                  null,
                  binding.propertyET.getText().toString(),
                  stream,
                  LumenLogLevel.ERROR,
                  null));
        });

    final Intent i = getIntent();
    if (i != null && i.getData() != null) {
      handleDeeplink(i.getData());
    }
  }

  private void handleDeeplink(@NonNull Uri uri) {
    StreamConfig config = StreamConfig.createFromUri(this, uri);
    binding.dcKeyET.setText(config.streamrootKey);
    binding.streamET.setText(config.contentUrl);
    binding.propertyET.setText(config.property);

    try {
      if (uri.getQueryParameter("autostart").equals("true")) {
        launchStream(config);
      }
    } catch (Exception ignored) {
    }
  }

  private void launchStream(@NonNull StreamConfig config) {
    final Intent i =
        PlayerActivity.makeIntent(MainActivity.this, config)
            .addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    startActivity(i);
  }
}
