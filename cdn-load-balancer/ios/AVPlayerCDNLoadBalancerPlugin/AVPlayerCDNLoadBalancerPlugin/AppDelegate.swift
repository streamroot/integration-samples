//
//  AppDelegate.swift
//  AVPlayerOrchestrator
//

import UIKit
import LumenCDNLoadBalancerAVPlayerPlugin

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    LMDeliveryClientPlugin.initializeApp()
    return true
  }
}
