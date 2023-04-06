//
//  ViewController.swift
//  AVPlayerMesh

import UIKit
import AVKit

class ViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
  }
  
  @IBAction func play(_ sender: Any) {
    let playerViewController = PlayerViewController()
    self.present(playerViewController, animated: true);
  }
}

