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
  
  override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
    super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }
  
  func createDeliveryClient() -> LMDeliveryClient {
    return LMDeliveryClientBuilder.clientBuilder()
          .playerInteractor(playerInteractor)
          .build(manifestUrl)
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
      
    // Setup AVPlayerViewController view
    avpController.view.frame = self.view.bounds
    self.view.addSubview(avpController.view)
    
    // Create and start a delivery client
    deliveryClient = createDeliveryClient()
    deliveryClient!.start()
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
    let player = AVPlayer(playerItem: playerItem)
    avpController.player = player
    
    // Link the player to the PlayerInteractor so it can register to the player event and notify properly the deliveryCLient
    // Must be done before starting the playback.
    playerInteractor.linkPlayer(player, playerItem: playerItem)
    player.play()
    
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

