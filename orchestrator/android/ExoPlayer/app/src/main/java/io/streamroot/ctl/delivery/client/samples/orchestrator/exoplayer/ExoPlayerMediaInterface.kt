package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer

import android.os.Handler
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.Timeline
import io.streamroot.jericho.bridge.MediaInterfacePublic
import io.streamroot.jericho.bridge.TimeRangePublic

class ExoPlayerMediaInterface(private val player: ExoPlayer) : MediaInterfacePublic {
    private val handler = Handler(player.applicationLooper)

    private fun <T> runSyncOnEPHandler(block: () -> T) : T?  {
        var t: T? = null
        val lock = Object()
        synchronized(lock) {
            handler.post {
                synchronized(lock) {
                    t = block()
                    lock.notify()
                }
            }
            lock.wait()
        }
        return t
    }

    override fun playbackTime() = runSyncOnEPHandler {
        (getCurrentWindowShift() + player.currentPosition).toDouble()
    }!!

    override fun timeRanges() = runSyncOnEPHandler {
        val shift = getCurrentWindowShift()
        val rangeDurationMs = player.bufferedPosition - player.currentPosition
        if (rangeDurationMs > 0) {
            arrayListOf(TimeRangePublic((shift + player.currentPosition).toFloat(), rangeDurationMs / 1000f))
        } else {
            arrayListOf()
        }
    }!!

    private fun getCurrentWindowShift(): Long {
        val current = player.currentTimeline
        val timelineWindow = Timeline.Window()

        return if (player.currentWindowIndex < current.windowCount) {
            player.currentTimeline.getWindow(player.currentWindowIndex, timelineWindow)
            timelineWindow.positionInFirstPeriodMs
        } else 0L
    }
}