package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import android.content.Context
import android.os.Handler
import android.util.Log
import com.google.android.exoplayer2.*
import com.google.android.exoplayer2.source.TrackGroupArray
import com.google.android.exoplayer2.trackselection.TrackSelectionArray
import com.google.android.exoplayer2.upstream.BandwidthMeter
import com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
import com.google.android.exoplayer2.upstream.TransferListener
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicLong

class PlayerInteractor(
    private val player: ExoPlayer,
    loadControl: LoadControl,
    private val bandwidthMeter: ExoPlayerBandwidthMeter
) : LumenPlayerInteractorBase(),
    Player.Listener {

    init {
        player.addListener(this)
    }

    override fun onSeekProcessed() {
        super.playerStateChange(LumenVideoPlaybackState.SEEKING)
    }

    override fun onTracksChanged(trackGroups: TrackGroupArray, trackSelections: TrackSelectionArray) {
        super.playerTrackSwitch()
    }

    override fun onPlayerError(error: PlaybackException) {
        super.playerError()
    }

    override fun onPlayerStateChanged(playWhenReady: Boolean, playbackState: Int) {
        when (playbackState) {
            Player.STATE_IDLE -> {
                super.playerStateChange(LumenVideoPlaybackState.IDLE)
            }
            Player.STATE_BUFFERING -> {
                super.playerStateChange(LumenVideoPlaybackState.REBUFFERING)
            }
            Player.STATE_READY -> {
                super.playerStateChange(if (playWhenReady) LumenVideoPlaybackState.PLAYING else LumenVideoPlaybackState.PAUSED)
            }
            Player.STATE_ENDED -> {
                super.playerStateChange(LumenVideoPlaybackState.ENDED)
            }
        }
    }

    private val handler = Handler(player.applicationLooper)

    private fun <T> runSyncOnEPHandler(block: () -> T): T? {
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
    // Conversion from milliseconds to seconds does not use TimeUnit because we want
    // to keep a floating precision
    private val bridge = BufferTargetBridgeFactory.createInteractor(loadControl)

    override fun bufferHealth() = runSyncOnEPHandler { (player.bufferedPosition - player.currentPosition) / 1000.0 }!!

    override fun bufferTarget() = runSyncOnEPHandler { bridge.bufferTarget() }!!

    override fun setBufferTarget(target: Double) = runSyncOnEPHandler { bridge.setBufferTarget(target) }!!

    override fun setEstimatedBandwidth(bps: Long?) {
        bps?.let {
            bandwidthMeter.setEstimatedBandwidth(bps)
        }
    }
}

class ExoPlayerBandwidthMeter private constructor(context: Context) : BandwidthMeter {
    companion object {
        fun new(context: Context) = ExoPlayerBandwidthMeter(context)
    }

    private val estimatedBandwidth = AtomicLong(DefaultBandwidthMeter.Builder(context).build().bitrateEstimate)

    fun setEstimatedBandwidth(bps: Long) {
        estimatedBandwidth.set(bps)
    }

    override fun getBitrateEstimate() = estimatedBandwidth.get()
    override fun getTransferListener(): TransferListener? = null
    override fun addEventListener(eventHandler: Handler, eventListener: BandwidthMeter.EventListener) { }
    override fun removeEventListener(eventListener: BandwidthMeter.EventListener) { }
}

internal interface BufferTargetBridge {
    fun bufferTarget(): Double = 0.0
    fun setBufferTarget(bufferTarget: Double) {}
}

private abstract class LoadControlBufferTargetBridge(protected val loadControl: LoadControl) :
    BufferTargetBridge {

    protected fun LoadControl.getAccessibleFieldElseThrow(fieldName: String) = runCatching {
        val minBufferField = this::class.java.getDeclaredField(fieldName)
        minBufferField.isAccessible = true
        minBufferField
    }.getOrNull() ?: throw IllegalArgumentException("Impossible to retrieve field `$fieldName` value from LoadControl of type `${this::class.java.simpleName}`")

    protected fun LoadControl.getLongFromFieldElseThrow(fieldName: String) = runCatching {
        getAccessibleFieldElseThrow(fieldName).getLong(this)
    }.getOrNull() ?: throw IllegalArgumentException("Impossible to retrieve long `$fieldName` value from LoadControl of type `${this::class.java.simpleName}`")

    companion object {
        private const val MAX_BUFFER_FIELD_NAME = "maxBufferUs"
    }

    protected val maxBufferField = loadControl.getAccessibleFieldElseThrow(MAX_BUFFER_FIELD_NAME)
    protected abstract val minBufferUs: Long

    override fun bufferTarget(): Double {
        return runCatching {
            maxBufferField.getLong(loadControl).let { TimeUnit.MICROSECONDS.toSeconds(it) }.toDouble()
        }.getOrNull() ?: super.bufferTarget()
    }

    override fun setBufferTarget(bufferTarget: Double) {
        val maxBufferUs = TimeUnit.SECONDS.toMicros(bufferTarget.toLong())
        if (maxBufferUs > minBufferUs) runCatching {
            maxBufferField.setLong(
                loadControl,
                maxBufferUs
            )
        }
    }
}

// 2.10- & 2.12+
private class LoadControlBufferTargetBridgeV1(loadControl: LoadControl) :
    LoadControlBufferTargetBridge(loadControl) {
    companion object {
        private const val MIN_BUFFER_FIELD_NAME = "minBufferUs"
    }

    override val minBufferUs = loadControl.getLongFromFieldElseThrow(MIN_BUFFER_FIELD_NAME)
}

// 2.11
private class LoadControlBufferTargetBridgeV2(loadControl: LoadControl, audioOnly: Boolean) :
    LoadControlBufferTargetBridge(loadControl) {
    companion object {
        private const val MIN_BUFFER_AUDIO_FIELD_NAME = "minBufferAudioUs"
        private const val MIN_BUFFER_VIDEO_FIELD_NAME = "minBufferVideoUs"
    }

    override val minBufferUs = loadControl.getLongFromFieldElseThrow(
        if (audioOnly) MIN_BUFFER_AUDIO_FIELD_NAME else MIN_BUFFER_VIDEO_FIELD_NAME
    )
}

internal object BufferTargetBridgeFactory {
    fun createInteractor(loadControl: LoadControl, audioOnly: Boolean = false): BufferTargetBridge {
        return runCatching { LoadControlBufferTargetBridgeV1(loadControl) }.getOrNull()?.also { Log.v("Misc", "Using interactor V1") }
            ?: runCatching { LoadControlBufferTargetBridgeV2(loadControl, audioOnly) }.getOrNull()?.also { Log.v("Misc", "Using interactor V2") }
            ?: throw java.lang.Exception("Unsupported ExoPlayer version")
    }
}