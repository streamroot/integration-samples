package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import android.content.Context
import android.os.Handler
import android.util.Log
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.LoadControl
import com.google.android.exoplayer2.PlaybackException
import com.google.android.exoplayer2.Player
import com.google.android.exoplayer2.source.TrackGroupArray
import com.google.android.exoplayer2.trackselection.TrackSelectionArray
import com.google.android.exoplayer2.upstream.BandwidthMeter
import com.google.android.exoplayer2.upstream.DataSource
import com.google.android.exoplayer2.upstream.DataSpec
import com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
import com.google.android.exoplayer2.upstream.TransferListener
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorBase
import io.streamroot.lumen.delivery.client.core.LumenPlayerInteractorWrapperInterface
import io.streamroot.lumen.delivery.client.core.LumenVideoPlaybackState
import java.util.concurrent.TimeUnit

typealias Driver = LumenPlayerInteractorWrapperInterface.Driver

private const val TAG = "ExoPlayerInteractor"
private const val EXO_BW_TAG = "ExoPlayerBandwidthMeter"

open class DefaultBandwidthMeterSR(context: Context) : BandwidthMeter, TransferListener {
    private val wrappedEstimator = DefaultBandwidthMeter.Builder(context).build()

    override fun getTransferListener() = this

    override fun getBitrateEstimate() = wrappedEstimator.bitrateEstimate.also {
        Log.d(EXO_BW_TAG, "[Lumen][android][DefaultBandwidthMeterSR] => Exo requested the BW, returned : $it")
    }

    override fun addEventListener(
        eventHandler: Handler,
        eventListener: BandwidthMeter.EventListener
    ) = wrappedEstimator.addEventListener(eventHandler, eventListener)

    override fun removeEventListener(eventListener: BandwidthMeter.EventListener) =
        wrappedEstimator.removeEventListener(eventListener)

    override fun onTransferInitializing(
        source: DataSource,
        dataSpec: DataSpec,
        isNetwork: Boolean
    ) = wrappedEstimator.onTransferInitializing(source, dataSpec, isNetwork)

    override fun onTransferStart(source: DataSource, dataSpec: DataSpec, isNetwork: Boolean) =
        wrappedEstimator.onTransferStart(source, dataSpec, isNetwork)

    override fun onBytesTransferred(
        source: DataSource,
        dataSpec: DataSpec,
        isNetwork: Boolean,
        bytesTransferred: Int
    ) = wrappedEstimator.onBytesTransferred(source, dataSpec, isNetwork, bytesTransferred)

    override fun onTransferEnd(source: DataSource, dataSpec: DataSpec, isNetwork: Boolean) =
        wrappedEstimator.onTransferEnd(source, dataSpec, isNetwork).also {
            val est = wrappedEstimator.bitrateEstimate
            Log.d(EXO_BW_TAG, "[Lumen][android][DefaultBandwidthMeterSR] => New estimated BW : $est")
        }
}

class ExoPlayerBandwidthMeter(private val context: Context, playerBuilder: ExoPlayer.Builder) : BandwidthMeter, TransferListener {
    data class HandlerAndListener(val handler: Handler, val eventListener: BandwidthMeter.EventListener)

    private val listeners = arrayListOf<HandlerAndListener>()

    private lateinit var defaultBandwidthMeterSR: DefaultBandwidthMeterSR
    private lateinit var bwDriver: LumenPlayerInteractorWrapperInterface.Driver

    private var meshEstimatedBandwidth: Long

    init {
        setDriver(Driver.PLAYER)
        meshEstimatedBandwidth = defaultBandwidthMeterSR.bitrateEstimate
        playerBuilder.setBandwidthMeter(this)
    }

    @Synchronized
    fun setDriver(driver: Driver) {
        if (this::bwDriver.isInitialized && bwDriver == driver) return
        bwDriver = driver
        Log.d(EXO_BW_TAG, "[Lumen][android][BandwidthMeter] => set BW driver : $driver")
        if (driver == Driver.PLAYER) {
            // Transfer listeners to a new BW meter
            if (this::defaultBandwidthMeterSR.isInitialized) {
                listeners.forEach { defaultBandwidthMeterSR.removeEventListener(it.eventListener) }
            }
            defaultBandwidthMeterSR = DefaultBandwidthMeterSR(context)
            listeners.forEach { defaultBandwidthMeterSR.addEventListener(it.handler, it.eventListener) }
        }
    }

    @Synchronized
    override fun getBitrateEstimate(): Long {
        val estimate = when (bwDriver) {
            Driver.PLAYER -> defaultBandwidthMeterSR.bitrateEstimate
            Driver.MESH -> meshEstimatedBandwidth
        }
        Log.d(EXO_BW_TAG, "[Lumen][android][BandwidthMeter] => Exo requested the BW, driver : ${bwDriver.name}, returned : $estimate")
        return estimate
    }

    @Synchronized
    fun setMeshEstimatedBandwidth(bps: Long) {
        meshEstimatedBandwidth = bps
        Log.d(EXO_BW_TAG, "[Lumen][android][BandwidthMeter] => New estimated BW : $bps")
    }

    override fun getTransferListener() = this

    @Synchronized
    override fun addEventListener(eventHandler: Handler, eventListener: BandwidthMeter.EventListener) {
        listeners.add(HandlerAndListener(eventHandler, eventListener))
        defaultBandwidthMeterSR.addEventListener(eventHandler, eventListener)
    }

    @Synchronized
    override fun removeEventListener(eventListener: BandwidthMeter.EventListener) {
        listeners.removeAll { it.eventListener == eventListener }
        defaultBandwidthMeterSR.removeEventListener(eventListener)
    }

    @Synchronized
    override fun onTransferInitializing(source: DataSource, dataSpec: DataSpec, isNetwork: Boolean) {
        defaultBandwidthMeterSR.onTransferInitializing(source, dataSpec, isNetwork)
    }

    @Synchronized
    override fun onTransferStart(source: DataSource, dataSpec: DataSpec, isNetwork: Boolean) {
        defaultBandwidthMeterSR.onTransferStart(source, dataSpec, isNetwork)
    }

    @Synchronized
    override fun onBytesTransferred(source: DataSource, dataSpec: DataSpec, isNetwork: Boolean, bytesTransferred: Int) {
        defaultBandwidthMeterSR.onBytesTransferred(source, dataSpec, isNetwork, bytesTransferred)
    }

    @Synchronized
    override fun onTransferEnd(source: DataSource, dataSpec: DataSpec, isNetwork: Boolean) {
        defaultBandwidthMeterSR.onTransferEnd(source, dataSpec, isNetwork)
    }
}

class PlayerInteractor(
    private val player: ExoPlayer,
    loadControl: LoadControl,
    private val bandwidthMeter: ExoPlayerBandwidthMeter
) : LumenPlayerInteractorBase(),
    Player.Listener {

    init {
        player.addListener(this)
        updateBWMeter(bandwidthMeter.bitrateEstimate)
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

    // Bandwidth

    private fun updateBWMeter(bps: Long) {
        bandwidthMeter.setMeshEstimatedBandwidth(bps)
    }
    override fun setEstimatedBandwidth(bps: Long?) {
        Log.d(EXO_BW_TAG, "[Lumen][BandwidthMeter] setEstimatedBandwidth called with value : $bps")
        bps?.let {
            updateBWMeter(bps)
        }
    }
    override fun setBandwidthDriver(driver: Driver) {
        bandwidthMeter.setDriver(driver)
    }
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
        runCatching {
            maxBufferField.setLong(
                loadControl,
                maxOf(minBufferUs, maxBufferUs)
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

private object BufferTargetBridgeFactory {
    fun createInteractor(loadControl: LoadControl, audioOnly: Boolean = false): BufferTargetBridge {
        return runCatching { LoadControlBufferTargetBridgeV1(loadControl) }.getOrNull()?.also { Log.v("Misc", "[Lumen] Using interactor V1") }
            ?: runCatching { LoadControlBufferTargetBridgeV2(loadControl, audioOnly) }.getOrNull()?.also { Log.v(TAG, "[Lumen] Using interactor V2") }
            ?: throw java.lang.Exception("[Lumen] Unsupported ExoPlayer version")
    }
}