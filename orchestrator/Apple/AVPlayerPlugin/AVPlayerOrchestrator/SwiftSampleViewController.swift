//
//  ViewController.swift
//  AVPlayerOrchestrator
//
//  Created by Ndiaye, Lamine on 19/08/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

import AVKit
import LumenCDNLoadBalancerAVPlayerPlugin

class SwiftSampleViewController: AVPlayerViewController {
  
  // MARK: - Properties
  private var plugin: LMDeliveryClientPlugin?
  private let manifestUrl = URL(string: "http://wowza-test.streamroot.io/liveOrigin/BBB-bl-1500/playlist.m3u8")!
  
  // MARK: - View Controller Init
  override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
    plugin?.stop()
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    initDeliveryClient()
    playContent()
  }
  
  // MARK: - Player init
  
  /// Init the delivery client by passing:
  /// The player interactor
  /// The contentId
  /// The property defined within the streamroot dashboard
  /// The log level (logging Warning and above)
  /// The main manifest of the stream
  func initDeliveryClient() {
    // Build the delivery client with parameters
    plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .orchestratorOptions({ o in
        o.contentId("wowza_demo_content")
        o.orchestratorProperty("classic")
        o.logLevel(.warning)
      }).start()
  }
  
  /// Play content by getting the stream provided by the deliveryClient
  func playContent() {
    guard let plugin = self.plugin else { return }
    
    player = plugin.avPlayer
    
    // Start the playback
    plugin.avPlayer.play()
    
    //Display the stat view
    #if os(iOS)
    plugin.displayStatsView(contentOverlayView!)
    #elseif os(tvOS)
    let sv = UIScrollView(frame: self.view.bounds)
    self.view.addSubview(sv)
    plugin.displayStatsView(sv)
    #endif
  }
}
