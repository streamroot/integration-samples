//
//  ViewController.swift
//  AVPlayerMesh

import UIKit
import AVKit

class MainViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
  }
  
  @IBAction func play(_ sender: Any) {
    let playerViewController = PlayerViewController()
    playerViewController.modalPresentationStyle = .fullScreen
    self.present(playerViewController, animated: true);
  }
}

