//
//  ViewController.swift
//  AVPlayerOrchestrator
//

import AVKit
import LumenCDNLoadBalancerAVPlayerPlugin

class SwiftSampleViewController: AVPlayerViewController {
  
  // MARK: - Properties
  private var plugin: LMDeliveryClientPlugin?
  private let manifestUrl = URL(string: "https://wowza-test-cloudfront.streamroot.io/liveOriginTimestamps/bbb_30fps_live.smil/playlist.m3u8")!
  
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
    let svContainer = UIView(frame: self.view.bounds)
    #elseif os(tvOS)
    let svContainer = UIScrollView(frame: self.view.bounds)
    #endif
    self.view.addSubview(svContainer)
    plugin.displayStatsView(svContainer)
  }
}
