package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import android.app.Activity;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.Constant;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerAdapter;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerAdapterLive;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerPolicyImpl;

import com.yospace.android.hls.analytic.AnalyticEventListener;
import com.yospace.android.hls.analytic.Session;
import com.yospace.android.hls.analytic.SessionFactory;
import com.yospace.android.hls.analytic.SessionLive;
import com.yospace.android.hls.analytic.SessionLivePause;
import com.yospace.android.hls.analytic.SessionNonLinear;
import com.yospace.android.hls.analytic.SessionNonLinearStartOver;
import com.yospace.util.YoLog;
import com.yospace.util.event.Event;
import com.yospace.util.event.EventListener;

import static com.yospace.android.hls.analytic.Constant.NO_LIVEPAUSE;

public class YospaceModule {

    public interface YospaceModuleCallback {
        void onSessionAvailable(Session session);
        void onFinalUrlReady(PlayerAdapter adapter, String finalYospaceUrl);
    }

    public static class YospaceBridgeStruct {
        public @Nullable Session mSession = null;
        public @Nullable String mFinalYospaceUrl = null;
        public @Nullable PlayerAdapter mAdapter = null;
    }

    public static void createAdapterAndSession(@NonNull final Activity a,
                                               @NonNull final AnalyticEventListener analyticsObserver,
                                               @NonNull final Session.PlaybackMode mode,
                                               @NonNull final YospaceModuleCallback cb)
    {
        switch (mode) {
            case LIVE:
                PlayerAdapterLive adapterLive = new PlayerAdapterLive(a, null);
                createLive(a, analyticsObserver, Constant.VIDEO_URL_LIVE, adapterLive, cb);
                break;
            case LIVEPAUSE:
                adapterLive = new PlayerAdapterLive(a, null);
                createLivePause(a, analyticsObserver, Constant.VIDEO_URL_LIVE_PAUSE, adapterLive, cb);
                break;
            case NONLINEAR:
                PlayerAdapter adapter = new PlayerAdapter(a, null);
                createNonLinear(a, analyticsObserver, Constant.VIDEO_URL_VOD, adapter, cb);
                break;
            case NONLINEARSTARTOVER:
                adapter = new PlayerAdapter(a, null);
                createNonLinearStartOver(a, analyticsObserver, Constant.VIDEO_URL_NLSO, adapter, cb);
                break;
        }
    }

    // Session url can be returned
    private static void createLive(final Activity a,
                                   final AnalyticEventListener analyticsObserver,
                                   final String url,
                                   final PlayerAdapterLive adapter,
                                   @NonNull final YospaceModuleCallback cb) {
        Log.i(Constant.getLogTag(), "PlayerLive.initialiseYospace - Initialise Yospace analytics");

        Session.SessionProperties properties = new Session.SessionProperties(url).userAgent(Constant.USER_AGENT);

        properties.addDebugFlags(YoLog.DEBUG_ALL);

        final SessionFactory sf = SessionFactory.create(new EventListener<Session>() {

            /**
             * Callback made by SessionLive once it has initialised a session on the Yospace CSM
             */
            @Override
            public void handle(Event<Session> event) {

                // Retrieve the initialised session
                final SessionLive mSession = (SessionLive) event.getPayload();

                switch (mSession.getState()) {

                    case INITIALISED:
                        Log.i(Constant.getLogTag(), "PlayerLive.initialiseYospace - Yospace analytics session initialised");

                        adapter.setSession(mSession);

                        // Instantiate a LogAnalyticEventListener to make Analytic events visible in the log
                        mSession.addAnalyticListener(analyticsObserver);
                        mSession.setPlayerPolicy(new PlayerPolicyImpl());

                        a.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                cb.onSessionAvailable(mSession);
                            }
                        });

                        break;

                    case NO_ANALYTICS:
                        Log.i(Constant.getLogTag(),
                                "PlayerLive.initialiseYospace - No analytics session created, result code: "
                                        + mSession.getResultCode());
                        break;

                    case NOT_INITIALISED:
                        Log.e(Constant.getLogTag(), "PlayerLive.initialiseYospace - Failed to initialise analytics session, result code: "
                                + mSession.getResultCode());
                        break;

                    default:
                        break;
                }
            }
        }, properties, Session.PlaybackMode.LIVE);

        a.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                cb.onFinalUrlReady(adapter, sf.getPlayerUrl());
            }
        });
    }

    // Session url can be returned
    private static void createLivePause(final Activity a,
                                        final AnalyticEventListener analyticsObserver,
                                        final String url,
                                        final PlayerAdapterLive adapter,
                                        @NonNull final YospaceModuleCallback cb) {
        Log.i(Constant.getLogTag(), "PlayerLivePause.initialiseYospace - Initialise Yospace analytics");

        Session.SessionProperties properties = new Session.SessionProperties(url).userAgent(Constant.USER_AGENT);

        properties.addDebugFlags(YoLog.DEBUG_PARSING | YoLog.DEBUG_POLLING | YoLog.DEBUG_HEARTBEAT_STATE);

        final SessionFactory sf = SessionFactory.create(new EventListener<Session>() {

            /**
             * Callback made by SessionLivePause once it has initialised a session on the Yospace VoD-e service
             */
            @Override
            public void handle(Event<Session> event) {

                // Retrieve the session
                final Session session = event.getPayload();

                switch (session.getState()) {

                    case INITIALISED:
                        if (session.getResultCode() == NO_LIVEPAUSE)
                        {
                            Log.i(Constant.getLogTag(),
                                    "PlayerLivePause.initialiseYospace - Video URL is not configured as a LivePause stream");

                            // In this case playback reverts to DAI Live and the session object is of type SessionLive.
                            // A customer application would handle this case in the same manner as shown in the
                            // PlayerLive.java sample file.
                            // Note that since the stream is Live, a timeline is unavailable in this case.

                            a.runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    cb.onSessionAvailable(session);
                                }
                            });
                        }
                        else
                        {
                            Log.i(Constant.getLogTag(), "PlayerLivePause.initialiseYospace - Yospace analytics session initialised");

                            final SessionLivePause mSession = (SessionLivePause) event.getPayload();
                            adapter.setSession(mSession);

                            // Instantiate a UIAnalyticListener to make Analytic events visible in the log and to update the UI
                            mSession.addAnalyticListener(analyticsObserver);
                            mSession.setPlayerPolicy(new PlayerPolicyImpl());

                            a.runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    cb.onSessionAvailable(mSession);
                                }
                            });
                        }
                        break;

                    case NO_ANALYTICS:
                        Log.i(Constant.getLogTag(),
                                "PlayerLivePause.initialiseYospace - Video URL does not refer to a Yospace stream, no analytics session created");
                        break;

                    case NOT_INITIALISED:
                        Log.e(Constant.getLogTag(), "PlayerLivePause.initialiseYospace - Failed to initialise analytics session");
                        break;

                    default:
                        break;
                }

            }

        }, properties, Session.PlaybackMode.LIVEPAUSE);

        a.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                cb.onFinalUrlReady(adapter, sf.getPlayerUrl());
            }
        });
    }

    private static void createNonLinear(final Activity a,
                                        final AnalyticEventListener analyticsObserver,
                                        final String url,
                                        final PlayerAdapter adapter,
                                        @NonNull final YospaceModuleCallback cb) {
        Log.i(Constant.getLogTag(), "PlayerNonLinear.initialiseYospace - Initialise Yospace analytics");

        Session.SessionProperties properties = new Session.SessionProperties(url).userAgent(Constant.USER_AGENT);

        properties.addDebugFlags(YoLog.DEBUG_PARSING | YoLog.DEBUG_POLLING | YoLog.DEBUG_HEARTBEAT_STATE);

        SessionNonLinear.create(new EventListener<Session>() {

            /**
             * Callback made by SessionNonLinear once it has initialised a session on the Yospace VoD-e service
             */
            @Override
            public void handle(Event<Session> event) {

                // Retrieve the initialised session
                final SessionNonLinear mSession = (SessionNonLinear) event.getPayload();

                switch (mSession.getState()) {

                    case INITIALISED:
                        Log.i(Constant.getLogTag(), "PlayerNonLinear.initialiseYospace - Yospace analytics session initialised");

                        adapter.setSession(mSession);

                        // Instantiate a LogAnalyticEventListener to make Analytic events visible in the log
                        mSession.addAnalyticListener(analyticsObserver);
                        mSession.setPlayerPolicy(new PlayerPolicyImpl());

                        a.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                cb.onSessionAvailable(mSession);
                                cb.onFinalUrlReady(adapter, mSession.getPlayerUrl());
                            }
                        });
                        break;

                    case NO_ANALYTICS:
                        Log.i(Constant.getLogTag(),
                                "PlayerNonLinear.initialiseYospace - Video URL does not refer to a Yospace stream, no analytics session created");
                        break;

                    case NOT_INITIALISED:
                        Log.e(Constant.getLogTag(), "PlayerNonLinear.initialiseYospace - Failed to initialise analytics session");
                        break;

                    default:
                        break;
                }

            }

        }, properties);
    }

    private static void createNonLinearStartOver(final Activity a,
                                                 final AnalyticEventListener analyticsObserver,
                                                 final String url,
                                                 final PlayerAdapter adapter,
                                                 @NonNull final YospaceModuleCallback cb) {
        Log.i(Constant.getLogTag(), "PlayerNonLinearStartOver.initialiseYospace - Initialise Yospace analytics");

        Session.SessionProperties properties = new Session.SessionProperties(url).userAgent(Constant.USER_AGENT);

        properties.addDebugFlags(YoLog.DEBUG_PARSING | YoLog.DEBUG_POLLING | YoLog.DEBUG_HEARTBEAT_STATE);

        SessionNonLinearStartOver.create(new EventListener<Session>() {

            /**
             * Callback made by SessionNonLinear once it has initialised a session on the Yospace VoD-e service
             */
            @Override
            public void handle(Event<Session> event) {

                // Retrieve the initialised session
                final SessionNonLinearStartOver mSession = (SessionNonLinearStartOver) event.getPayload();

                switch (mSession.getState()) {

                    case INITIALISED:
                        Log.i(Constant.getLogTag(), "PlayerNonLinearStartOver.initYo - Yospace analytics session initialised");

                        adapter.setSession(mSession);

                        // Instantiate a LogAnalyticEventListener to make Analytic events visible in the log
                        mSession.addAnalyticListener(analyticsObserver);
                        mSession.setPlayerPolicy(new PlayerPolicyImpl());

                        a.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                cb.onSessionAvailable(mSession);
                                cb.onFinalUrlReady(adapter, mSession.getPlayerUrl());
                            }
                        });

                        break;

                    case NO_ANALYTICS:
                        Log.i(Constant.getLogTag(),
                                "PlayerNonLinearStartOver.initYo - Video URL does not refer to a Yospace stream, no analytics session created");
                        break;

                    case NOT_INITIALISED:
                        Log.e(Constant.getLogTag(), "PlayerNonLinearStartOver.initYo - Failed to initialise analytics session");
                        break;

                    default:
                        break;
                }

            }

        }, properties);
    }
}
