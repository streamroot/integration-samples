# Lumen Delivery Client plugin for AVPlayer

Holds AVPlayer plugin for Mesh and CDN Load Balancer products.
This README holds public usage.
For internal/custom usage, see [this](docs/README.md).

## Prerequisites

To integrate this plugin, we need:

- A valid delivery client key. It is available in the Account section of your dashboard
- The Bundle Identifier of your application needs to have been allowed by our team
- Plugin Framework installed

## Framework installation

The plugin can be used through package managers (cocoapods/carthage) or directly added to a project by cloning this repository. This sections covers pods and carthage.

### Cocoapods

Mesh and CDN Load Balancer are published to two different pods. 
Depending on the product you need, add the following line to your Podfile for your target.

For Mesh :
```ruby
target 'MyApp' do
  use_frameworks!
  pod 'LumenMeshAVPlayerPlugin'
end
```
For CDN Load Balancer :
```ruby
target 'MyApp' do
  use_frameworks!
  pod 'LumenCDNLoadBalancerAVPlayerPlugin'
end
```

Then, execute `pod install`

### Carthage

TODO Carthage

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

### Set the DeliveryClient key
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
// For Mesh
#import LumenAVMeshPlugin

// For CDN Load Balancer
#import LumenAVOrchestratorPlugin
```

### SDK Initialization

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

### Using the plugin for your url

The plugin automatically links your player with our SDK. It uses a restricted Builder pattern.
At the end of the construction it sets the right AVPlayerItem on the AVPlayer instance.
Our SDKs are using a proxy which means the url AVPlayer is working with is not your original url. 
The final url can be found in a field of the plugin object : `plugin.finalUri`.

**Smallest usage :**

```swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .start()
```

In the previous example, the plugin is in charge of :
- creating an AVPlayer instance
- setting the AVPlayerItem with the correct url
- creating our SDK
- linking our SDK with the player
- starting our SDK

You are still responsible for :
- Linking the player with your UI (`avpController.player = plugin.avPlayer`)
- Starting the playback (`plugin.avPlayer.play()`)

Make sure you keep a strong reference to the plugin in your UIViewController.

**Advanced :**

You may prefer to give us your own AVPlayer :

```swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .avPlayer(MY_AVPLAYER)
      .start()
```

## Additional options

You can pass additional options during the creation of a `LMDeliveryClientPlugin`

### Mesh

<details><summary>Mesh</summary>

````swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .meshOptions { o in
        /*
          * Set Mesh property
          *
          * param: String
          */
        o.meshProperty("MY_PROPERTY")
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
      }.start()
````
</details>

### CDN Load Balancer

<details><summary>CDN Load Balancer</summary>

````swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .orchestratorOptions { o in
        /*
          * Set Orchestrator property
          *
          * param: String
          */
        o.orchestratorProperty("MY_PROPERTY")
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
          * Set a proxy server
          * Allows the use of a proxy server in the middle
          * Format is host:port
          *
          * params: String
          */
        o.proxyServer("MY_PROXY_HOST:PORT")
      }.start()
````
</details>

## How to investigate? Make sure the integration is working?

### Enable logs
By default the log level is set to `OFF`, it can be overriden during the `LMDeliveryClientPlugin` creation:
````swift
plugin = LMDeliveryClientPlugin.newBuilder(uri: manifestUrl)
      .createAVPlayer()
      .meshOptions { o in // OR .orchestratorOptions { o in
        o.logLevel(.trace)
      }.start()
````

### StatsView
A helper method is available to display various Mesh/CDN Load Balancer related stats on a specified UIView.

````swift
// The implementer is in charge of creating the view and to displaying it on top of the player controller/layer
plugin.displayStatsView(someView!)
````