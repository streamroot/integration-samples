//
//  PlayerViewController.swift
//  AVPlayerMesh
//
//  Created by Mehala, Damien on 14/01/2022.
//

import UIKit
import AVKit
import AVFoundation
import LumenMeshSDK

class PlayerViewController: UIViewController {
  private var avpController = AVPlayerViewController()
  private var playerInteractor = PlayerInteractor()
  private var deliveryClient: LMDeliveryClient?
  private var statView: UIView!
  private var preferedFocusView: UIView!
  private var statViewController: UIViewController!
  private let manifestUrl = URL(string: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8")!
  
  func commonInit() {
    // Build the delivery client
    deliveryClient = LMDeliveryClientBuilder.clientBuilder()
      .playerInteractor(playerInteractor)
      // the streamroot key will default to the one in the Info.plist if not overridden here
      .deliveryClientKey("demoswebsiteandpartners")
      .meshProperty("classic")
      .logLevel(.warning)
      .build(manifestUrl)
  }
  
  override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
    super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    commonInit()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    commonInit()
  }
  
  // MARK: - View Controller Init
  override func viewDidLoad() {
    super.viewDidLoad()
    
    // Setup AVPlayerViewController view
    avpController.view.frame = self.view.bounds
    self.view.addSubview(avpController.view)
    
    // Start delivery client
    deliveryClient?.start()
  }

  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    playVideo()
  }
  
  override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
    deliveryClient?.stop()
  }
  
  func playVideo() {
    guard let deliveryUrl = deliveryClient?.localManifestURL else {
      print("Local url manifest could not be generated")
      return
    }
    
    let playerItem = AVPlayerItem(asset: AVURLAsset(url: deliveryUrl))
    avpController.player = AVPlayer(playerItem: playerItem)
    
    // Link the player to the PlayerInteractor so it can register to the player event and notify properly the deliveryCLient
    // Must be done before starting the playback.
    playerInteractor.linkPlayer(avpController.player!)
    
    avpController.player?.play()
    
    /* Setup stat view
     * AVPlayerViewController propose `contentOverlayView` to enrich
     * the view with additional content. However, it does not support
     * user interaction.
     *
     * We recommand to add the stat view as a subview instead and once
     * the player is started.
     */
    statView = UIView(frame: self.view.bounds)
    avpController.view.addSubview(statView)
    deliveryClient?.displayStatView(statView)
  }
}

