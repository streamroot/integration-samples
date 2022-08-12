# CDN Load Balancer AVPlayer plugin
 
## Getting started

### 1 - Installation (Carthage or Cocoapods)

#### Cocoapods
Get the SDK via [cocoapods](https://cocoapods.org/) -> `pod install` in the current directory.

```
target 'MyApp' do
  use_frameworks!
  pod 'LumenCDNLoadBalancerAVPlayerPlugin'
end
```

#### Carthage

Add the orchestrator dependency to the Cartfile, more info on [Carthage installation](https://github.com/Carthage/Carthage#quick-start) method.
```
github "streamroot/lumen-delivery-client-plugin-avplayer" "VERSION"
```

Since the plugin uses pods, after carthage checkout you need to run pod install inside "lumen-delivery-client-plugin-avplayer" repository before continuing with carthage update.

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

### 4 - Importing the SDK & plugin
The SDK has been implemented in Objective-C, so to import it in a swift project a bridge-header is needed. [More info](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis).

```
#import <LumenOrchestratorSDK/LumenOrchestratorSDK.h>
```

then where the plugin is needed
```
import LumenCDNLoadBalancerAVPlayerPlugin
```

## Code integration

### 1 - Initialize the Delivery SDK from the App delegate [application(_:didFinishLaunchingWithOptions:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1622921-application)

```
 LMDeliveryClientPlugin.initializeApp()
```

### 2 - Build and start the plugin
Declare the deliverClient as an instance variable:
```
var plugin: LMDeliveryClientPlugin?
```

Build the delivery client with the mandatory fields which are the `playerIntertactor`, `orchestratorProperty`, and the `manifestUrl`
```swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: <#manifestUrl)
      .createAVPlayer()
      .orchestratorOptions({ o in
        o.contentId(<#string#>)
        o.orchestratorProperty(<#string#>)
      }).start()
```

### 3 - Play the stream

An AVPlayer instance was automatically created with the correct AVPlayerItem.

Retrieve it and set it to your AVPlayerController
```
player = plugin.avPlayer
```

Start playback
```swift
plugin.avPlayer.play()
```

### Stop the plugin

Make sure to stop the plugin, we recommend to put it in the `viewDidDisappear(:bool)` or any callback closing the player.
```swift 
plugin?.stop()
```

### Display stats

A helper method is provided by the plugin to display the stats on a defined `UIView`.
```swift 
 plugin.displayStatsView(someView!)
```
Note: In this sample app project, we are using `contentOverlayView` a subview of `AVPlayerViewController`.
