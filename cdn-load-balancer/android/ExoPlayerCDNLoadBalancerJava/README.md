# CDN Load Balancer SDK Integration for Android (Java)

## Prerequisite
To integrate the CDN Load Balancer SDK, we need:
* A valid Delivery Client Key (formerly Streamroot Key). It is available in the Account section of your dashboard.
* The CDN Load Balancer SDK installed.
* ExoPlayer versions supported by this sample are 2.18.1

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` Delivery Client Key. If you do not have one, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/orchestrator-delivery.html). In the following tutorial, every mention to the Delivery Client Key will use the `<delivery-client-key>` placeholder.

**Not into Tutorials?** Take a look at our [sample app](https://github.com/streamroot/integration-samples/tree/master/cdn-load-balancer/android/ExoPlayerCDNLoadBalancerJava) 

## SDK installation
The easiest way to get the CDN Load Balancer SDK is to add it as a Gradle dependency. We assume you are using Android Studio with the latest tools updates as recommended by Google. If not, write to us at [cdnsupport@lumen.com](mailto:cdnsupport@lumen.com).

Add Streamroot's maven repository to the project settings in `settings.gradle`
```gradle
dependencyResolutionManagement {
    repositories {
        maven { url 'https://sdk.streamroot.io/android' }
    }
}
```

Add CDN Load Balancer SDK dependency. In your **module** `build.gradle` (it often ends with .app), add the following lines in the `dependencies` block:
```gradle
// It is good practice to lock dependencies version
def dc_version = "23.3.0"

implementation "io.streamroot.lumen.delivery.client:orchestrator-sdk:$dc_version"
```
CDN Load Balancer SDK will be pulled, but also other dependencies it depends on. Here is an exhaustive list:

- `org.jetbrains.kotlin:kotlin-reflect`
- `org.jetbrains.kotlin:kotlin-stdlib-jdk8`
- `org.jetbrains.kotling:kotlin-android-extensions-runtime`
- `org.jetbrains.kotlinx:kotlinx-coroutines-android`
- `com.getkeepsafe.relinker:relinker`
- `androidx.annotation:annotation`

**Notes**:

- CDN Load Balancer SDK requires Android KitKat 4.4 <=> API 19. Make sure your `minSdkVersion` is set to 19 or higher.
- If your `minSdkVersion` is strictly below API 21 (usually 19) and you encounter a maximum number of functions reached, you might need to setup a multidex application. Follow the following steps from the official android documentation.
[Multidex documentation](https://developer.android.com/studio/build/multidex)

## Configuration
### Proguard

If you are obfuscating your code, add the following rules to your proguard
```
-keep class io.streamroot.** { *; }
-dontwarn io.streamroot.lumen.**
```

### Declare permisions
In your `AndroidManifest.xml` add the following permissions
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

### Network security

Make sure your application allows clear text traffic.

First, add an xml resource (called here `network_security_config.xml`) to your project that defines the network security configuration :

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="false">127.0.0.1</domain>
    </domain-config>
</network-security-config>
```

Then add the following attributes in the application of your `AndroidManifest.xml`

```xml
<manifest ...>
    <application
        ...
        android:networkSecurityConfig="@xml/network_security_config">
    </application>
</manifest>
```

More info can be found in the [Android documentation](https://developer.android.com/training/articles/security-config).

## Set the Delivery Client Key
In your `AndroidManifest.xml` add the Delivery Client Key in the `application` node
```xml
<meta-data
android:name="io.streamroot.lumen.delivery.client.DeliveryClientKey"
android:value="<delivery-client-key>"
/>
```

We strongly recommend to set the Delivery Client Key in your `AndroidManifest.xml`. However, if it's not possible you can specify it when calling `LumenDeliveryClient.initializeApp()`.

## Code integration

### 1. SDK Initialization

SDK initialization is done preferably in an application context subclass. For that, you need to create a subclass of `Application` (or `MultiDexApplication` if your codebase is big and you support API level 19 or 20). Then, you can initialize the SDK:

```java
public class Application extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        /* If you could not add your Delivery Client Key in your AndroidManifest.xml
         * Call instead: LumenDeliveryClient.initializeApp(this, "<delivery-client-key>")
         */
        LumenDeliveryClient.initializeApp(this);
        ...
    }
}
```

**NOTE:** If you use a MultiDexApplication, don't forget to add the `multiDexEnabled true` line in your app gradle file under the `android.defaultConfig` block. More information in the Multidex documentation linked above.

In your `AndroidManifest.xml`, point to your custom application subclass: 

```java
android:name=".Application"
```

### 2. Bridge between your player and the `LumenDeliveryClient`

In order to work correctly, the SDK instance uses a `PlayerInteractor`.

It is the component in charge of the interactions between the player and the SDK. It monitors Quality of Service (QoS) metrics and allows the SDK to behave accordingly.

To feed the SDK properly, this class has to meet the following requirements:
* The `playerError()` method must be called whenever an error occurs.
* The `playerFrameDrop()` method must be called when a frame is dropped.
* The `playerStateChange()` method must be notified of each player state change.
* The `playerTrackSwitch()` method must be called when the player changes the current track.

The remaining methods should not be implemented as they are not used for CDN Load Balancer:
* The `playbackTime()` method should return the current playback time since the beginning in milliseconds.
* The `bufferHealth()` should return the duration it is possible to play starting from the playback position using what has been buffered.
* The `bufferTarget()` should return the target duration the player tries to have buffered at any time.
* The `setBufferTarget(target: Double)` should set the target duration the player should try to have buffered at any time.
* The `setEstimatedBandwidth(bps: Long?)` should force the bandwidth estimate of the player to the given value.
* The `setBandwidthDriver(driver: Driver)` should set who is the driver for the bandwidth estimate between the SDK and the player.

When integrating the SDK, you are free to implement this component but we provide an implementation example that satisifies these requirements for ExoPlayer in [ExoPlayerCDNLoadBalancerJava](app/src/main/java/io/streamroot/lumen/delivery/client/samples/cdn_load_balancer/exoplayer/PlayerInteractor.java).

### 3. Instantiate a `LumenDeliveryClient`

Now that the SDK is initialized, you are able to create `LumenDeliveryClient` instances.

You first need to create and setup your ExoPlayer instance. Then the following function shows you how to configure DC instances using a `ExoPlayer` :

```java
private LumenDeliveryClient createDeliveryClient(ExoPlayer player, DefaultLoadControl loadControl, PlayerInteractor.ExoPlayerBandwidthMeter bandwidthMeter) {
    final PlayerInteractor playerInteractor = new PlayerInteractor(player, loadControl, bandwidthMeter);

    return LumenDeliveryClient
            .orchestratorBuilder(this)
            /*
             * Set the player interactor that will be used by the SDK
             * Check the bridge section to know more
             *
             * param: an instance of a class subclassing LumenPlayerInteractorBase.
             */
            .playerInteractor(playerInteractor)
            /*
             * Set the optional parameters (more details below)
             * NOTE: This is required even if empty
             */
            .options(o -> null)
            /*
             * Build a LumenDeliveryClient instance
             *
             * param: String. The video stream url
             */
            .build(manifestUrl);
}
```
**Note**:
`PlayerInteractor` is referencing the bridge class from step 2, the name may be different.

### 4. Start the SDK instance and get the final url

Calling the `start()` method on the `LumenDeliveryClient` instance will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```java
deliveryClient.start()
final String finalUrl = deliveryClient.localUrl();
```

### 5. Give your player the final URL

To maximize compatibility with the SDK we strongly encourage you to allow HTTP <-> HTTPS cross protocol redirects in your ExoPlayer media sources.

With `finalUrl` you can create the `mediaItem` for ExoPlayer, like this:

```java
MediaItem mediaItem = MediaItem.fromUri(Uri.parse(finalUrl));
```

### 6. Stop the SDK instance

Once the video is done playing, you have to stop the SDK created earlier.

```java
// Calling stop will finish ongoing tasks and release all resources used
deliveryClient.stop();
```

## Additional options

You can pass additional options when creating a `LumenDeliveryClient`.

```java
private LumenDeliveryClient createDeliveryClient(ExoPlayer player, DefaultLoadControl loadControl, PlayerInteractor.ExoPlayerBandwidthMeter bandwidthMeter) {
    final PlayerInteractor playerInteractor = new PlayerInteractor(player, loadControl, bandwidthMeter);

    return LumenDeliveryClient
            .orchestratorBuilder(this)
            .playerInteractor(playerInteractor)
            .options(o -> {
                /*
                * Set Orchestrator property
                *
                * param: String
                */
                o.orchestratorProperty("MY_PROPERTY");
                /*
                * Set the Delivery Client Key
                * Is only required if it was not set in AndroidManifest.xml
                * Will override the AndroidManifest.xml DeliveryClientKey
                *
                * param: String
                */
                o.deliveryClientKey("<delivery-client-key>");
                /*
                * Set the content id
                * A string that identifies your content
                * By default, it uses the stream url
                *
                * param: String
                */
                o.contentId("MY_CONTENT_ID");
                /*
                * Set the log level
                * See the "How to investigate?" to know more
                *
                * param: LumenLogLevel
                */
                o.logLevel(LumenLogLeven.INFO);
                /*
                * Set latency in seconds
                *
                * param: Int
                */
                o.latency(3);
                /*
                * Set a proxy server
                * Allows the use of a proxy server in the middle
                * Format is host:port
                *
                * params: String
                */
                o.proxyServer("MY_PROXY_HOST:PORT");

                return null;
            }).build(manifestUrl);
}
```

## Troubleshooting

### Enable logs for initialization
By default the log level is set to `OFF` for initalization, it can be turned on before calling the `initializeApp`:
```java
LumenDeliveryClient.setLogLevel(LumenLogLevel.INFO);
LumenDeliveryClient.initializeApp(this);
```

**Notes:**
* Valid value for `LumenLogLevel` are `TRACE`, `CRITICAL`, `ERROR`, `WARNING`, `INFO`, `DEBUG` or `OFF`.

### StatsView

Lumen provides a utils library that allows the display of CDN Load Balancer information on the device.

## **⚠️ This is not intended for production ⚠️**

Add the utils dependency to your module's `build.gradle`

```gradle
// /!\ Optional package for stats view. Not intended for production /!\
implementation "io.streamroot.lumen.delivery.client:orchestrator-sdk-utils:$dc_version"
```

Add the `LumenStatsView` to your layout, ideally over the biggest surface. You can do this freely as it won't intercept user interaction.

```xml
<io.streamroot.lumen.delivery.client.utils.LumenStatsView
    android:id="@+id/dcStatsView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Retrieve your view by your preferred method and link it with a `LumenDeliveryClient` instance.

```java
// Helper function to initializing the stats view
private void showStatsView(LumenDeliveryClient dc) {
    ViewGroup svc = bindings.statsviewContainer;
    svc.removeAllViews();
    final LumenStatsView statsView = new LumenStatsView(this);
    dc.addStateStatsListener(statsView);
    statsView.showStats();
    svc.addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
}

dcStatsView = ...
initStatsView(dcStatsView)
```
A red overlay with CDN Load Balancer SDK related stats should be displayed. The stats view overlay can be reopened by clicking repeatedly anywhere on the screen.

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
* Frame drop : Unsupported
