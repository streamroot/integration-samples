package io.streamroot.dna.samples.jwplayer

import com.longtailvideo.jwplayer.JWPlayerView
import com.longtailvideo.jwplayer.events.*
import com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents
import io.streamroot.dna.core.PlaybackState
import io.streamroot.dna.core.QosModule

// DO NOT MODIFY //

class JWPlayerQosModule(private val player: JWPlayerView) : QosModule(),
        AutoCloseable,
        VideoPlayerEvents.OnIdleListener,
        VideoPlayerEvents.OnPlayListener,
        VideoPlayerEvents.OnPauseListener,
        VideoPlayerEvents.OnSeekListener,
        VideoPlayerEvents.OnCompleteListener,
        VideoPlayerEvents.OnBufferListener,
        VideoPlayerEvents.OnErrorListener {

    private var playbackState = PlaybackState.IDLE

    init {
        player.addOnIdleListener(this)
        player.addOnPlayListener(this)
        player.addOnPauseListener(this)
        player.addOnSeekListener(this)
        player.addOnCompleteListener(this)
        player.addOnBufferListener(this)
        player.addOnErrorListener(this)
    }

    override fun close() {
        player.removeOnIdleListener(this)
        player.removeOnPlayListener(this)
        player.removeOnPauseListener(this)
        player.removeOnSeekListener(this)
        player.removeOnCompleteListener(this)
        player.removeOnBufferListener(this)
        player.removeOnErrorListener(this)
    }

    override fun onError(error: ErrorEvent?) {
        playbackErrorOccurred()
    }

    override fun onIdle(ev: IdleEvent?) = updatePlaybackState(PlaybackState.IDLE)
    override fun onPlay(ev: PlayEvent?) = updatePlaybackState(PlaybackState.PLAYING)
    override fun onPause(ev: PauseEvent?) = updatePlaybackState(PlaybackState.PAUSING)
    override fun onSeek(ev: SeekEvent?) = updatePlaybackState(PlaybackState.SEEKING)
    override fun onComplete(ev: CompleteEvent?) = updatePlaybackState(PlaybackState.ENDED)
    override fun onBuffer(ev: BufferEvent?) = updatePlaybackState(PlaybackState.BUFFERING)

    private fun updatePlaybackState(ps: PlaybackState) {
        this.playbackState = ps
        playbackStateChange(playbackState)
    }
}