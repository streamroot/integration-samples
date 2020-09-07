//
//  SRConfig.swift
//  JWPlayerSample
//
//  Created by Boris BORGOBELLO on 04/09/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

import Foundation
import StreamrootSDK

struct SRConfig {
  static let url = "http://wowza-test.streamroot.io/liveOrigin/Sintel1/playlist.m3u8"
  static let dnaEnabled = true
  static let showStatsView = true
  
  static func setupDNA(_ builder: DNATrigger) -> DNATrigger {
    return builder
    .streamrootKey("S")
    .latency(30)
    .logLevel(.debug)
  }
}
