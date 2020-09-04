//
//  ViewController+DNAClientDelegate.swift
//  JWPlayerSample
//
//  Created by Boris BORGOBELLO on 04/09/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

// DO NOT MODIFY //

import Foundation
import StreamrootSDK

extension ViewController: DNAClientDelegate {
  func playbackTime() -> Double {
    Double(jwpController?.position ?? 0.0)
  }
  
  func loadedTimeRanges() -> [NSValue] {
    guard let bufferStartS = jwpController?.position,
      let bufferPercent = jwpController?.buffer,
      let durationS = jwpController?.duration,
      bufferStartS >= 0.0,
      durationS > 0.0 else {
      return []
    }
    
    let bufferEndS = CGFloat(bufferPercent) * durationS / 100.0
    let bufferS = Double(bufferEndS - bufferStartS)
    
    guard bufferS >= 0 else { return [] }
    
    let tr = TimeRange(start: Double(bufferStartS), duration: bufferS)
    
    return [NSValue(timeRange: tr)]
  }
  
  func updatePeakBitRate(_ bitRate: Double) {}
}
