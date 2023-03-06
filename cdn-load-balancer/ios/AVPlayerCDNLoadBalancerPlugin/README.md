# CDN Load Balancer Plugin Integration for iOS, iPadOS and tvOS

## Prerequisite
To integrate the CDN Load Balancer plugin for AVPlayer, we need:
1. A valid Delivery Client Key (formerly Streamroot Key). It is available in the Account section of your dashboard.
2. CDN Load Balancer plugin for AVPlayer Framework installed.

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` Delivery Client Key. If you do not have one, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/cdn-load-balancer.html). In the following tutorial, every mention to the Delivery Client Key will use the `<delivery-client-key>` placeholder.

**Not into Tutorials?** Take a look at our [sample app](./) 

## Framework installation
CDN Load Balancer plugin for AVPlayer is delivered as an Xcode framework and is available on [Cocoapods](https://cocoapods.org/) and [Carthage](https://github.com/Carthage/Carthage#quick-start).

### Cocoapods
To get the SDK via cocoapods, add `pod 'LumenCDNLoadBalancerAVPlayerPlugin'` to your podfile like this:
```
target 'MyApp' do
  use_frameworks!
  pod 'LumenCDNLoadBalancerAVPlayerPlugin'
end
```

Then, execute `pod install`

### Carthage
Add the CDN Load Balancer Plugin dependency to the Cartfile (more info on [Carthage installation](https://github.com/Carthage/Carthage#quick-start) method).
```
github "streamroot/lumen-delivery-client-plugin-avplayer" "VERSION"
```

Since the plugin uses pods, after carthage checkout you need to run the `pod install` command inside the "lumen-delivery-client-plugin-avplayer" repository before continuing with carthage update.

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

### Set the Client Delivery Key
In the Project Navigator, right click on "Info.plist", and "Open as" → "Source Code".
Add the following lines with the right parameters values.

```xml
<key>DeliveryClient</key>
<dict>
  <key>Key</key>
  <string><delivery-client-key></string>
</dict>
```

We strongly recommend to set the Delivery Client Key in `Info.plist`. However, if not possible, it is also possible to pass it during the initialization step.

## Code integration

First, import the Plugin:
```swift
import LumenCDNLoadBalancerAVPlayerPlugin
```

### 1. Plugin Initialization
Initialize the CDN Load Balancer plugin from the `AppDelegate`

```swift
@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    /*
     * If you can not add your Delivery Client Key in Info.plist
     * Call instead: LMDeliveryClientPlugin.initializeApp(withDeliveryKey: "<delivery-client-key>")
     */
    LMDeliveryClientPlugin.initializeApp()
    ...
  }

  ...
}
```

### 2. Instantiate a `LMDeliveryClientPlugin` and start it

Now that the plugin is initialized, you are able to create `LMDeliveryClientPlugin` instances. It can be configured pretty easily as such:


```swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .start()
```

### 3. Set AVPlayer and play the stream

Unless you gave your own, the plugin created an AVPlayer, it also automatically set the correct `AVPlayerItem`.

Set player to `AVPController` then play
```swift
avpController.player = plugin.avPlayer
plugin.avPlayer.play()
```

### 4. Stop the SDK
Make sure to stop the plugin once you are done with the video. We recommend to put it in the `viewDidDisappear(:bool)` or any callback terminating the player lifecycle.
```swift
plugin?.stop()
```

## Additional options
You can pass additional options during the creation of a `LMDeliveryClientPlugin`

```swift
func createPlugin() -> LMDeliveryClientPlugin {
  return LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .orchestratorOptions({ o in
         /*
          * Set Orchestrator property
          *
          * param: String
          */
         o.orchestratorProperty("MY_PROPERTY")
         /*
          * Set the Delivery Client Key
          * Is only required if it was not set in Info.plist
          * Will override the Info.plist DeliveryClientKey value
          *
          * param: String
          */
         o.deliveryClientKey("<delivery-client-key>")
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
```

## Troubleshooting

### Enable logs
By default the log level is set to `OFF` for initalization, it can be turned on when building an instance of `LMDeliveryClientPlugin`:
```swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .orchestratorOptions({ o in
        o.logLevel(.warning)
      })
      .start()
```

### StatsView
A helper method is available to display various CDN Load Balancer related stats on a specified UIView.

```swift
// The implementer is in charge to create the view and to display it on top of the player controller/layer
plugin.displayStatsView(someView!)
```
**Note**: This sample app is using [AVPlayerViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller), on iOS we are adding the view as a subview of `AVPlayerViewController`. On tvOS, we suggest to use [customOverlayViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/3229856-customoverlayviewcontroller) instead.

## Interactor capabilities
The SDK is player agnostic. All communication between the player and the delivery client that are player specific are implemented in a PlayerInteractor class.
Each player has a different API that the SDK tries to use at its full potential in order to monitor and maximize the Quality of Service.

**States**
* INVALID : Unused
* IDLE : OK
* PLAYING : OK
* PAUSED : OK
* SEEKING : OK
* REBUFFERING : OK
* ENDED : OK

**Misc**
* Playback time : OK
* Buffer health : OK
* Track switch : Experimental
* Player error : OK
* Frame drop : OK
