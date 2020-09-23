//
//  ViewController.swift
//  AVPlayerOrchestrator
//
//  Created by Ndiaye, Lamine on 19/08/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

import AVKit

class SwiftSampleViewController: AVPlayerViewController {
  
  // MARK: - Properties
  private var deliveryClient: CTLDeliveryClient?
  private var qosModuleWrapper: QoSModuleWrapper!
  private let manifestUrl = URL(string: "http://wowza-test.streamroot.io/liveOrigin/BBB-bl-1500/playlist.m3u8")!
  
  // MARK: - View Controller Init
  override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
    deliveryClient?.stop()
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    initDeliveryClient()
    playContent()
    registerAirplayNotification()
  }
  
  // MARK: - Player init
  
  /// Init the delivery client by passing:
  /// The qos module, the contentId,
  /// The property defined within the streamroot dashboard
  /// The log level (logging Warning and above)
  /// The main manifest of the stream
  func initDeliveryClient() {
    // Instanciate QOS module
    qosModuleWrapper = QoSModuleWrapper()
    // Build the delivery client with parameters
    deliveryClient = CTLDeliveryClientBuilder.clientBuilder()
      .qosModule(qosModuleWrapper.qosModule)
      // the streamroot key will default to the one in the Info.plist if not overridden here
      //.deliveryClientKey("demoswebsiteandpartners")
      .contentId("wowza_demo_content")
      .orchestratorProperty("classic")
      .logLevel(.warning)
      .build(manifestUrl)
    
    deliveryClient?.start()
  }
  
  /// Play content by getting the stream provided by the deliveryClient
  func playContent() {
    guard let deliveryUrl = deliveryClient?.localManifestURL else {
      print("Invalid manifest URL")
      return
    }
    
    let playerItem = AVPlayerItem(asset: AVURLAsset(url: deliveryUrl))
    player = AVPlayer(playerItem: playerItem)
    // Link the player to the QOSWrapper so it can register to the player event and notify properly the deliveryCLient
    qosModuleWrapper.linkPlayer(player!)
    
    // Start the playback
    player?.play()
    
    //Display the stat view
    #if os(iOS)
    self.deliveryClient?.displayStatWiew(contentOverlayView!)
    #elseif os(tvOS)
    let sv = UIScrollView(frame: self.view.bounds)
    self.view.addSubview(sv)
    self.deliveryClient?.displayStatWiew(sv)
    #endif
  }
  
  // MARK: - Airplay support
  
  /// To detect actual airplay switc we can use the device audio output
  // we need to register to AVAudioSession.routeChangeNotification
  private func registerAirplayNotification() {
    NotificationCenter.default.addObserver(
      self,
      selector: #selector(audioOutputDidChange),
      name: AVAudioSession.routeChangeNotification,
      object: AVAudioSession.sharedInstance())
  }
  
  @objc func audioOutputDidChange() {
    // Get the current audio route
    let currentRoute = AVAudioSession.sharedInstance().currentRoute
    // Check if the audio  output is an airplay type
    guard let airplayOutput = currentRoute.outputs.filter({$0.portType == .airPlay}).first else {
      return
    }
    // Save the current playbacktime
    let time = self.player?.currentTime()
    
    // Create a player item with the original url
    let newItem  = AVPlayerItem(url: manifestUrl)
    // Replace the player item to bypass local proxy
    self.player?.replaceCurrentItem(with: newItem)
    
    // Seek to last saved time, especially helpful for VOD streams
    if time != nil {
      self.player?.seek(to: time!)
    }
    print("Airplay device name: \(airplayOutput.portName)")
  }
    
}
