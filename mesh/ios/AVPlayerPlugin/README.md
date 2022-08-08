# Mesh Delivery Plugin Integration for iOS, iPadOS and tvOS

## Prerequisite
To integrate Mesh SDK, we need:
1. A valid delivery client key. It is available in the Account section of your dashboard
2. Mesh SDK Framework installed

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` delivery client key. If you do not have a delivery client key, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/mesh-delivery.html).

## Framework installation
Mesh SDK is delivered as an Xcode framework and is available on [Cocoapods](https://cocoapods.org/) and [Carthage](https://github.com/Carthage/Carthage#quick-start).

### Cocoapods
To get the SDK via cocoapods, add `pod 'LumenMeshSDK'` to your podfile like this:
````
target 'MyApp' do
  use_frameworks!
  pod 'LumenMeshAVPlayerPlugin'
end
````

Then, execute `pod install`

### Carthage
Add the Mesh Delivery Plugin dependency to the Cartfile, more info on [Carthage installation](https://github.com/Carthage/Carthage#quick-start) method.
```
github "streamroot/lumen-delivery-client-plugin-avplayer" "VERSION"
```

Since the plugin uses pods, after carthage checkout you need to run pod install inside the "lumen-delivery-client-plugin-avplayer" repository before continuing with carthage update.

## Configuration

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

We strongly recommand to set the delivery client key in `Info.plist`. However, if not possible, it is also possible to pass your delivieryClientKey during the initialization step.

## Code integration

First, import the SDK:
```swift
import LumenMeshAVPlayerPlugin
```

### 1. Plugin Initialization
Initialize the Delivery SDK from the `AppDelegate`

```swift
@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    /*
     * If you can not add your deliveryClientKey in Info.plist
     * Call instead: LMDeliveryClientPlugin.initializeApp(withDeliveryKey: "MY_DELIVERY_CLIENT_KEY")
     */
    LMDeliveryClientPlugin.initializeApp()
    ...
  }

  ...
}
```

### 2. Instanciate a `LMDeliveryClientPlugin` an start it

Now the SDK is initialized, you are able to create `LMDeliveryClientPlugin` instances.

Once your AVPlayer Controller is up and ready, you will need to configure your `LMDeliveryClientPlugin` instance:

```swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .start()
```

### 3. Set AVPlayer and play the stream

Unless you gave your own, the plugin created an AVPlayer, it also automatically set the correct AVPlayerItem.

Set player to AVPController then play
```swift
avpController.player = plugin.avPlayer
plugin.avPlayer.play()
```

Hopefully, the video is playing as expected, congrats!

### 4. Stop the SDK
Make sure to stop the plugin once you are done with the video. We recommend to put it in the `viewDidDisappear(:bool)` or any callback terminating the player lifecycle.
```swift
plugin?.stop()
```

## Additional options
You can pass additional options during the creation of a `LMDeliveryClientPlugin`

````swift
func createPlugin() -> LMDeliveryClientPlugin {
  return LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .meshOptions({ o in
         /*
          * Set Mesh property
          *
          * param: String
          */
         o.meshProperty("MY_PROPERTY")
         /*
          * Set the DeliveryClientKey
          * Is only required if it was not set in AndroidManifest.xml
          * Will override the Info.plist DeliveryClientKey value
          *
          * param: String
          */
         o.deliveryClientKey("MY_DELIVERY_CLIENT_KEY")
         /*
          * Set the content id
          * A string that identifies your content
          * By default, it uses the stream url
          *
          * param: String
          */
         o.contentId("MY_CONTENT_ID")
         /*
          * Set the log level
          * See the "How to investigate?" to know more
          *
          * param: LumenLogLevel
          */
         o.logLevel(.info)
          /*
           * Set latency in seconds
           *
           * param: Int
           */
         o.latency(3)
         /*
          * Set a proxy server
          * Allows the use of a proxy server in the middle
          * Format is host:port
          *
          * params: String
          */
         o.proxyServer("MY_PROXY_HOST:PORT")
         /*
          * Build a LumenDeliveryClient instance
          *
          * param: String. The video stream url
          */
      })
      .start()
}
````

## How to investigate? Make sure the integration is working?

### Enable logs
By default the log level is set to `OFF`, it can be override during a `LMDeliveryClientPlugin` creation:
````swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .meshOptions({ o in
        o.logLevel(.warning)
      })
      .start()
````

### StatsView
A helper method is available to display various Mesh related stats on a specified UIView.

````swift
// The implementer is in charge to create the view and to display it on top of the player controller/layer
plugin.displayStatsView(someView!)
````
**Note**: This sample app is using [AVPlayerViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller), on iOS we are adding the view as a subview of `AVPlayerViewController`. On tvOS, we suggest to use [customOverlayViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/3229856-customoverlayviewcontroller) instead.
