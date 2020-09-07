//
//  ViewController.swift
//  JWPlayerSample
//
//  Created by Boris BORGOBELLO on 04/09/2020.
//  Copyright © 2020 Streamroot. All rights reserved.
//

import UIKit
import StreamrootSDK
import JWPlayer_iOS_SDK

class ViewController: UIViewController {
  
  private var qosModule: JWPlayerQosModule?
  private var dnaClient: DNAClient?
  private var statsView: UIView?
  var jwpController: JWPlayerController!

  override func viewDidLoad() {
    super.viewDidLoad()
    startStreamroot()
    setupPlayer(url: dnaClient?.manifestLocalURLPath ?? SRConfig.url)
    showPlayer()
    play()
  }
  
  private func startStreamroot() {
    guard SRConfig.dnaEnabled else { return }
    
    do {
      qosModule = JWPlayerQosModule()
      
      dnaClient = try SRConfig
        .setupDNA(DNAClient.builder().dnaClientDelegate(self).qosModule(qosModule!.dnaQosModule))
        .start(URL(string: SRConfig.url)!)
      
      showStatsView()
    } catch {
      print("\(error)")
    }
  }
  
  private func showStatsView() {
    // Make stats view
    if SRConfig.showStatsView {
      statsView = UIView(frame: CGRect(x: 30, y: 30, width: view.bounds.width - 60, height: view.bounds.height - 30))
      statsView!.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      statsView!.isUserInteractionEnabled = false
      view.addSubview(statsView!)
      dnaClient?.displayStats(onView: statsView!)
    }
  }
  
  private func setupPlayer(url: String) {
    let config = JWConfig(contentURL: url)
    config.autostart = true
    config.controls = true
    config.repeat = true
    
    jwpController = JWPlayerController(config: config)
    qosModule?.setPlayer(jwpController)
  }
  
  private func showPlayer() {
    jwpController.view?.frame = view.bounds
    jwpController.view?.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    view.addSubview(jwpController.view!)
    if let sv = statsView { view.bringSubviewToFront(sv) }
  }
  
  private func play() {} // Auto started
  
  deinit {
    dnaClient?.stop()
  }
}
