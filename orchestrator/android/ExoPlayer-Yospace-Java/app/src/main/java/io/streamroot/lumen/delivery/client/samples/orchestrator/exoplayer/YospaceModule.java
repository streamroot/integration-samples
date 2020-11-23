package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import android.app.Activity;
import android.util.Log;

import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.Constant;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerAdapter;
import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.PlayerAdapterLive;

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

    public static class YospaceBridgePair {
        public YospaceBridgePair(Session session, PlayerAdapter adapter) { this.session = session; this.adapter = adapter; }
        public Session session;
        public PlayerAdapter adapter;
    }

    public static void createAdapterAndSession(final Activity a, final Session.PlaybackMode mode, final Callback1<YospaceBridgePair> cb) {
        switch (mode) {
            case LIVE:
                PlayerAdapterLive adapterLive = new PlayerAdapterLive(a, null);
                createLive(Constant.VIDEO_URL_LIVE, adapterLive, cb);
                break;
            case LIVEPAUSE:
                adapterLive = new PlayerAdapterLive(a, null);
                createLivePause(Constant.VIDEO_URL_LIVE_PAUSE, adapterLive, cb);
                break;
            case NONLINEAR:
                PlayerAdapter adapter = new PlayerAdapter(a, null);
                createNonLinear(Constant.VIDEO_URL_VOD, adapter, cb);
                break;
            case NONLINEARSTARTOVER:
                adapter = new PlayerAdapter(a, null);
                createNonLinearStartOver(Constant.VIDEO_URL_NLSO, adapter, cb);
                break;
        }
    }

    // Session url can be returned
    private static void createLive(final String url, final PlayerAdapterLive adapter, final Callback1<YospaceBridgePair> cb) {
        Log.i(Constant.getLogTag(), "PlayerLive.initialiseYospace - Initialise Yospace analytics");

        Session.SessionProperties properties = new Session.SessionProperties(url).userAgent(Constant.USER_AGENT);

        properties.addDebugFlags(YoLog.DEBUG_ALL);

        SessionFactory.create(new EventListener<Session>() {

            /**
             * Callback made by SessionLive once it has initialised a session on the Yospace CSM
             */
            @Override
            public void handle(Event<Session> event) {

                // Retrieve the initialised session
                mSession = (SessionLive) event.getPayload();

                switch (mSession.getState()) {

                    case INITIALISED:
                        Log.i(Constant.getLogTag(), "PlayerLive.initialiseYospace - Yospace analytics session initialised");

                        adapter.setSession(mSession);

                        // Instantiate a LogAnalyticEventListener to make Analytic events visible in the log
                        mSession.addAnalyticListener(PlayerLive.this);
                        mSession.setPlayerPolicy(new PlayerPolicyImpl());

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
    }

    // Session url can be returned
    private static void createLivePause(final String url, final PlayerAdapterLive adapter, final Callback1<YospaceBridgePair> cb) {
        Log.i(Constant.getLogTag(), "PlayerLivePause.initialiseYospace - Initialise Yospace analytics");

        Session.SessionProperties properties = new Session.SessionProperties(url).userAgent(Constant.USER_AGENT);

        properties.addDebugFlags(YoLog.DEBUG_PARSING | YoLog.DEBUG_POLLING | YoLog.DEBUG_HEARTBEAT_STATE);

        return SessionFactory.create(new EventListener<Session>() {

            /**
             * Callback made by SessionLivePause once it has initialised a session on the Yospace VoD-e service
             */
            @Override
            public void handle(Event<Session> event) {

                // Retrieve the session
                Session session = event.getPayload();

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
                        }
                        else
                        {
                            Log.i(Constant.getLogTag(), "PlayerLivePause.initialiseYospace - Yospace analytics session initialised");

                            mSession = (SessionLivePause) event.getPayload();
                            adapter.setSession(mSession);

                            // Instantiate a UIAnalyticListener to make Analytic events visible in the log and to update the UI
                            mSession.addAnalyticListener(PlayerLivePause.this);
                            mSession.setPlayerPolicy(new PlayerPolicyImpl());

                            runOnUiThread(new Runnable()
                            {
                                @Override
                                public void run()
                                {
                                    // update the timeline
                                    mTimeline.UpdateTimeline(mSession.getAdBreaks(), mSession.getWindowStart(), mSession.getWindowEnd());
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
    }

    private static void createNonLinear(final String url, final PlayerAdapter adapter, final Callback1<YospaceBridgePair> cb) {
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
                mSession = (SessionNonLinear) event.getPayload();

                switch (mSession.getState()) {

                    case INITIALISED:
                        Log.i(Constant.getLogTag(), "PlayerNonLinear.initialiseYospace - Yospace analytics session initialised");

                        adapter.setSession(mSession);

                        // Instantiate a LogAnalyticEventListener to make Analytic events visible in the log
                        mSession.addAnalyticListener(PlayerNonLinear.this);
                        mSession.setPlayerPolicy(new PlayerPolicyImpl());

                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                // Initialise ExoPlayer infrastructure
                                initialisePlayer(mSession.getPlayerUrl(), adapter);

                                // update the timeline
                                mTimeline.UpdateTimeline(mSession.getAdBreaks(), 0, mSession.getDuration());
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

    private static void createNonLinearStartOver(final String url, final PlayerAdapter adapter, final Callback1<YospaceBridgePair> cb) {
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
                mSession = (SessionNonLinearStartOver) event.getPayload();

                switch (mSession.getState()) {

                    case INITIALISED:
                        Log.i(Constant.getLogTag(), "PlayerNonLinearStartOver.initYo - Yospace analytics session initialised");

                        adapter.setSession(mSession);

                        // Instantiate a LogAnalyticEventListener to make Analytic events visible in the log
                        mSession.addAnalyticListener(PlayerNonLinearStartOver.this);
                        mSession.setPlayerPolicy(new PlayerPolicyImpl());

                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                // Initialise ExoPlayer infrastructure
                                initialisePlayer(mSession.getPlayerUrl(), adapter);

                                // update the timeline
                                mTimeline.UpdateTimeline(mSession.getAdBreaks(), 0, mSession.getDuration());

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
