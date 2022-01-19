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

/*
 * PlayerInteractor monitor the player state and notify the delivery client
 *
 * In this example, the `PlayerInteractor` implements `LMPlayerInteractorBase` and serves as a Helper class.
 * The player Interactor is a class which implements `LMPlayerInteractorBase` and raises events with the associated `super` methods.
 *
 * Example:
 *  - When the playback starts, a `.playing` event is raised as following:
 */
class PlayerInteractor: LMPlayerInteractorBase {
  fileprivate var player: AVPlayer?
  fileprivate var playbackState: LMPlaybackState
  fileprivate var observer: Any?

  override init() {
    self.playbackState = .idle
    super.init()
  }

  func linkPlayer(_ player: AVPlayer) {
    self.player = player
    guard let playerItem = player.currentItem else { return }

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
    player.addObserver(self, forKeyPath: "rate", options: NSKeyValueObservingOptions.new, context: nil)
    observePlayback()
  }
  
  func unlink() {
    if let observer = self.observer {
      player?.removeTimeObserver(observer)
      self.observer = nil
    }

    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemFailedToPlayToEndTime,
                                              object: player?.currentItem)
    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemDidPlayToEndTime,
                                              object: player?.currentItem)
    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemNewAccessLogEntry,
                                              object: player?.currentItem)
    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemNewErrorLogEntry,
                                              object: player?.currentItem)
    NotificationCenter.default.removeObserver(self, name: AVPlayerItem.timeJumpedNotification,
                                              object: player?.currentItem)
    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemPlaybackStalled,
                                              object: player?.currentItem)
    player?.removeObserver(self, forKeyPath: "rate")
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

  public override func observeValue(forKeyPath keyPath: String?,
                                    of _: Any?,
                                    change _: [NSKeyValueChangeKey: Any]?,
                                    context _: UnsafeMutableRawPointer?) {
    if keyPath == "rate", player?.rate == 0.0 {
      updateState(.paused)
    }
  }

  fileprivate func observePlayback() {
    if let observer = self.observer {
      player?.removeTimeObserver(observer)
      self.observer = nil
    }

    // Invoke callback every half second
    let interval = CMTime(seconds: 1,
                          preferredTimescale: CMTimeScale(NSEC_PER_SEC))
    // Queue on which to invoke the callback
    let mainQueue = DispatchQueue.main
    // Add time observer
    observer = player?.addPeriodicTimeObserver(forInterval: interval, queue: mainQueue) { [weak self] _ in
      guard let self = self else { return }

      let playbackLikelyToKeepUp: Bool = self.player?.currentItem?.isPlaybackLikelyToKeepUp ?? false
      if !playbackLikelyToKeepUp {
        // rebuffering
        self.updateState(.buffering)
      } else {
        // playing
        let rate = self.player?.rate
        if rate == 1.0, self.player?.error == nil {
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
    guard let playerEvents = player?.currentItem?.accessLog()?.events.first else {
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
    updateState(.seeking)
  }

  @objc private func handleItemPlayBackStall(_: Notification) {
    updateState(.buffering)
  }
}

// MARK: - PlayerInteractor
extension PlayerInteractor {
    public override func playbackTime() -> Double {
        if let player = self.player {
            return CMTimeGetSeconds(player.currentTime())
        }
        return 0.0
    }

    public override func bufferHealth() -> Double {
        if let playerItem = self.player?.currentItem {
            let time = CMTimeGetSeconds(playerItem.currentTime())
            let timeRanges = playerItem.loadedTimeRanges.filter { CMTimeGetSeconds($0.timeRangeValue.end) > time }
            return timeRanges.map {
                CMTimeGetSeconds($0.timeRangeValue.end)
            }.reduce(0) { $0 + ($1 - time) }
        }
        return 0.0
    }

    public override func bufferTarget() -> Double {
        if #available(iOS 10.0, tvOS 10.0, *) {
            return self.player?.currentItem?.preferredForwardBufferDuration ?? 0
        }
        return 0.0
    }

    public override func setBufferTarget(_ target: Double) {
        if #available(iOS 10.0, tvOS 10.0, *) {
            self.player?.currentItem?.preferredForwardBufferDuration = target
        }
    }

    public override func setEstimatedBandwidth(_ bps: NSNumber?) {
        NSLog("[Lumen] setEstimatedBandwidth called with value \(bps != nil ? "\(bps!.uint64Value)" : "null")")
        guard let bps = bps else { return }
        self.player?.currentItem?.preferredPeakBitRate = bps.doubleValue
    }
}
