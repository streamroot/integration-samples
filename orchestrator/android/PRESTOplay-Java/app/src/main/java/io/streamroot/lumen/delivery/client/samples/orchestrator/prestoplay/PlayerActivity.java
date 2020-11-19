package io.streamroot.lumen.delivery.client.samples.orchestrator.prestoplay;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import com.castlabs.android.player.PlayerConfig;
import com.castlabs.android.player.PlayerController;
import com.castlabs.android.player.PlayerView;

import org.jetbrains.annotations.Nullable;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;
import io.streamroot.lumen.delivery.client.core.LumenOptionalOrchestratorBuilder;
import io.streamroot.lumen.delivery.client.utils.LumenStatsView;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;

public class PlayerActivity extends AppCompatActivity {

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
}
