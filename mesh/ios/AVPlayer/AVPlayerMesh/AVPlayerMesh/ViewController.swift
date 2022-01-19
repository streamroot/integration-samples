//
//  ViewController.swift
//  AVPlayerMesh
//
//  Created by Mehala, Damien on 14/01/2022.
//

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
    playerViewController.modalPresentationStyle = .fullScreen
    self.present(playerViewController, animated: true);
  }
}

