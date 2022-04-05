package io.streamroot.ctl.delivery.client.mesh.exoplayermesh;

import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.exoplayer2.DefaultLoadControl;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.LoadControl;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.util.Util;

import io.streamroot.ctl.delivery.client.mesh.exoplayermesh.databinding.ActivityPlayerBinding;
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;
import io.streamroot.lumen.delivery.client.core.LumenOptionalMeshBuilder;
import io.streamroot.lumen.delivery.client.core.LumenOptionalOrchestratorBuilder;
import io.streamroot.lumen.delivery.client.utils.LumenStatsView;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;

public class PlayerActivity extends AppCompatActivity {
    private @NonNull ActivityPlayerBinding bindings;
    private @Nullable ExoPlayer player = null;
    private @Nullable MediaItem mediaItem = null;
    private @Nullable LumenDeliveryClient lumenDeliveryClient = null;

    private final String manifestUrl = "http://wowza-test-cloudfront.streamroot.io/liveOrigin/Sintel1/playlist.m3u8";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bindings = ActivityPlayerBinding.inflate(getLayoutInflater());
        setContentView(bindings.getRoot());
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (Util.SDK_INT > 23) {
            initializePlayer();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (Util.SDK_INT <= 23 || player == null) {
            initializePlayer();
        }
    }

    @Override
    protected void onPause() {
        if (Util.SDK_INT <= 23) {
            releasePlayer();
        }
        super.onPause();
    }

    @Override
    protected void onStop() {
        if (Util.SDK_INT > 23) {
            releasePlayer();
        }
        super.onStop();
    }

    private void initializePlayer() {
        if (player == null) {
            final LoadControl loadControl = new DefaultLoadControl.Builder()
                    .setBufferDurationsMs(10_000,
                            DefaultLoadControl.DEFAULT_MAX_BUFFER_MS,
                            DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_MS,
                            DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS
                    )
                    .build();

            final ExoPlayer.Builder exoPlayerBuilder = new ExoPlayer.Builder(this);
            final PlayerInteractor.ExoPlayerBandwidthMeter bandwidthMeter = new PlayerInteractor.ExoPlayerBandwidthMeter(this, exoPlayerBuilder);

            final ExoPlayer exoPlayer = exoPlayerBuilder
                    .setLoadControl(loadControl)
                    .setBandwidthMeter(bandwidthMeter)
                    .build();

            exoPlayer.setPlayWhenReady(true);

            // Below, we initialize and start Lumen delivery client
            final LumenDeliveryClient dc = createDeliveryClient(exoPlayer, loadControl, bandwidthMeter);
            dc.start();
            showStatsView(dc);

            // We fetch the final URL from the delivery client
            final Uri deliveryManifest = Uri.parse(dc.localUrl());

            mediaItem = MediaItem.fromUri(deliveryManifest);
            player = exoPlayer;
            bindings.playerView.setPlayer(exoPlayer);
            lumenDeliveryClient = dc;
        }
    }

    private LumenDeliveryClient createDeliveryClient(ExoPlayer player, DefaultLoadControl loadControl, PlayerInteractor.ExoPlayerBandwidthMeter bandwidthMeter) {
        final PlayerInteractor playerInteractor = new PlayerInteractor(player, loadControl, bandwidthMeter);

        return LumenDeliveryClient
                .meshBuilder(this)
                .playerInteractor(playerInteractor)
                .options(o -> {
                    o.logLevel(LumenLogLevel.TRACE);
                    return null;
                }).build(manifestUrl);
    }

    private void showStatsView(LumenDeliveryClient dc) {
        ViewGroup svc = bindings.statsviewContainer;
        svc.removeAllViews();
        final LumenStatsView statsView = new LumenStatsView(this);
        dc.addStateStatsListener(statsView);
        statsView.showStats();
        svc.addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
    }

    private void releasePlayer() {
        if (player == null) return;

        stopDeliveryClient();

        player.release();
        player = null;
        mediaItem = null;
    }

    private void stopDeliveryClient() {
        if (lumenDeliveryClient == null) return;
        lumenDeliveryClient.stop();
        lumenDeliveryClient = null;
    }
}
