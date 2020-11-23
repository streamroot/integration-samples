package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.exoplayer2.C;
import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.mediacodec.MediaCodecInfo;
import com.google.android.exoplayer2.mediacodec.MediaCodecRenderer;
import com.google.android.exoplayer2.mediacodec.MediaCodecUtil;
import com.google.android.exoplayer2.source.LoopingMediaSource;
import com.google.android.exoplayer2.source.MediaSource;
import com.google.android.exoplayer2.source.dash.DashMediaSource;
import com.google.android.exoplayer2.source.dash.DefaultDashChunkSource;
import com.google.android.exoplayer2.source.hls.HlsMediaSource;
import com.google.android.exoplayer2.ui.PlayerView;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSourceFactory;
import com.google.android.exoplayer2.util.Util;
import com.yospace.android.hls.analytic.AnalyticEventListener;
import com.yospace.android.hls.analytic.Session;
import com.yospace.android.hls.analytic.advert.AdBreak;
import com.yospace.android.hls.analytic.advert.Advert;
import com.yospace.android.xml.VastPayload;
import com.yospace.android.xml.VmapPayload;

import org.jetbrains.annotations.Nullable;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;
import io.streamroot.lumen.delivery.client.core.LumenOptionalOrchestratorBuilder;
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerAdapter;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerAdapterLive;
import io.streamroot.lumen.delivery.client.utils.LumenStatsView;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;

public class PlayerActivity extends AppCompatActivity implements Player.EventListener, AnalyticEventListener {

    private static final Session.PlaybackMode YOSPACE_MODE = Session.PlaybackMode.LIVE;

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

    @Nullable private PlayerView exoPlayerView = null;
    @Nullable private LumenStatsView dcStatsView = null;

    @Nullable private String mDCKey = null;
    // @Nullable private String mStreamUrl = null;
    @Nullable private String mOrchProperty = null;

    @Nullable private ExoPlayer player = null;

    @Nullable private LumenDeliveryClient deliveryClient = null;

    @NonNull private YospaceModule.YospaceBridgeStruct yoBridge = new YospaceModule.YospaceBridgeStruct();
    @Nullable private Handler mMainHandler = null;

    @Override
    protected void onCreate(@androidx.annotation.Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_player);

        mMainHandler = new Handler(); // created with main looper
        final PlayerActivityArgs args = extractArgs(getIntent());
        // mStreamUrl = args.url;
        {
            final String tmpOP = args.orchProperty;
            mOrchProperty = (tmpOP != null && !tmpOP.trim().isEmpty()) ? tmpOP : null;
        }
        {
            final String tmp = args.dcKey;
            mDCKey = (tmp != null && !tmp.trim().isEmpty()) ? tmp : null;
        }

        exoPlayerView = findViewById(R.id.exoplayerView);
        dcStatsView = findViewById(R.id.dcStatsView);
    }

    @Override
    protected void onStart() {
        super.onStart();

        if (Util.SDK_INT > 23) {
            initPlayer();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (Util.SDK_INT <= 23) {
            releasePlayer();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (Util.SDK_INT <= 23 || player == null) {
            initPlayer();
        }
    }

    @Override
    protected void onStop() {
        if (Util.SDK_INT > 23) {
            releasePlayer();
        }

        super.onStop();
    }

    private void initPlayer() {
        if (player == null) {
            YospaceModule.createAdapterAndSession(this, this, YOSPACE_MODE, new YospaceModule.YospaceModuleCallback() {
                @Override
                public void onSessionAvailable(Session session) {
                    yoBridge.mSession = session;
                }

                @Override
                public void onFinalUrlReady(PlayerAdapter adapter, String finalYospaceUrl) {
                    yoBridge.mAdapter = adapter;
                    yoBridge.mFinalYospaceUrl = finalYospaceUrl;

                    // Build the player
                    final SimpleExoPlayer newPlayer = new SimpleExoPlayer.Builder(getApplicationContext()).build();

                    newPlayer.setPlayWhenReady(true);

                    newPlayer.addListener(PlayerActivity.this);
                    newPlayer.addListener(adapter);
                    adapter.setVideoPlayer(newPlayer);

                    if (adapter instanceof PlayerAdapterLive) {
                        newPlayer.addMetadataOutput((PlayerAdapterLive) adapter);
                    }

                    // Include streamroot in the middle
                    final ExoPlayerInteractor interactor = new ExoPlayerInteractor(newPlayer);

                    final LumenDeliveryClient dc = initDeliveryClient(interactor, finalYospaceUrl);
                    deliveryClient = dc;
                    dc.addStateStatsListener(dcStatsView);
                    dcStatsView.showStats();
                    dc.start();

                    final Uri uri = Uri.parse(dc.localUrl());
                    final MediaSource ms = buildMediaSource(uri);
                    ms.addEventListener(mMainHandler, adapter);

                    newPlayer.prepare(new LoopingMediaSource(ms), true, false);

                    player = newPlayer;
                    exoPlayerView.setPlayer(newPlayer);
                }
            });
        }
    }

    private void releasePlayer() {
        if (player != null) {
            player.release();
            player = null;
        }
        stopDeliveryClient();
    }

    @SuppressLint("SwitchIntDef")
    private MediaSource buildMediaSource(Uri uri) {
        final DefaultHttpDataSourceFactory defaultDataSourceFactory = new DefaultHttpDataSourceFactory(
                Util.getUserAgent(getApplicationContext(), "StreamrootQA"),
                DefaultHttpDataSource.DEFAULT_CONNECT_TIMEOUT_MILLIS,
                DefaultHttpDataSource.DEFAULT_READ_TIMEOUT_MILLIS,
                true
        );

        switch (Util.inferContentType(uri)) {
            case C.TYPE_HLS:
                return new HlsMediaSource.Factory(defaultDataSourceFactory)
                        //.setDrmSessionManager()
                        .createMediaSource(uri);
            case C.TYPE_DASH:
                return new DashMediaSource.Factory(
                        new DefaultDashChunkSource.Factory(
                                defaultDataSourceFactory
                        ), defaultDataSourceFactory
                )
                        //.setDrmSessionManager()
                        .createMediaSource(uri);
            default:
                throw new IllegalStateException("Unsupported type for url: $uri");
        }
    }

    private LumenDeliveryClient initDeliveryClient(
            final LumenPlayerInteractorBase playerInteractor,
            final String playerUrl
    ) {
        return LumenDeliveryClient.orchestratorBuilder(getApplicationContext())
                .playerInteractor(playerInteractor)
                .options(new Function1<LumenOptionalOrchestratorBuilder, Unit>() {
                    @Override
                    public Unit invoke(LumenOptionalOrchestratorBuilder o) {
                        o.logLevel(LumenLogLevel.TRACE);
                        if (mDCKey != null) o.deliveryClientKey(mDCKey);
                        if (mOrchProperty != null) o.orchestratorProperty(mOrchProperty);

                        return null;
                    }
                }).build(playerUrl);
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

    ///////////////////////////////////////
    // AnalyticEventListener implementation

    @Override
    public void onAdvertBreakEnd(AdBreak adBreak) {
        showToast("Adbreak end");
    }

    @Override
    public void onAdvertBreakStart(AdBreak adBreak) {
        showToast("Adbreak start");
    }

    @Override
    public void onAdvertEnd(final Advert advert)
    {
        showToast("Adbreak end");
    }

    @Override
    public void onAdvertStart(final Advert advert)
    {
        showToast(advert.getId() + ":0");
    }

    @Override
    public void onTimelineUpdateReceived(VmapPayload vmap) { /* do nothing */ }

    @Override
    public void onVastReceived(VastPayload vast) {
        showToast("VAST received");
    }

    @Override
    public void onTrackingUrlCalled(final Advert advert, final String type, String url)
    {
        String quartile = type.equals("firstQuartile") ? ":1" : null;
        quartile = type.equals("midpoint") ? ":2" : quartile;
        quartile = type.equals("thirdQuartile") ? ":3" : quartile;

        if (quartile != null) {
            showToast(advert.getId() + quartile);
        }
    }
}
