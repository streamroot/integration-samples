# CDN Load Balancer SDK Integration for iOS, iPadOS and tvOS

## Prerequisite
To integrate the CDN Load Balancer SDK, we need:
1. A valid Delivery Client Key (formerly Streamroot Key). It is available in the Account section of your dashboard.
2. The CDN Load Balancer SDK Framework installed.

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` Delivery Client Key. If you do not have one, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/cdn-load-balancer.html). In the following tutorial, every mention to the Delivery Client Key will use the `<delivery-client-key>` placeholder.

**Not into Tutorials?** Take a look at our [sample app](https://github.com/streamroot/integration-samples/tree/master/cdn-load-balancer/ios/AVPlayerCDNLoadBalancer)

## Framework installation
The CDN Load Balancer SDK is delivered as an Xcode framework and is available on [Cocoapods](https://cocoapods.org/) and [Carthage](https://github.com/Carthage/Carthage#quick-start).

### Cocoapods
To get the SDK via cocoapods, add `pod 'LumenOrchestratorSDK'` to your podfile like this:
```
target 'MyApp' do
  use_frameworks!
  pod 'LumenOrchestratorSDK'
end
```

Then, execute `pod install`

### Carthage
To get the SDK via Carthage, add a dependency on `LumenOrchestratorSDK` like this:
```
binary "https://sdk.streamroot.io/ios/LumenOrchestratorSDK.json"
```

Then, execute `carthage update --use-xcframeworks`

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

First, import the SDK:
```swift
import LumenOrchestratorSDK
```

### 1. SDK Initialization
Initialize the CDN Load Balancer SDK from the `AppDelegate`

```swift
@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    /*
     * If you can not add your Delivery Client Key in Info.plist
     * Call instead: LMDeliveryClient.initializeApp(withDeliveryKey: "<delivery-client-key>")
     */
    LMDeliveryClient.initializeApp()
    ...
  }

  ...
}
```

### 2. Bridge between AVPlayer and the `LMDeliveryClient`

In order to work correctly, the SDK instance uses a `PlayerInteractor`.

It is the component in charge of the interactions between the player and the SDK. It monitors Quality of Service (QoS) metrics and allows the SDK to behave accordingly.

To feed the SDK properly, this class needs to inherit from `LMPlayerInteractorBase` and follow these requirements:
* The `super.playbackErrorOccurred()` method must be called whenever an error occurs.
* The `super.updateDroppedFrameCount()` method must be called with the new number of frame dropped.
* The `playerStateDidChange(newState)` method must be notified of each player state change.
* The `trackSwitchOccurred()` method must be called when the player changes the current track.

The remaining methods should not be implemented as they are not used for CDN Load Balancer:
* The `playbackTime() -> Double` method should return the current playback time since the beginning in milliseconds.
* The `bufferHealth() -> Double` should return the duration it is possible to play starting from the playback position using what has been buffered.
* The `bufferTarget() 0> Double` should return the target duration the player tries to have buffered at any time.
* The `setBufferTarget(target: Double)` should set the target duration the player should try to have buffered at any time.
* The `setEstimatedBandwidth(bps: NSNumber?)` should force the bandwidth estimate of the player to the given value.

When integrating the SDK, you are free to implement this component but we provide an implementation example for AVPlayer in [PlayerInteractor.swift](AVPlayerCDNLoadBalancer/PlayerInteractor.swift).

### 3. Instantiate a `LMDeliveryClient`

Now that the SDK is initialized, you are able to create `LMDeliveryClient` instances. They can be configured pretty easily as such:

```swift
func createDeliveryClient() -> LMDeliveryClient {
  return LMDeliveryClientBuilder.clientBuilder()
         /*
          * Set the player interactor to use
          * Check the bridge section to know more
          *
          * param: an instance of a class subclassing LMPlayerInteractorBase.
          */
         .playerInteractor(PlayerInteractor())
         /*
          * Build a LumenDeliveryClient instance
          *
          * param: String. The video stream url
          */
         .build(url)
}
```

**Note**: `PlayerInteractor` is referencing the bridge class from step 2, depending of your implementation the naming can differ from our example, but, it **must** subclass `LMPlayerInteractorBase`

### 4. Start the SDK instance and get the final url

Calling `start()` on the `LMDeliveryClient` instance will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```swift
var deliveryClient = createDeliveryClient()
deliveryClient.start();

guard let deliveryUrl = deliveryClient.localManifestURL else {
  fatalError("Local url manifest could not be generated")
}

let playerItem = AVPlayerItem(asset: AVURLAsset(url: deliveryUrl))
```

### 5. Play the stream

Start the player with the new url provided by the `LMDeliveryClient` and link it with the `PlayerInteractor`:
```swift
let player = AVPlayer(playerItem: playerItem)
playerInteractor.linkPlayer(player!, playerItem: playerItem)

player?.play()
```

**Note**: The interactor is linked with a specific player AND a specific player item. The same object should be used inside AVPlayer and inside the linkPlayer() method.

### 6. Stop the SDK
Make sure to stop the `LMDeliveryClient` once you are done with the video. We recommend to put it in the `viewDidDisappear(:bool)` or any callback terminating the player lifecycle.
```swift
self.deliveryClient.stop()
```

## Additional options
You can pass additional options during the creation of a `LMDeliveryClient`

```swift
func createDeliveryClient() -> LMDeliveryClient {
  return LMDeliveryClientBuilder.clientBuilder()
         /*
          * Set the player interactor to use
          * Check the bridge section to know more
          *
          * param: an instance of a class subclassing LMPlayerInteractorBase.
          */
         .playerInteractor(PlayerInteractor())
         /*
          * Set Orchestrator property
          *
          * param: String
          */
         .orchestratorProperty("MY_PROPERTY")
         /*
          * Set the Delivery Client Key
          * Is only required if it was not set in Info.plist
          * Will override the Info.plist DeliveryClientKey value
          *
          * param: String
          */
         .deliveryClientKey("<delivery-client-key>")
         /*
          * Set the content id
          * A string that identifies your content
          * By default, it uses the stream url
          *
          * param: String
          */
         .contentId("MY_CONTENT_ID")
         /*
          * Set the log level
          * See the "How to investigate?" to know more
          *
          * param: LumenLogLevel
          */
         .logLevel(.info)
          /*
           * Set latency in seconds
           *
           * param: Int
           */
         .latency(3)
         /*
          * Set a proxy server
          * Allows the use of a proxy server in the middle
          * Format is host:port
          *
          * params: String
          */
         .proxyServer("MY_PROXY_HOST:PORT")
         /*
          * Build a LumenDeliveryClient instance
          *
          * param: String. The video stream url
          */
         .build(url)
}
```

## Troubleshooting

### Enable logs
By default the log level is set to `OFF` for initalization, it can be turned on when building an instance of `LMDeliveryClient`:
```swift
func createDeliveryClient() -> LMDeliveryClient {
  return LMDeliveryClientBuilder.clientBuilder()
         .playerInteractor(PlayerInteractor())
         .logLevel(.warning)
         .build(url)
}
```
**Notes:**
* Valid value for `LMLogLevel` are `trace`, `critical`, `error`, `warning`, `info`, `debug` or `off`.

### StatsView
A helper method is available to display various CDN Load Balancer related stats on a specified UIView.

```swift
// The implementer is in charge to create the view and to display it on top of the player controller/layer
self.deliveryClient.displayStatWiew(someView!)
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
