//
// Copyright © 2020 Streamroot. All rights reserved.
//
// This unpublished material is proprietary to Streamroot. All rights reserved.
//
// The methods and techniques described herein are considered trade secrets
// and/or confidential. Reproduction or distribution, in whole or in part,
// is forbidden except by express written permission of Streamroot.

import AVKit
import LumenMeshSDK

private typealias PlayerConfig = (player: AVPlayer, playerItem: AVPlayerItem)

class PlayerInteractor: LMPlayerInteractorBase {
  fileprivate var playerConfig: PlayerConfig?
  fileprivate var playbackState: LMPlaybackState = .idle

  fileprivate var timeObserver: Any?
  fileprivate var rateObserver: NSKeyValueObservation?

  func linkPlayer(_ player: AVPlayer, playerItem: AVPlayerItem) {
    unlink()
    let config = (player, playerItem)
    playerConfig = config

    NotificationCenter.default.addObserver(self, selector: #selector(handlePlayedToEndFail),
                                           name: NSNotification.Name.AVPlayerItemFailedToPlayToEndTime,
                                           object: playerItem)
    NotificationCenter.default.addObserver(self, selector: #selector(handlePlayToEndSucceded),
                                           name: NSNotification.Name.AVPlayerItemDidPlayToEndTime,
                                           object: playerItem)
    NotificationCenter.default.addObserver(self, selector: #selector(handleAccesLogEntry),
                                           name: NSNotification.Name.AVPlayerItemNewAccessLogEntry,
                                           object: playerItem)
    NotificationCenter.default.addObserver(self, selector: #selector(handleErrorLogEntry),
                                           name: NSNotification.Name.AVPlayerItemNewErrorLogEntry,
                                           object: playerItem)
    NotificationCenter.default.addObserver(self, selector: #selector(handleItemPlayBackJumped),
                                           name: AVPlayerItem.timeJumpedNotification,
                                           object: playerItem)
    NotificationCenter.default.addObserver(self, selector: #selector(handleItemPlayBackStall),
                                           name: NSNotification.Name.AVPlayerItemPlaybackStalled,
                                           object: playerItem)

    observePlayback(playerConfig: config)
  }

  func unlink() {
    guard let playerConfig = playerConfig else { return }

    if let observer = timeObserver {
      playerConfig.player.removeTimeObserver(observer)
      timeObserver = nil
    }

    if let observer = rateObserver {
      observer.invalidate()
      rateObserver = nil
    }

    for item in [
      NSNotification.Name.AVPlayerItemFailedToPlayToEndTime,
      NSNotification.Name.AVPlayerItemDidPlayToEndTime,
      NSNotification.Name.AVPlayerItemNewAccessLogEntry,
      NSNotification.Name.AVPlayerItemNewErrorLogEntry,
      AVPlayerItem.timeJumpedNotification,
      NSNotification.Name.AVPlayerItemPlaybackStalled
    ] {
      NotificationCenter.default.removeObserver(self, name: item, object: playerConfig.playerItem)
    }

    playbackState = .idle
    self.playerConfig = nil
  }

  deinit {
    unlink()
  }

  fileprivate func updateState(_ state: LMPlaybackState) {
    if playbackState != state {
      super.playerStateDidChange(state)
      playbackState = state
    }
  }

  fileprivate func observePlayback(playerConfig: PlayerConfig) {
    rateObserver = playerConfig.player.observe(\.rate, options: [.new]) { _, rate in
      if rate.newValue == 0.0 {
        // paused
        self.updateState(.paused)
      }
    }

    // Invoke callback every second
    let interval = CMTime(seconds: 1,
                          preferredTimescale: CMTimeScale(NSEC_PER_SEC))
    // Add time observer
    timeObserver = playerConfig.player.addPeriodicTimeObserver(forInterval: interval, queue: DispatchQueue.main) { [weak self] _ in
      guard let self = self, let playerConfig = self.playerConfig else { return }

      if !playerConfig.playerItem.isPlaybackLikelyToKeepUp, playerConfig.player.rate != 0.0 {
        // rebuffering
        self.updateState(.buffering)
      } else {
        // playing
        let rate = playerConfig.player.rate
        if rate == 1.0, playerConfig.player.error == nil {
          self.updateState(.playing)
        }
      }
    }
  }
}

// MARK: - Handler

extension PlayerInteractor {
  @objc private func handlePlayedToEndFail(_: Notification) {
    super.playbackErrorOccurred()
  }

  @objc private func handlePlayToEndSucceded(_: Notification) {
    updateState(.ended)
  }

  @objc private func handleAccesLogEntry(_: Notification) {
    guard let playerEvents = playerConfig?.playerItem.accessLog()?.events.first else {
      return
    }
    // trackswitch
    if playerEvents.switchBitrate > 0 {
      super.trackSwitchOccurred()
    }
    // dropframe
    if playerEvents.numberOfDroppedVideoFrames > 0 {
      super.updateDroppedFrameCount(playerEvents.numberOfDroppedVideoFrames)
    }
  }

  @objc private func handleErrorLogEntry(_: Notification) {
    super.playbackErrorOccurred()
  }

  @objc private func handleItemPlayBackJumped(_: Notification) {
    if playerConfig?.player.rate != 0.0 {
      updateState(.seeking)
    }
  }

  @objc private func handleItemPlayBackStall(_: Notification) {
    if playerConfig?.player.rate != 0.0 {
      updateState(.buffering)
    }
  }
}

// MARK: - PlayerInteractor

extension PlayerInteractor {
  override public func playbackTime() -> Double {
    guard let player = playerConfig?.player else { return 0.0 }

    return CMTimeGetSeconds(player.currentTime())
  }

  override public func bufferHealth() -> Double {
    guard let playerItem = playerConfig?.playerItem else { return 0.0 }

    let time = CMTimeGetSeconds(playerItem.currentTime())
    let timeRanges = playerItem.loadedTimeRanges.filter { CMTimeGetSeconds($0.timeRangeValue.end) > time }

    return timeRanges.map {
      CMTimeGetSeconds($0.timeRangeValue.end)
    }.reduce(0) { $0 + ($1 - time) }
  }

  override public func bufferTarget() -> Double {
    return playerConfig?.playerItem.preferredForwardBufferDuration ?? 0
  }

  override public func setBufferTarget(_ target: Double) {
    playerConfig?.playerItem.preferredForwardBufferDuration = target
  }

  override public func setEstimatedBandwidth(_ bps: NSNumber?) {
    NSLog("[lumen] setEstimatedBandwidth called with value \(bps != nil ? "\(bps!.uint64Value)" : "null")")
    guard let bps = bps, let playerItem = playerConfig?.playerItem else { return }
    playerItem.preferredPeakBitRate = bps.doubleValue
  }
}
