# Orchestrator SDK Integration
 
## Getting started

### 1 - Installation (Carthage or Cocoapods)

#### Cocoapods
Get the SDK via [cocoapods](https://cocoapods.org/) -> `pod install` in the current directory.

```
target 'MyApp' do
  use_frameworks!
  pod 'LumenOrchestratorSDK'
end
```

#### Carthage

Add the orchestrator dependency to the Cartfile, more info on [Carthage installation](https://github.com/Carthage/Carthage#quick-start) method.
```
binary "https://sdk.streamroot.io/ios/LumenOrchestratorSDK.json"
```

### 2 - Set the ClientDeliveryKey
In the Project Navigator, right click on "Info.plist", and "Open as" → "Source Code".
Add the following lines with the right parameters values.

```xml
<key>DeliveryClient</key>
<dict>
  <key>Key</key>
  <string>customerKey</string>
</dict>
```

### 3 - Disable App Transport security
In the Project Navigator, right click on "Info.plist", and "Open as" → "Source Code".
Add the following lines with the right parameters values.

```xml
<key>NSAppTransportSecurity</key>
<dict>
	<key>NSAllowsArbitraryLoads</key>
	<true/>
</dict>
```

### 4 - Importing the SDK
The SDK has been implemented in Objective-C, so to import it in a swift project a bridge-header is needed. [More info](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis).

```
#import <LumenOrchestratorSDK/LumenOrchestratorSDK.h>
```

## Code integration

### 1 - Initialize the Delivery SDK from the App delegate [application(_:didFinishLaunchingWithOptions:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1622921-application)

```
 LMDeliveryClient.initializeApp()
```

### 2 - Build and start the DeliveryClient
Declare the deliverClient as an instance variable:
```
var deliveryClient: LMDeliveryClient?
```

Build the delivery client with the mandatory fields which are the `playerIntertactor`, `orchestratorProperty`, and the `manifestUrl`
```swift
deliveryClient = LMDeliveryClientBuilder.clientBuilder()
    .playerInteractor(<#playerInteractor#>)
    .contentId(<#string#>)
    .orchestratorProperty(<#string#>)   
    .build(<#manifestUrl#>)
deliveryClient?.start()
```


** PlayerInteractor**
The playerInteractor is a component in charge of the interactions with the player. This is essential to monitor the Quality of Service of the current playback session.
In this example, the `PlayerIntetactor` implements `LMPlayerIntetactorBase` and serves as a Helper class of the sample app project, with a reference to the player -> [More info](AVPlayerOrchestrator/PlayerInteractor.swift).

The player Interactor is a class which implements `LMPlayerInteractorBase` and raises events with the associated `super` methods.

Example:
- When the playback starts, the `.playing` event is raised as following:
```
 super.playerStateDidChange(.playing)
```

### 3 - Play the stream
Stat the player with the new url provided by the delivery client.
```swift
guard let deliveryUrl = deliveryClient?.localManifestURL else {
  print("Local Url manifets could not be generated")
  return
}
    
let playerItem = AVPlayerItem(asset: AVURLAsset(url: deliveryUrl))
player = AVPlayer(playerItem: playerItem)
/*
* 
* We are calling here linkPlayer to start the playerInteractor
* 
*/
playerInteractor.linkPlayer(player!)
// Call the player play() method
player?.play()
```

### Stop the SDK
Make sure to stop the delivery client, we recommend to put it in the `viewDidDisappear(:bool)` or any callback closing the player.
```swift 
self.deliveryClient?.stop()
```

### Display stats

A helper method is provided byt the client to display the stats on a defined `UIView`.
```swift 
 self.deliveryClient?.displayStatWiew(someView!)
```
Note: In this sample app project, we are using `contentOverlayView` a subview of `AVPlayerViewController`.
