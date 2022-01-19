# Mesh SDK Integration

## Prerequisite
To integrate Mesh SDK, we need:
1. A valid streamroot key. It is available in the Account section of your dashboard.
2. Mesh SDK Framework installed.
## Framework installation
Mesh SDK is delivered as an Xcode framework and is available on [Cocoapods](https://cocoapods.org/) and [Carthage](https://github.com/Carthage/Carthage#quick-start).

### Cocoapods
To get the SDK via cocoapods, add `pod 'LumenMeshSDK'` to your podfile like this:
````
target 'MyApp' do
  use_frameworks!
  pod 'LumenMeshSDK'
end
````

Then, excute `pod install`.

### Carthage
To get the SDK via Carthage, add a dependencie on `LumenMeshSDK` like this:
````
binary "https://sdk.streamroot.io/ios/LumenOrchestratorSDK.json"
````

Then, execute `carthage update --use-xcframeworks`.

## Getting started

### Disable App Transport security
In the Project Navigator, right click on "Info.plist", and "Open as" → "Source Code".
Add the following lines with the right parameters values.

```xml
<key>NSAppTransportSecurity</key>
<dict>
	<key>NSAllowsArbitraryLoads</key>
	<true/>
</dict>
```

### Set the ClientDeliveryKey
In the Project Navigator, right click on "Info.plist", and "Open as" → "Source Code".
Add the following lines with the right parameters values.

```xml
<key>DeliveryClient</key>
<dict>
  <key>Key</key>
  <string>customerKey</string>
</dict>
```

We strongly recommand to set the streamroot key in `Info.plist`. However, if not possible, it will be still possible to set it programmatically later.

## Code integration

First, import the SDK:
```swift
#import LumenMeshSDK
```

### 1 - Initialize the Delivery SDK from the App delegate [application(_:didFinishLaunchingWithOptions:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1622921-application)

```swift
 LMDeliveryClient.initializeApp()
```

### 2 - Build and start the DeliveryClient
Declare the deliverClient as an instance variable:
```
var deliveryClient: LMDeliveryClient?
```

Build the delivery client with the mandatory fields which are the `playerIntertactor` and the `manifestUrl`
```swift
deliveryClient = LMDeliveryClientBuilder.clientBuilder()
    .playerInteractor(<#playerInteractor#>)
    .contentId(<#string#>)
    .meshProperty(<#string#>)
    // To overwrite the delivery client key in Info.plist
    // .deliveryClientKey(<#string#>)
    .build(<#manifestUrl#>)
```
The playerInteractor is a component in charge of the interactions with the player. This is essential to monitor the Quality of Service of the current playback session.

You can find an implementation example in [AVPlayerMesh/PlayerInteractor.swift](AVPlayerOrchestrator/PlayerInteractor.swift).

Start the delivery client:
````
deliveryClient?.start();
````

### 3 - Play the stream

Start the player with the new url provided by the delivery client.
```swift
guard let deliveryUrl = deliveryClient?.localManifestURL else {
  print("Local url manifest could not be generated")
  return
}

let playerItem = AVPlayerItem(asset: AVURLAsset(url: deliveryUrl))

let player = AVPlayer(playerItem: playerItem)

// Link the player interactor with the player
playerInteractor.linkPlayer(player!)

player?.play()
```

Hopefully, the video is playing as expected, congrats!

### Stop the SDK
Make sure to stop the delivery client, we recommend to put it in the `viewDidDisappear(:bool)` or any callback closing the player.
```swift
self.deliveryClient?.stop()
```

## How to investigate? Make sure the integration is working?
A helper method is available to display various Mesh related stats on a specified UIView.

````swift
// The implementer is in charge to create the view and to display it on top of the player controller/layer
self.deliveryClient?.displayStatWiew(someView!)
````
Note: This sample app is using [AVPlayerViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller), on iOS we are adding the view as a subview of `AVPlayerViewController`. On tvOS, we suggest to use [customOverlayViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/3229856-customoverlayviewcontroller).
