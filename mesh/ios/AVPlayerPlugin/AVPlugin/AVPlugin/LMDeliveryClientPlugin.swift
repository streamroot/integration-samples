//
// Copyright © 2022 Streamroot. All rights reserved.
//
// This unpublished material is proprietary to Streamroot. All rights reserved.
//
// The methods and techniques described herein are considered trade secrets
// and/or confidential. Reproduction or distribution, in whole or in part,
// is forbidden except by express written permission of Streamroot.

import Foundation
import AVFoundation
#if MESH
import LumenMeshSDK
#else
import LumenOrchestratorSDK
#endif

public protocol AVPlayerBuilder {
  func createAVPlayer() -> AVPlayerItemBuilder
  func avPlayer(_ avPlayer: AVPlayer) -> AVPlayerItemBuilder
}

public protocol AVPlayerItemBuilder : ProductBuilder {
  func disableAVPlayerItemAutoSet() -> ProductBuilder
}

public class LMProductOptions {
  private let sdkOptions: LMOptions
  fileprivate init(sdkOptions: LMOptions) {
    self.sdkOptions = sdkOptions
  }
  
  @discardableResult public func contentId(_ contentId: String) -> LMProductOptions {
    sdkOptions.contentId(contentId)
    return self
  }
  @discardableResult public func deliveryClientKey(_ deliveryClientKey: String) -> LMProductOptions {
    sdkOptions.deliveryClientKey(deliveryClientKey)
    return self
  }
  @discardableResult public func logLevel(_ logLevel: LMLogLevel) -> LMProductOptions {
    sdkOptions.logLevel(logLevel)
    return self
  }
  @discardableResult public func proxyServer(_ proxyServer: String) -> LMProductOptions {
    sdkOptions.proxyServer(proxyServer)
    return self
  }
#if MESH
  @discardableResult public func meshProperty(_ meshProperty: String) -> LMProductOptions {
    sdkOptions.meshProperty(meshProperty)
    return self
  }
  @discardableResult public func latency(_ latency: Int) -> LMProductOptions {
    sdkOptions.latency(latency)
    return self
  }
#else
  @discardableResult public func orchestratorProperty(_ orchestratorProperty: String) -> LMProductOptions {
    sdkOptions.orchestratorProperty(orchestratorProperty)
    return self
  }
#endif
}

public protocol ProductBuilder : PluginFinisher {
#if MESH
  func meshOptions(_ optionCallback: (_ o: LMProductOptions)->()) -> PluginFinisher
#else
  func orchestratorOptions(_ optionCallback: (_ o: LMProductOptions)->()) -> PluginFinisher
#endif
}

public protocol PluginFinisher {
  func build() -> LMDeliveryClientPlugin
  func start() -> LMDeliveryClientPlugin
  func start(completion: @escaping ()->()) -> LMDeliveryClientPlugin
}

public struct LMDeliveryClientPlugin {
  public static func newBuilder(uri: URL) -> AVPlayerBuilder {
    return Builder(uri: uri)
  }
  
  class Builder : AVPlayerBuilder, AVPlayerItemBuilder, ProductBuilder, PluginFinisher {
    
    private let originalUri: URL
    
    private var avPlayer: AVPlayer!
    private var autosetPlayerItem: Bool = true
    
    private var intermediateData: (
      interactor: LMAVPlayerInteractor,
      deliveryClient: LMDeliveryClient
    )!
    
    fileprivate init(uri: URL) {
      self.originalUri = uri
    }
    
    // AV creation
    func createAVPlayer() -> AVPlayerItemBuilder {
      self.avPlayer = AVPlayer()
      return self
    }
    
    func avPlayer(_ avPlayer: AVPlayer) -> AVPlayerItemBuilder {
      self.avPlayer = avPlayer
      return self
    }
    
    // Disable autoset AV item
    func disableAVPlayerItemAutoSet() -> ProductBuilder {
      self.autosetPlayerItem = false
      return self
    }
    
    private func configureProduct(_ optionCallback: (_ o: LMProductOptions)->()) {
      let interactor = LMAVPlayerInteractor()
      let options = LMDeliveryClientBuilder.clientBuilder().playerInteractor(interactor)
      
      // Configure DC
      optionCallback(LMProductOptions(sdkOptions: options))
      
      // Create DC
      let deliveryClient = options.build(originalUri)
      
      // Link DC with player
      if autosetPlayerItem {
        avPlayer.replaceCurrentItem(with: AVPlayerItem(url: deliveryClient.localManifestURL ?? originalUri))
      }
      interactor.linkPlayer(avPlayer)
      
      intermediateData = (interactor, deliveryClient)
    }
    
#if MESH
    // Mesh
    func meshOptions(_ optionCallback: (_ o: LMProductOptions)->()) -> PluginFinisher {
      configureProduct(optionCallback)
      return self
    }
#else
    // Orchestrator
    func orchestratorOptions(_ optionCallback: (_ o: LMProductOptions)->()) -> PluginFinisher {
      configureProduct(optionCallback)
      return self
    }
#endif
    
    // Finisher
    func build() -> LMDeliveryClientPlugin {
      if (intermediateData == nil) {
#if MESH
        let _ = meshOptions { o in }
#else
        let _ = orchestratorOptions { o in }
#endif
      }
      return LMDeliveryClientPlugin(originalUri: originalUri, avPlayer: avPlayer, interactor: intermediateData.interactor, deliveryClient: intermediateData.deliveryClient)
    }
    
    func start() -> LMDeliveryClientPlugin {
      let plugin = build()
      let _ = plugin.start()
      return plugin
    }
    
    func start(completion: @escaping () -> ()) -> LMDeliveryClientPlugin {
      let plugin = build()
      let _ = plugin.start(completion)
      return plugin
    }
  }
  
  private let deliveryClient: LMDeliveryClient?
  private let interactor: LMAVPlayerInteractor
  public let originalUri: URL
  public let finalUri: URL
  public let avPlayer: AVPlayer
  
  fileprivate init(originalUri: URL, avPlayer: AVPlayer, interactor: LMAVPlayerInteractor, deliveryClient: LMDeliveryClient?) {
    self.originalUri = originalUri
    self.avPlayer = avPlayer
    self.interactor = interactor
    self.deliveryClient = deliveryClient
    self.finalUri = deliveryClient?.localManifestURL ?? originalUri
  }
  
  @discardableResult public func start() -> LMDeliveryClientPlugin {
    deliveryClient?.start()
    return self
  }
  
  @discardableResult public func start(_ completion: @escaping ()->()) -> LMDeliveryClientPlugin {
    deliveryClient?.start(completion: completion)
    return self
  }
  
  @discardableResult public func displayStatsView(_ view: UIView) -> LMDeliveryClientPlugin {
    deliveryClient?.displayStatView(view)
    return self
  }
  
  @discardableResult public func toggleStatsView() -> LMDeliveryClientPlugin {
    deliveryClient?.toggleStatView()
    return self
  }
  
  @discardableResult public func stop() -> LMDeliveryClientPlugin {
    deliveryClient?.stop()
    return self
  }
  
  @discardableResult public func stop(_ completion: @escaping ()->()) -> LMDeliveryClientPlugin {
    deliveryClient?.stop(completion: completion)
    return self
  }
}

extension LMDeliveryClientPlugin {
  public static func initializeApp(completionHandler: ((Bool)->())? = nil) {
    LMDeliveryClient.initializeApp(completionHandler: completionHandler)
  }
  
  public static func initializeApp(withDeliveryKey: String, completionHandler: ((Bool)->())? = nil) {
    LMDeliveryClient.initializeApp(withDeliveryKey: withDeliveryKey, completionHandler: completionHandler)
  }
}
