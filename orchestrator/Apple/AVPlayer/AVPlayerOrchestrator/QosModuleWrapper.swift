//
//  QosModuleWrapper.swift
//  AVPlayerOrchestrator
//
//  Created by Ndiaye, Lamine on 19/08/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

import AVKit

class QoSModuleWrapper: NSObject {
  
  var qosModule: CTLQosModule
  fileprivate var player: AVPlayer?
  fileprivate var playbackState: CTLPlaybackState
  
  fileprivate var observer: Any?
  
  override init() {
    self.qosModule = CTLQosModule(type: .custom)
    self.playbackState = .idle
    super.init()
  }
  
  func linkPlayer(_ player: AVPlayer)  {
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
                                           name: NSNotification.Name.AVPlayerItemTimeJumped,
                                           object: playerItem)
    NotificationCenter.default.addObserver(self, selector: #selector(handleItemPlayBackStall),
                                           name: NSNotification.Name.AVPlayerItemPlaybackStalled,
                                           object: playerItem)
    player.addObserver(self, forKeyPath: "rate", options: NSKeyValueObservingOptions.new, context: nil)
    observePlayback()
  }
  
  deinit {
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
    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemTimeJumped,
                                              object: player?.currentItem)
    NotificationCenter.default.removeObserver(self, name: NSNotification.Name.AVPlayerItemPlaybackStalled,
                                              object: player?.currentItem)
    player?.removeObserver(self, forKeyPath: "rate")
  }
  
  fileprivate func updateState(_ state: CTLPlaybackState) {
    if playbackState != state {
      qosModule.playerStateDidChange(state)
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
extension QoSModuleWrapper {
  @objc private func handlePlayedToEndFail(_: Notification) {
    qosModule.playbackErrorOccurred()
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
      qosModule.trackSwitchOccurred()
    }
    // dropframe
    if playerEvents.numberOfDroppedVideoFrames > 0 {
      qosModule.updateDroppedFrameCount(playerEvents.numberOfDroppedVideoFrames)
    }
  }
  
  @objc private func handleErrorLogEntry(_: Notification) {
    qosModule.playbackErrorOccurred()
  }
  
  @objc private func handleItemPlayBackJumped(_: Notification) {
    updateState(.seeking)
  }
  
  @objc private func handleItemPlayBackStall(_: Notification) {
    updateState(.buffering)
  }
}
