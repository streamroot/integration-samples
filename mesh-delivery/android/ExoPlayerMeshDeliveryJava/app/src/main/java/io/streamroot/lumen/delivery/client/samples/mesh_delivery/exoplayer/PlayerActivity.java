package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.exoplayer2.DefaultLoadControl;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.util.Util;

import io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer.databinding.ActivityPlayerBinding;
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;
import io.streamroot.lumen.delivery.client.utils.LumenStatsView;

public class PlayerActivity extends AppCompatActivity {
    public static final class PlayerActivityArgs {
        @Nullable
        final String deliveryClientKey;
        @Nullable
        final String streamUrl;
        @Nullable
        final String meshProperty;

        public PlayerActivityArgs(@Nullable String deliveryClientKey, @Nullable String streamUrl, @Nullable String meshProperty) {
            this.deliveryClientKey = deliveryClientKey;
            this.streamUrl = streamUrl;
            this.meshProperty = meshProperty;
        }
    }

    private static final String ARG_DC_KEY = "deliveryClientKey";
    private static final String ARG_STREAM_URL = "streamUrl";
    private static final String ARG_MESH_PROP = "meshProperty";

    public static Intent makeIntent(Context ctx, PlayerActivityArgs args) {
        return new Intent(ctx, PlayerActivity.class)
                .putExtra(ARG_DC_KEY, args.deliveryClientKey)
                .putExtra(ARG_STREAM_URL, args.streamUrl)
                .putExtra(ARG_MESH_PROP, args.meshProperty);
    }

    public static PlayerActivityArgs extractArgs(Intent i) {
        return new PlayerActivityArgs(
                i.getStringExtra(ARG_DC_KEY),
                i.getStringExtra(ARG_STREAM_URL),
                i.getStringExtra(ARG_MESH_PROP));
    }

    private @Nullable
    String deliveryClientKey = null;
    private @Nullable
    String streamUrl;
    private @Nullable
    String meshProperty = null;

    private @NonNull
    ActivityPlayerBinding bindings;
    private @Nullable
    ExoPlayer player = null;
    private @Nullable
    MediaItem mediaItem = null;
    private @Nullable
    LumenDeliveryClient lumenDeliveryClient = null;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        bindings = ActivityPlayerBinding.inflate(getLayoutInflater());
        setContentView(bindings.getRoot());

        final PlayerActivityArgs args = extractArgs(getIntent());
        streamUrl = args.streamUrl;
        {
            final String tmpOP = args.meshProperty;
            meshProperty = (tmpOP != null && !tmpOP.trim().isEmpty()) ? tmpOP : null;
        }
        {
            final String tmp = args.deliveryClientKey;
            deliveryClientKey = (tmp != null && !tmp.trim().isEmpty()) ? tmp : null;
        }
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
            final DefaultLoadControl loadControl = new DefaultLoadControl.Builder()
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

            player.addMediaItem(mediaItem);
            player.setRepeatMode(Player.REPEAT_MODE_ALL);
            player.prepare();
        }
    }

    private LumenDeliveryClient createDeliveryClient(ExoPlayer player, DefaultLoadControl loadControl, PlayerInteractor.ExoPlayerBandwidthMeter bandwidthMeter) {
        final PlayerInteractor playerInteractor = new PlayerInteractor(player, loadControl, bandwidthMeter);

        return LumenDeliveryClient
                .meshBuilder(this)
                .playerInteractor(playerInteractor)
                .options(o -> {
                    o.logLevel(LumenLogLevel.INFO);
                    if (deliveryClientKey != null) o.deliveryClientKey(deliveryClientKey);
                    if (meshProperty != null) o.meshProperty(meshProperty);

                    return null;
                }).build(streamUrl);
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
