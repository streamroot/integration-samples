# Mesh Delivery SDK Integration for iOS, iPadOS and tvOS

## Prerequisite
To integrate the Mesh Delivery SDK, we need:
1. A valid Delivery Client Key (formerly Streamroot Key). It is available in the Account section of your dashboard.
2. The Mesh Delivery SDK Framework installed.

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` Delivery Client Key. If you do not have one, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/mesh-delivery.html). In the following tutorial, every mention to the Delivery Client Key will use the `<delivery-client-key>` placeholder.

## Framework installation
The Mesh Delivery SDK is delivered as an Xcode framework and is available on [Cocoapods](https://cocoapods.org/) and [Carthage](https://github.com/Carthage/Carthage#quick-start).

### Cocoapods
To get the SDK via cocoapods, add `pod 'LumenMeshSDK'` to your podfile like this:
```
target 'MyApp' do
  use_frameworks!
  pod 'LumenMeshSDK'
end
```

Then, execute `pod install`

### Carthage
To get the SDK via Carthage, add a dependency on `LumenMeshSDK` like this:
```
binary "https://sdk.streamroot.io/ios/LumenMeshSDK.json"
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
import LumenMeshSDK
```

### 1. SDK Initialization
Initialize the Mesh Delivery SDK from the `AppDelegate`

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

When integrating the SDK, you are free to implement this component but we provide an implementation example for AVPlayer in [AVPlayerMesh/PlayerInteractor.swift](AVPlayerMesh/AVPlayerMesh/PlayerInteractor.swift).

### 3. Instantiate a `LMDeliveryClient`

Now that the SDK is initialized, you are able to create `LMDeliveryClient` instances.

Once your AVPlayer is up and ready, you will need to configure your `LMDeliveryClient` instance:

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

While starting, the SDK will generate a new URL to leverage Mesh Delivery streaming capabilities. Once it is started, **make sure** to retrieve the final URL and instantiate an `AVPlayerItem` with it.

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
playerInteractor.linkPlayer(player!)

player?.play()
```

Hopefully, the video is playing as expected, congrats!

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
          * Set Mesh property
          *
          * param: String
          */
         .meshProperty("MY_PROPERTY")
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
By default the log level is set to `OFF`, it can be override during a `LMDeliveryClient` creation:
```swift
func createDeliveryClient() -> LMDeliveryClient {
  return LMDeliveryClientBuilder.clientBuilder()
         .playerInteractor(PlayerInteractor())
         .logLevel(.warning)
         .build(url)
}
```

### StatsView
A helper method is available to display various Mesh Delivery related stats on a specified UIView.

```swift
// The implementer is in charge to create the view and to display it on top of the player controller/layer
self.deliveryClient.displayStatWiew(someView!)
```
**Note**: This sample app is using [AVPlayerViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller), on iOS we are adding the view as a subview of `AVPlayerViewController`. On tvOS, we suggest to use [customOverlayViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/3229856-customoverlayviewcontroller) instead.
