# Mesh Delivery plugin for ExoPlayer integration on Android (Kotlin)

The Mesh Delivery SDK is player agnostic. You can use Mesh Delivery with any player but you need to embed and connect several classes together to make it work. 
For most players, Lumen is providing the "glue" classes and how to connect them but that still leaves some integration on your side.

The Mesh Delivery plugin for ExoPlayer is an Android Archive maven artifact that will automatically pull the right version of the SDK, the right version of ExoPlayer, and that will embed all the required classes. By using Mesh Delivery via the plugin, you can avoid unwanted integration issues since it will automatically bind them all together, thus reducing the boilerplate and guaranting an up-to-date and compatible integration.

## Prerequisite
To integrate the Mesh Delivery plugin for ExoPlayer, you will need a valid Delivery Client Key. It is available in the Account section of your dashboard. If you do not have one, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/mesh-delivery.html). In the following tutorial, every mention to the Delivery Client Key will use the `<delivery-client-key>` placeholder.

**Not into Tutorials?** Take a look at our [sample app](./) 

## Plugin installation
The easiest way to get the Mesh Delivery plugin is to add it as a Gradle dependency. We assume you are using Android Studio with the latest tools updates as recommended by Google. If not, write to us at [cdnsupport@lumen.com](mailto:cdnsupport@lumen.com).

Add Streamroot's maven repository to the project settings in `settings.gradle` or project `build.gradle` depending or your repository declaration system.
```gradle
dependencyResolutionManagement {
    repositories {
        maven { url 'https://sdk.streamroot.io/android' }
    }
}
```

### Plugin versioning
For a given `io.streamroot.lumen.delivery.client:mesh-plugin-exoplayer-2-18:23.3.0.0`:
- `2-18` is the ExoPlayer `MAJOR-MINOR` => a specific plugin version will automatically take the last PATCH of ExoPlayer (ex: `2.18.1`)
- `23.3.0.0` is the Mesh Delivery SDK version (`23.3.0`) appended with a plugin version (`.0`)
To summarize, one plugin version = one specific Mesh Delivery SDK version + one specific `MAJOR.MINOR` ExoPlayer version.
**For that reason, it is recommended that you do not include ExoPlayer as a dependency by yourself but let the Plugin pull the right ExoPlayer version for you.**
Forcing a different ExoPlayer version may lead to runtime errors such as `UnsatisfiedLinkError`, `ClassNotFoundException`, etc.

Add Mesh Delivery plugin for ExoPlayer dependency. Add in your **module** `build.gradle` (it often ends with `.app`)
```gradle
// It is good practice to lock dependencies version
def dc_version = '23.3.0'
def exo_version = '2-18'
def plugin_patch = 0
implementation "io.streamroot.lumen.delivery.client:mesh-plugin-exoplayer-$exo_version:$dc_version.$plugin_patch"
```

### List of pulled dependencies

- ExoPlayer (using `exo_version` variable, newest patch)
- Mesh Delivery SDK (using `dc_version` variable)
- `org.jetbrains.kotlin:kotlin-reflect`
- `org.jetbrains.kotlin:kotlin-stdlib-jdk8`
- `org.jetbrains.kotling:kotlin-android-extensions-runtime`
- `org.jetbrains.kotlinx:kotlinx-coroutines-android`
- `com.getkeepsafe.relinker:relinker`
- `androidx.annotation:annotation`

> **Notes**:
> - Mesh Delivery SDK requires Android KitKat 4.4 / API 19. Make sure your `minSdkVersion` is set to 19 or higher.
> - If your `minSdkVersion` is strictly below API 21 (usually 19) and you encounter a maximum number of functions reached, you might need to setup a multidex application. Follow the following steps from the [official Android documentation](https://developer.android.com/studio/build/multidex).

## Configuration
### Proguard

If you are obfuscating your code, add the following rules to your proguard:
```
-keep class io.streamroot.** { *; }
-dontwarn io.streamroot.lumen.**
```

### Declare permisions
In your `AndroidManifest.xml` add the following permissions:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

### Network security

Make sure your application allows clear text traffic.

First, add an xml resource (called here `network_security_config.xml`) to your project that defines the network security configuration:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>
```

Then add the following attributes in the application of your `AndroidManifest.xml`:

```xml
<manifest ...>
    <application
        ...
        android:usesCleartextTraffic="true"
        android:networkSecurityConfig="@xml/network_security_config">
    </application>
</manifest>
```

## Set the Delivery Client Key
In your `AndroidManifest.xml`, add the `DeliveryClientKey` in the application node:
```xml
<meta-data
android:name="io.streamroot.lumen.delivery.client.DeliveryClientKey"
android:value="<delivery-client-key>"
/>
```

We strongly recommend to set the Delivery Client Key in your `AndroidManifest.xml`. However, if it's not possible you can specify it when instantiating a `LumenDeliveryClient`.

## Code integration

### 1. SDK Initialization

SDK initialization is done preferably in an application context subclass. For that, you need to create a subclass of `Application` (or `MultiDexApplication` if your codebase is big and you support API level 19 or 20). Then, you can initialize the SDK:

```kotlin
class Application: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        /* If you could not add your Delivery Client Key in your AndroidManifest.xml
         * Call instead: LumenDeliveryClient.initializeApp(this, "<delivery-client-key>")
         */
        LumenDeliveryClient.initializeApp(this)
        ...
    }
}
```
In your `AndroidManifest.xml`, point to your custom application subclass: 

```kotlin
android:name=".Application"
```

### 2. Instantiate a `LumenDeliveryClientPlugin`

The plugin creation is divided in two phases:
- A plugin configuration phase which needs to interact with an `ExoPlayer` instance. This uses a builder pattern.
- A `meshOptions` continuation method which allows you to add extra parameters for Mesh Delivery.

#### **Plugin configuration**

The plugin is always the one that will transform an `ExoPlayer.Builder` into an `ExoPlayer` instance.
The keyword `this` in this section refers to an Android `Context` or any subclass.

Plugin is interacting with:
- The `LoadControl`
- The `BandwidthMeter`
> **Note**: The plugin is always configuring things last so be warned that any custom modification with these classes will be overriden.

If you do not need to interact with the `ExoPlayer` instance before its construction (with `ExoPlayer.Builder` object) then you can leave the SDK in charge of its creation.
```kotlin
val builder = LumenDeliveryClientPlugin.Builder(this, manifestUrl)
```

If you need to interact with the `ExoPlayer.Builder` you can either create the `ExoPlayer.Builder` yourself or hook into one created by the Plugin.
```kotlin
// Pre created
val exoPlayerBuilder = ExoPlayer.Builder(this)
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).exoPlayerBuilder(exoPlayerBuilder)

// Using hook
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).exoPlayerBuilder { exoPlayerBuilder ->  
    // Work with exoPlayerBuilder
}
```

If you need to override the `LoadControl`, you can also either give it to us or hook to it. The` LoadControl` needs to be a `DefaultLoadControl` as this guarantees maximum efficiency.
```kotlin
// Pre created
val loadControlBuilder = DefaultLoadControl.Builder()
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).loadControlBuilder(loadControlBuilder)

// Hook
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).loadControlBuilder { defaultLoadControlBuilder ->
    // Work with defaultLoadControlBuilder
}
```

If you need to interact with the `BandwidthMeter` you can use or subclass an `ExoPlayerBandwidthMeter` object:
```kotlin
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).bandwidthMeterCustomFactory { exoPlayerBuilder ->
    ExoPlayerBandwidthMeter(this, exoPlayerBuilder)
}
```

Any other interaction with the `ExoPlayer.Builder` class should be safe to use as Lumen does not interact with anything else (including DRM, etc).

#### **Mesh Delivery configuration**

Once the plugin is configured, you can optionally call the method `meshOptions()` on it. Inside that scope you can call one or multiple methods to configure Mesh Delivery.

```kotlin
LumenDeliveryClientPlugin.Builder(this, manifestUrl).meshOptions {
    /*
    * Set Mesh property
    *
    * param: String
    */
    meshProperty("MY_PROPERTY")
    /*
    * Set the Delivery Client Key
    * Is only required if it was not set in AndroidManifest.xml
    * Will override the AndroidManifest.xml DeliveryClientKey
    *
    * param: String
    */
    deliveryClientKey("<delivery-client-key>")
    /*
    * Set the content id
    * A string that identifies your content
    * By default, it uses the stream url
    *
    * param: String
    */
    contentId("MY_CONTENT_ID")
    /*
    * Set the log level
    * See the "How to investigate?" to know more
    *
    * param: LumenLogLevel
    */
    logLevel(LumenLogLeven.INFO)
    /*
    * Set latency in seconds
    *
    * param: Int
    */
    latency(25)
    /*
    * Set a proxy server
    * Allows the use of a proxy server in the middle
    * Format is host:port
    *
    * params: String
    */
    proxyServer("MY_PROXY_HOST:PORT")
}
```

#### Mesh Delivery plugin resolution

Once resolved the plugin keeps a strong reference on all used items and gives access to most of it including:

- `DeliveryClient` (private)
- `ExoPlayer` (public)
- `Context` (public)
- `BandwidthMeter` (public)
- `PlayerInteractor` (public) (it's a glue class that the plugin took care of embedding and configuring)
- `LoadControl` (public)
- `originalUri` (public)
- `finalUri` (public)

```kotlin
// If you have no plugin config or mesh config steps
val plugin = LumenDeliveryClientPlugin.Builder(this, manifestUrl).build()

// Plugin configuration + meshOptions (empty)
val plugin = LumenDeliveryClientPlugin.Builder(this, manifestUrl).loadControlBuilder{}.meshOptions{}.build()
```

We recommend that you keep a strong reference to the plugin instance as this will keep strong refs of everything and you will be interacting with the plugin directly.

### 4. Start the SDK instance and get the final url.

Calling the `start()` method on the `LumenDeliveryClientPlugin` instance will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```kotlin
plugin.start()
val finalUrl = plugin.finalUri
```

For convenience, you can also call `start()` directly on a `DeliveryClientPlugin.Builder`, it will resolve the plugin and pass it back in your provided lambda (skips `.build()` call).

### 5. Give your player the final URL

To maximize compatibility with the SDK we strongly encourage you to allow HTTP <-> HTTPS cross protocol redirects in your ExoPlayer media sources.

With `finalUrl` you can create the `mediaItem` for ExoPlayer, like this:

```kotlin
val mediaItem = MediaItem.fromUri(Uri.parse(finalUrl))
```

### 6. Stop the SDK instance

Once the video is done playing, you have to stop the SDK created earlier.

```kotlin
// Calling stop will finish ongoing tasks and release all resources used
plugin.stop()
```

## Compact integration example

```kotlin
LumenDeliveryClientPlugin.Builder(this, manifestUrl).meshOptions {
    logLevel(LumenLogLevel.INFO)
}.start().apply {
    plugin = this // plugin is stocked in the activity as a field

    bindings.playerView.player = exoPlayer
    showStatsView(this) // see the StatsView section to understand this

    exoPlayer.playWhenReady = true
    exoPlayer.addMediaItem(MediaItem.fromUri(Uri.parse(finalUri)))
    exoPlayer.repeatMode = Player.REPEAT_MODE_ALL
    exoPlayer.prepare()
}
```

## Troubleshooting

### Enable logs
By default the log level is set to `OFF`, it can be override either at initilization which will propagate to all `LumenDeliveryClient` instances:
```kotlin
LumenDeliveryClient.setLogLevel(LumenLogLevel.INFO)
LumenDeliveryClient.initializeApp(this)
```

or during `meshOptions`:
```kotlin
LumenDeliveryClientPlugin.Builder(this, manifestUrl).meshOptions {
    logLevel(LumenLogLevel.INFO)
}
```

**Notes:**
* Valid value for `LumenLogLevel` are `TRACE`, `CRITICAL`, `ERROR`, `WARNING`, `INFO`, `DEBUG` or `OFF`.

### StatsView

Lumen provides an optional utils library that allows the display of Mesh Delivery information on the device.

---
**⚠️ This is NOT intended for production ⚠️**

--- 


Add the utils dependency to your module's `build.gradle` by changing the name of the artifact. Append `-utils` to the artifact name to pull the utils package as well.

```gradle
// /!\ Optional package including Stat View. Not intended for production /!\
implementation "io.streamroot.lumen.delivery.client:mesh-plugin-exoplayer-$exo_version-utils:$dc_version.$plugin_patch"
```

Add the `LumenStatsView` to your layout, ideally over the biggest surface. You can do this freely as it won't intercept user interaction.

```xml
<io.streamroot.lumen.delivery.client.utils.LumenStatsView
    android:id="@+id/dcStatsView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Retrieve your view by your preferred method and link it with a `LumenDeliveryClientPlugin` instance

```kotlin
// Helper function to initializing the stats view
private fun initStatsView(dcStatsView: View) {
    dcStatsView.apply {
        // Instanciate a LumenStatsVie
        val statsView = LumenStatsView(context)
        plugin?.addStateStatsListener(statsView)

        // Display the stat view. Otherwise it is hidden by default
        statsView.showStats()

        addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
    }
}

dcStatsView = ...
initStatsView(dcStatsView)
```
A red overlay with Mesh Delivery SDK related stats should be displayed. The stats view overlay can be reopened by clicking repeatedly anywhere on the screen.

## Interactor capabilities
The SDK is player agnostic. All communication between the player and the delivery client that are player specific are implemented in a PlayerInteractor class.
Each player has a different API that the SDK tries to use at its full potential in order to monitor and maximize the Quality of Service.
The lack of some interfaces may :
- Reduce QoS detection
- Reduce offload

### QoS

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
* Bandwidth control : OK
* Buffer health : OK
* Track switch : Experimental
* Player error : OK
* Frame drop : Unsupported

### Offload
* Set buffer target : OK
* Get buffer target : OK
