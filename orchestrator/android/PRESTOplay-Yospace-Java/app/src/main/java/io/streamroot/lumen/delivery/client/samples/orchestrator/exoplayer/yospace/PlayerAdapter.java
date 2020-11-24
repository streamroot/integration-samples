/*
 * COPYRIGHT 2019 YOSPACE TECHNOLOGIES LTD. ALL RIGHTS RESERVED.
 */
package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.yospace;

import android.app.Activity;
import android.util.Log;

import androidx.annotation.Nullable;

import com.castlabs.android.player.PlayerController;
import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.source.MediaSource;
import com.google.android.exoplayer2.source.TrackGroupArray;
import com.google.android.exoplayer2.trackselection.TrackSelectionArray;
import com.yospace.android.hls.analytic.Session;
import com.yospace.hls.player.PlaybackState;
import com.yospace.hls.player.PlayerState;
import com.yospace.util.YoLog;
import com.yospace.util.event.EventSourceImpl;

import java.io.IOException;
import java.lang.ref.WeakReference;
import java.util.Timer;
import java.util.TimerTask;

import io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.common.Constant;

public class PlayerAdapter implements Player.Listener, Player.TimeLineListener
{
    private WeakReference<PlayerController> mPlayerController = null;

    private Activity mActivity;

    private int mLastPlaybackState = Player.STATE_IDLE;

    private final EventSourceImpl<PlayerState> mPlayerStateSource = new EventSourceImpl<>();

    private Timer mPlayheadTimer;

    private long mInitialPlayerWindow;

    private long mCurrentPlayerWindow;

    /**
     * Return an instance of PlayerAdapter
     */
    public PlayerAdapter(Activity activity)
    {
        mActivity = activity;
    }

    private void addPlayheadObserver()
    {
        removePlayheadObserver();

        mPlayheadTimer = new Timer();
        mPlayheadTimer.schedule(new TimerTask() {

            @Override
            public void run()
            {
                final long position = getPlayerCurrentPosition();

                // update SDK
                mPlayerStateSource.notify(new PlayerState(PlaybackState.PLAYHEAD_UPDATE, (int) position, false));

            }
        }, 0, Constant.POLLING_FREQUENCY);
    }

    private void removePlayheadObserver()
    {
        if (mPlayheadTimer != null)
        {
            Log.i(Constant.getLogTag(), "PlayerAdapter.removePlayheadObserver - called");

            mPlayheadTimer.cancel();
            mPlayheadTimer = null;
        }
    }

    /**
     * @param player
     *        the new value of player
     */
    public void setVideoPlayer(PlayerController player)
    {
        mPlayerController = new WeakReference<>(player);
    }

    /**
     * Register a session with this PlayerAdapter
     */
    public void setSession(Session session)
    {
        // Register the session for PlayerState events from the Video Player
        session.setPlayerStateSource(mPlayerStateSource);
    }

    private long getPlayerCurrentPosition()
    {
        Timeline tl = mPlayerController.get().getTime.getCurrentTimeline();
        if (tl != null)
        {
            Timeline.Window win = new Timeline.Window();
            if (tl.getWindowCount() > 0)
            {
                tl.getWindow(0, win);
                if (mInitialPlayerWindow == 0)
                {
                    mInitialPlayerWindow = win.windowStartTimeMs;
                }
                mCurrentPlayerWindow = win.windowStartTimeMs;
            }
        }
        long position = mPlayer.getCurrentPosition() + (mCurrentPlayerWindow - mInitialPlayerWindow);
        Log.d(Constant.getLogTag(), "PLAYER POSN STATS - Playhead:" + mPlayer.getCurrentPosition() + ", current window:" + mCurrentPlayerWindow + ", initial window:" + mInitialPlayerWindow + " (" + position + ")");
        return position;
    }

    //////////////////////////////////////
    // Player.EventListener implementation

    @Override
    public void onLoadingChanged(boolean isLoading) {
        // do nothing
    }

    @Override
    public void onPlayerStateChanged(boolean playWhenReady, int playbackState)
    {

        YoLog.d(YoLog.DEBUG_LIFECYCLE, Constant.getLogTag(), "New Player State: " + playbackStateToString(playbackState) + (playWhenReady ? " (playWhenReady:TRUE)" : " (playWhenReady:FALSE)"));
        if (playbackState == Player.STATE_IDLE){
            return;
        }

        int playheadPosition = (int) getPlayerCurrentPosition();

        if (playbackState == Player.STATE_ENDED)
        {
            removePlayheadObserver();
            mPlayerStateSource.notify(new PlayerState(PlaybackState.STOPPED, playheadPosition, false));
        }
        // Pass on buffering transitions
        else if (playbackState == Player.STATE_BUFFERING && mLastPlaybackState != Player.STATE_BUFFERING)
        {
            mPlayerStateSource.notify(new PlayerState(PlaybackState.BUFFERING_START, playheadPosition, false));
        }
        else if (playbackState == Player.STATE_READY && mLastPlaybackState == Player.STATE_BUFFERING)
        {
            mPlayerStateSource.notify(new PlayerState(PlaybackState.BUFFERING_END, playheadPosition, false));
        }

        // Pass on Play / Pause events
        if (playbackState == Player.STATE_READY)
        {
            PlaybackState state = playWhenReady ? PlaybackState.PLAYING : PlaybackState.PAUSED;
            mPlayerStateSource.notify(new PlayerState(state, playheadPosition, false));
        }

        mLastPlaybackState = playbackState;
    }

    private String playbackStateToString(int playbackState)
    {
        if (playbackState == 1){
            return "IDLE";
        }
        else if (playbackState == 2){
            return "BUFFERING";
        }
        else if (playbackState == 3){
            return "READY";
        }
        else if (playbackState == 4){
            return "ENDED";
        }
        return "UNKNOWN";
    }

    @Override
    public void onPositionDiscontinuity(@Player.DiscontinuityReason int reason){
        // do nothing
    }

    @Override
    public void onRepeatModeChanged(int repeatMode) {
        // do nothing
    }

    @Override
    public void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
        // do nothing
    }

    @Override
    public void onSeekProcessed() {
        // do nothing
    }

    @Override
    public void onShuffleModeEnabledChanged(boolean shuffleModeEnabled){
        // do nothing
    }

    @Override
    public void onTimelineChanged(Timeline timeline, Object manifest, @Player.TimelineChangeReason int reason){
        // do nothing
    }

    @Override
    public void onPlayerError(ExoPlaybackException e) {
        // do nothing
    }

    @Override
    public void onTracksChanged(TrackGroupArray trackGroups, TrackSelectionArray trackSelections) {
        // do nothing
    }

    //////////////////////////////////////
    // AdaptiveMediaSourceEventListener implementation

    @Override
    public void onLoadStarted(int windowIndex, @Nullable MediaSource.MediaPeriodId mediaPeriodId,
                              LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData){
        // do nothing
    }

    @Override
    public void onLoadError(int windowIndex, @Nullable MediaSource.MediaPeriodId mediaPeriodId,
                            LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData,
                            IOException error, boolean wasCanceled) {
        // do nothing
    }

    @Override
    public void onLoadCanceled(int windowIndex, @Nullable MediaSource.MediaPeriodId mediaPeriodId,
                               LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData){
        // do nothing
    }

    @Override
    public void onLoadCompleted(int windowIndex, @Nullable MediaSource.MediaPeriodId mediaPeriodId,
                                LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData){
        // do nothing
    }

    @Override
    public void onUpstreamDiscarded(int windowIndex, MediaSource.MediaPeriodId mediaPeriodId, MediaLoadData mediaLoadData){
        // do nothing
    }

    @Override
    public void onDownstreamFormatChanged(int windowIndex, @Nullable MediaSource.MediaPeriodId mediaPeriodId, MediaLoadData mediaLoadData){
        // do nothing
    }

    @Override
    public void onReadingStarted(int windowIndex, MediaSource.MediaPeriodId mediaPeriodId){
        // do nothing
    }

    public void onMediaPeriodReleased(int windowIndex, MediaSource.MediaPeriodId mediaPeriodId){
        // do nothing
    }

    public void onMediaPeriodCreated(int windowIndex, MediaSource.MediaPeriodId mediaPeriodId){
        // do nothing
    }
}
