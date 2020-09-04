//
//  JWPlayerQosModule.swift
//  JWPlayerSample
//
//  Created by Boris BORGOBELLO on 04/09/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

// DO NOT MODIFY //

import Foundation
import StreamrootSDK
import JWPlayer_iOS_SDK

class JWPlayerQosModule : NSObject, JWPlayerDelegate {
  let dnaQosModule = DNAQos.module(type: .custom)
  
  public init(_ player: JWPlayerController? = nil) {
    super.init()
    if let player = player { setPlayer(player) }
  }
  
  func setPlayer(_ player: JWPlayerController) {
    player.delegate = self
    dnaQosModule.playerStateDidChange(.idle)
  }
  
  func onIdle(_ event: JWEvent & JWStateChangeEvent) {
    dnaQosModule.playerStateDidChange(.idle)
  }
  
  func onPlay(_ event: JWEvent & JWStateChangeEvent) {
    dnaQosModule.playerStateDidChange(.playing)
  }
  
  func onPause(_ event: JWEvent & JWStateChangeEvent) {
    dnaQosModule.playerStateDidChange(.paused)
  }
  
  func onSeek(_ event: JWEvent & JWSeekEvent) {
    dnaQosModule.playerStateDidChange(.seeking)
  }
  
  func onComplete() {
    dnaQosModule.playerStateDidChange(.ended)
  }
  
  func onBuffer(_ event: JWEvent & JWBufferEvent) {
    dnaQosModule.playerStateDidChange(.buffering)
  }
  
  func onError(_ event: JWEvent & JWErrorEvent) {
    dnaQosModule.playbackErrorOccurred()
  }
}

