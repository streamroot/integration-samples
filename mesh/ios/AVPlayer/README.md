# Mesh SDK Integration for iOS, iPadOS and tvOS

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
  pod 'LumenMeshSDK'
end
````

Then, excute `pod install`.

### Carthage
To get the SDK via Carthage, add a dependencie on `LumenMeshSDK` like this:
````
binary "https://sdk.streamroot.io/ios/LumenMeshSDK.json"
````

Then, execute `carthage update --use-xcframeworks`.

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
#import LumenMeshSDK
```

### 1. SDK Initialization
Initialize the Delivery SDK from the `AppDelegate`

```swift
@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    /*
     * If you can not add your deliveryClientKey in Info.plist
     * Call instead: LMDeliveryClient.initializeApp(withDeliveryKey: "MY_DELIVERY_CLIENT_KEY")
     */
    LMDeliveryClient.initializeApp()
    ...
  }

  ...
}
```

### 2. Bridge between AVPlayer and the DeliveryClient

In order to work perfectly, the SDK instance uses a `PlayerInteractor`.

It is a component in charge of the interactions between the player and the SDK. It monitors Quality of Service (QoS) metrics and allows the SDK to behave accordingly.

You can find an implementation example in [AVPlayerMesh/PlayerInteractor.swift](AVPlayerMesh/AVPlayerMesh/PlayerInteractor.swift).


### 3. Instanciate a `LumenDeliveryClient`

Now the SDK is initialized, you are able to create `LumenDeliveryClient` instances.

You first need to create and setup your AVPlayer instance. Then the following function shows you how to configure `LumenDeliveryClient` instances using a AVPlayer:

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

**Note**: PlayerInteractor is referencing the bridge clss from step 2, the bame may be different.

### 4. Start the SDK instance and get the final url

Calling the `start()` method on the `LMDeliveryClient` instance will start the SDK.
Once you have an up and running instance of the SDK, you must retrieve the final URL and input it to AVPlayer instead of the original one.

````swift
var deliveryClient = createDeliveryClient()
deliveryClient.start();

guard let deliveryUrl = deliveryClient.localManifestURL else {
  print("Local url manifest could not be generated")
  return
}
````

### 5. Play the stream

Start the player with the new url provided by the delivery client and link it with the player interactor:
```swift
let playerItem = AVPlayerItem(asset: AVURLAsset(url: deliveryUrl))

let player = AVPlayer(playerItem: playerItem)
playerInteractor.linkPlayer(player!)

player?.play()
```

Hopefully, the video is playing as expected, congrats!

### 6. Stop the SDK
Make sure to stop the delivery client once you are done with the video. We recommend to put it in the `viewDidDisappear(:bool)` or any callback closing the player.
```swift
self.deliveryClient.stop()
```

## Additional options
You can pass additional options when create a `LumenDeliveryClient`.

````swift
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
          * Set the DeliveryClientKey
          * Is only required if it was not set in AndroidManifest.xml
          * Will override the AndroidManifest.xml DeliveryClientKey
          *
          * param: String
          */
         .deliveryClientKey("MY_DELIVERY_CLIENT_KEY")
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
````

## How to investigate? Make sure the integration is working?

### Enable logs
By default the log level is set to `OFF`, it can be override during a `LumenDeliveryClient` creation:
````swift
func createDeliveryClient() -> LMDeliveryClient {
  return LMDeliveryClientBuilder.clientBuilder()
         .playerInteractor(PlayerInteractor())
         .logLevel(.warning)
         .build(url)
}
````

### StatsView
A helper method is available to display various Mesh related stats on a specified UIView.

````swift
// The implementer is in charge to create the view and to display it on top of the player controller/layer
self.deliveryClient.displayStatWiew(someView!)
````
Note: This sample app is using [AVPlayerViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller), on iOS we are adding the view as a subview of `AVPlayerViewController`. On tvOS, we suggest to use [customOverlayViewController](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/3229856-customoverlayviewcontroller).
