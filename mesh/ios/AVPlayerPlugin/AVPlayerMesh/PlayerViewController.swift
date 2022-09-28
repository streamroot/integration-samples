//
//  PlayerViewController.swift
//  AVPlayerMesh
//

import UIKit
import AVKit
import AVFoundation
import LumenMeshDeliveryAVPlayerPlugin

class PlayerViewController: UIViewController {
  private var avpController = AVPlayerViewController()
  private var plugin: LMDeliveryClientPlugin?
  private var statView: UIView!
  private var statViewController: UIViewController!
  private let manifestUrl = URL(string: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8")!
  
  override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
    super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
      
    // Setup AVPlayerViewController view
    avpController.view.frame = self.view.bounds
    self.view.addSubview(avpController.view)
    
    // Create and start a delivery client
    plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .meshOptions({ o in
        o.logLevel(.trace)
      })
      .start()
  }

  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    playVideo()
  }
  
  override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
    plugin?.stop()
  }
  
  func playVideo() {
    guard let plugin = self.plugin else { return }
    
    // Set player to AVPController then play
    avpController.player = plugin.avPlayer
    plugin.avPlayer.play()
    
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
    plugin.displayStatsView(statView)
  }
}