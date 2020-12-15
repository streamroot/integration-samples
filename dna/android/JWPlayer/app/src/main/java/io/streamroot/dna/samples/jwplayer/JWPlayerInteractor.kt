package io.streamroot.dna.samples.jwplayer

import android.content.Context
import android.os.Looper
import com.google.android.exoplayer2.LoadControl
import com.longtailvideo.jwplayer.JWPlayerView
import io.streamroot.dna.core.PlayerInteractor
import io.streamroot.dna.core.TimeRange
import java.lang.Exception
import java.util.concurrent.TimeUnit

// DO NOT MODIFY //

private interface BufferTargetBridge {
    fun bufferTarget() : Double = 0.0
    fun setBufferTarget(bufferTarget: Double) {}
}

private abstract class LoadControlBufferTargetBridge(protected val loadControl: LoadControl) : BufferTargetBridge {

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
        if (maxBufferUs >= minBufferUs) runCatching {
            maxBufferField.setLong(
                    loadControl,
                    maxBufferUs
            )
        }
    }
}

// 2.10- & 2.12+
private class LoadControlBufferTargetBridgeV1(loadControl: LoadControl)
    : LoadControlBufferTargetBridge(loadControl) {
    companion object {
        private const val MIN_BUFFER_FIELD_NAME = "minBufferUs"
    }

    override val minBufferUs = loadControl.getLongFromFieldElseThrow(MIN_BUFFER_FIELD_NAME)
}

// 2.11
private class LoadControlBufferTargetBridgeV2(loadControl: LoadControl, audioOnly: Boolean)
    : LoadControlBufferTargetBridge(loadControl) {
    companion object {
        private const val MIN_BUFFER_AUDIO_FIELD_NAME = "minBufferAudioUs"
        private const val MIN_BUFFER_VIDEO_FIELD_NAME = "minBufferVideoUs"
    }

    override val minBufferUs = loadControl.getLongFromFieldElseThrow(
            if (audioOnly) MIN_BUFFER_AUDIO_FIELD_NAME else MIN_BUFFER_VIDEO_FIELD_NAME
    )
}

private object BufferTargetBridgeFactory {
    fun createInteractor(loadControl: LoadControl, audioOnly: Boolean) : BufferTargetBridge {
        return runCatching { LoadControlBufferTargetBridgeV1(loadControl) }.getOrNull()
                ?: runCatching { LoadControlBufferTargetBridgeV2(loadControl, audioOnly) }.getOrNull()
                ?: throw Exception("Unsupported ExoPlayer version")
    }
}

class JWPlayerInteractor(
        context: Context,
        private val player: JWPlayerView,
        loadControl: LoadControl,
        audioOnly: Boolean = false
) : PlayerInteractor {

    private val bridge = BufferTargetBridgeFactory.createInteractor(loadControl, audioOnly)
    private val mLooper = context.mainLooper

    override fun looper() : Looper = mLooper

    override fun loadedTimeRanges() : List<TimeRange> {
        val bufferStartMs = playbackTime()
        val durationS = player.duration
        val percentBuffer = player.buffer

        if (percentBuffer < 0 || durationS <= 0.0 || bufferStartMs < 0L) {
            return emptyList()
        }

        val bufferSizeMs = (percentBuffer * durationS * 10).toLong() - bufferStartMs // * 1000 / 100 = * 10

        return if (bufferSizeMs >= 0) { listOf(TimeRange(bufferStartMs, bufferSizeMs)) } else emptyList()
    }

    override fun playbackTime() = (player.position * 1000).toLong()

    override fun bufferTarget() = bridge.bufferTarget()
    override fun setBufferTarget(bufferTarget: Double) = bridge.setBufferTarget(bufferTarget)
}