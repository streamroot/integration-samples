package io.streamroot.lumen.delivery.client.samples.orchestrator.prestoplay;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.Surface;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.castlabs.android.player.DisplayInfo;
import com.castlabs.android.player.PlayerConfig;
import com.castlabs.android.player.PlayerController;
import com.castlabs.android.player.PlayerControllerListener;
import com.castlabs.android.player.PlayerListener;
import com.castlabs.android.player.PlayerView;
import com.castlabs.android.player.VideoRendererListener;
import com.castlabs.android.player.exceptions.CastlabsPlayerException;
import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.mediacodec.MediaCodecInfo;
import com.google.android.exoplayer2.mediacodec.MediaCodecRenderer;
import com.google.android.exoplayer2.mediacodec.MediaCodecUtil;

import org.jetbrains.annotations.Nullable;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;
import io.streamroot.lumen.delivery.client.core.LumenOptionalOrchestratorBuilder;
import io.streamroot.lumen.delivery.client.utils.LumenStatsView;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;

public class PlayerActivity extends AppCompatActivity implements Player.EventListener {

    public static final class PlayerActivityArgs {
        @Nullable final String dcKey;
        @Nullable final String url;
        @Nullable final String orchProperty;
        public PlayerActivityArgs(@Nullable String dcKey, @Nullable String url, @Nullable String orchProperty) {
            this.dcKey = dcKey;
            this.url = url;
            this.orchProperty = orchProperty;
        }
    }

    private static final String ARG_DC_KEY = "dcKey";
    private static final String ARG_STREAM_URL = "streamUrl";
    private static final String ARG_ORCH_PROP = "orchestratorProperty";

    public static Intent makeIntent(Context ctx, PlayerActivityArgs args) {
        return new Intent(ctx, PlayerActivity.class)
            .putExtra(ARG_DC_KEY, args.dcKey)
            .putExtra(ARG_STREAM_URL, args.url)
            .putExtra(ARG_ORCH_PROP, args.orchProperty);
    }

    public static PlayerActivityArgs extractArgs(Intent i) {
        return new PlayerActivityArgs(
                i.getStringExtra(ARG_DC_KEY),
                i.getStringExtra(ARG_STREAM_URL),
                i.getStringExtra(ARG_ORCH_PROP));
    }

    @Nullable private PlayerView playerView = null;
    @Nullable private LumenStatsView dcStatsView = null;

    @Nullable private String mDCKey = null;
    @Nullable private String mStreamUrl = null;
    @Nullable private String mOrchProperty = null;

    @Nullable private LumenDeliveryClient deliveryClient = null;

    @Override
    protected void onCreate(@androidx.annotation.Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_player);

        final PlayerActivityArgs args = extractArgs(getIntent());
        mStreamUrl = args.url;
        {
            final String tmpOP = args.orchProperty;
            mOrchProperty = (tmpOP != null && !tmpOP.trim().isEmpty()) ? tmpOP : null;
        }
        {
            final String tmp = args.dcKey;
            mDCKey = (tmp != null && !tmp.trim().isEmpty()) ? tmp : null;
        }

        playerView = findViewById(R.id.player_view);
        dcStatsView = findViewById(R.id.dcStatsView);
    }

    @Override
    protected void onStart() {
        super.onStart();

        playerView.getLifecycleDelegate().start(this);
        initPlayer();
    }

    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();

        playerView.getLifecycleDelegate().resume();
    }

    @Override
    protected void onStop() {
        playerView.getLifecycleDelegate().releasePlayer(false);
        stopDeliveryClient();

        super.onStop();
    }

    private void initPlayer() {
        final PlayerController controller = playerView.getPlayerController();
        final PRESTOQosModule qosModule = new PRESTOQosModule(controller);
        final LumenDeliveryClient dc = initDeliveryClient(qosModule);
        deliveryClient = dc;
        dc.addStateStatsListener(dcStatsView);
        dcStatsView.showStats();
        dc.start();

        final Uri uri = Uri.parse(dc.localUrl());
        controller.open(new PlayerConfig.Builder(uri.toString()).get());
    }

    private LumenDeliveryClient initDeliveryClient(PRESTOQosModule qosModule) {
        return LumenDeliveryClient.orchestratorBuilder(getApplicationContext())
                .qosInterface(qosModule)
                .options(new Function1<LumenOptionalOrchestratorBuilder, Unit>() {
                    @Override
                    public Unit invoke(LumenOptionalOrchestratorBuilder o) {
                        o.logLevel(LumenLogLevel.TRACE);
                        if (mDCKey != null) o.deliveryClientKey(mDCKey);
                        if (mOrchProperty != null) o.orchestratorProperty(mOrchProperty);

                        return null;
                    }
                }).build(mStreamUrl);
    }

    private void stopDeliveryClient() {
        if (deliveryClient != null) {
            deliveryClient.terminate();
            deliveryClient = null;
        }
    }

    /**
     * Utils
     */

    private void showToast(String message) {
        Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
    }

    /**
     * Player EventListener
     */

    @Override
    public void onPlayerError(ExoPlaybackException error) {
        @Nullable String errorString = null;
        if (error.type == ExoPlaybackException.TYPE_RENDERER) {
            final Exception cause = error.getRendererException();
            if (cause instanceof MediaCodecRenderer.DecoderInitializationException) {
                final MediaCodecRenderer.DecoderInitializationException castedCause =
                        (MediaCodecRenderer.DecoderInitializationException) cause;
                // Special case for decoder initialization failures.
                final MediaCodecInfo codecInfo = castedCause.codecInfo;

                if (codecInfo != null) {
                    errorString = getString(
                            R.string.error_instantiating_decoder,
                            codecInfo.name
                    );
                } else if (castedCause.getCause() instanceof MediaCodecUtil.DecoderQueryException) {
                    errorString = getString(R.string.error_querying_decoders);
                } else if (castedCause.secureDecoderRequired) {
                    errorString = getString(
                            R.string.error_no_secure_decoder,
                            castedCause.mimeType);
                } else {
                    errorString = getString(R.string.error_no_decoder, castedCause.mimeType);
                }
            }
        }

        if (errorString != null) {
            showToast(errorString);
        }
    }
}
