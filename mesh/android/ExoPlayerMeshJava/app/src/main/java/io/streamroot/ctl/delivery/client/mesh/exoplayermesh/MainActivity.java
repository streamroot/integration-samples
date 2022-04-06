package io.streamroot.ctl.delivery.client.mesh.exoplayermesh;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import io.streamroot.ctl.delivery.client.mesh.exoplayermesh.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final ActivityMainBinding binding = ActivityMainBinding.inflate(getLayoutInflater());
        binding.playButton.setOnClickListener(v -> startActivity(new Intent(this, PlayerActivity.class)));
        setContentView(binding.getRoot());
    }
}