package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final ActivityMainBinding binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        binding.launchButton.setOnClickListener(v -> {
            final String stream = binding.streamEditText.getText().toString();
            if (stream.isEmpty()) return;
            final Intent i = PlayerActivity.makeIntent(MainActivity.this, new PlayerActivity.PlayerActivityArgs(
                            binding.dcKeyET.getText().toString(),
                            stream,
                            binding.meshPropET.getText().toString()
                    )).addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
                    .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
        });
    }
}