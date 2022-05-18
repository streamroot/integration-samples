# Mesh SDK ExoPlayer plugin integration for Android (Kotlin)

Mesh SDK is player agnostic. You can use Mesh with any player but you need to embed and connect several classes together to make it work. 
For most players, Lumen is providing the "glue" classes and how to connect them but that still leaves some integration on your side.

The ExoPlayer Mesh plugin is an Android Archive maven artifact that will automatically pull the right version of the SDK, the right version of the player, and that will embed all the requires classes. By using Mesh via the plugin, you can avoid unwanted integration issues since it will automatically bind them all together, thus reducing the boilerplate and guaranting an up-to-date and compatible integration.

## Prerequisite
To integrate Mesh SDK, we need:
* A valid delivery client key. It is available in the Account section of your dashboard
* Mesh SDK Framework installed

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` delivery client key. If you do not have a delivery client key, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/mesh-delivery.html).

## Framework installation
Add Streamroot's maven repository to the project settings in `settings.gradle` or project `build.gradle` depending or your repository declaration system.
````gradle
dependencyResolutionManagement {
    repositories {
        maven { url 'https://sdk.streamroot.io/android' }
    }
}
````

The plugin versioning works as follows, let's take : io.streamroot.lumen.delivery.client:mesh-plugin-exoplayer-2-17:22.03.4.1
- 2-17 is the ExoPlayer MAJOR-MINOR => a specific plugin version will automatically take the last PATCH of ExoPlayer (ex : 2.17.3)
- 22.03.4.1 is the Mesh SDK version (22.03.4) appended with a plugin version (.1)
To summurize, one plugin version = one specific Mesh SDK version + one specific MAJOR.MINOR ExoPlayer version.
**For that reason, it is recommended that you do not include ExoPlayer as a dependency by yourself but let the Plugin pull the right ExoPlayer version for you.**
Forcing a different ExoPlayer version may lead to runtime errors such as UnsatisfiedLinkError, ClassNotFoundException, etc.

Add Mesh ExoPlayer plugin dependency. Add in your **module** `build.gradle` (it often ends with .app)
````gradle
// It is good practice to lock dependencies version
def dc_version = '22.03.4'
def exo_version = '2-17'
def plugin_patch = 1
implementation "io.streamroot.lumen.delivery.client:mesh-plugin-exoplayer-$exo_version:$dc_version.$plugin_patch"
````
Here is an exhaustive list of all pulled dependencies

- ExoPlayer (using exo_version variable, newest patch)
- Mesh SDK (using dc_version variable)
- org.jetbrains.kotlin:kotlin-reflect
- org.jetbrains.kotlin:kotlin-stdlib-jdk8
- org.jetbrains.kotling:kotlin-android-extensions-runtime
- org.jetbrains.kotlinx:kotlinx-coroutines-android
- com.getkeepsafe.relinker:relinker
- androidx.annotation:annotation

**Notes**:

- Mesh SDK requires Android KitKat 4.4 <=> API 19. Make sure your minSdkVersion is set to 19 or higher.
- If your minSdkVersion is strictly below API 21 (usually 19) and you encounter a maximum number of functions reached, you might need to setup a multidex application. Follow the following steps from the official android documentation.
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
````xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
````

### Network security

Make sure your application allows clear text traffic.

First, add an xml resource (called here `network_security_config.xml`) to your project that defines the network security configuration :

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

Then add the following attributes in the application of your `AndroidManifest.xml`

```xml
<manifest ...>
    <application
        ...
        android:usesCleartextTraffic="true"
        android:networkSecurityConfig="@xml/network_security_config">
    </application>
</manifest>
```

## Set the DeliveryClientKey
In your `AndroidManifest.xml` add the DeliveryClientKey in the application node
````xml
<meta-data
android:name="io.streamroot.lumen.delivery.client.DeliveryClientKey"
android:value="MY_DELIVERY_CLIENT_KEY"
/>
````

We strongly recommend to set the deliveryClientKey in your `AndroidManifest.xml`. However, if not possible, it is also possible to pass your deliveryClientKey at Lumen Delivery Client initialization.

## Code integration

### 1. SDK Initialization

SDK initialization is done preferably in an application context subclass.

* Create a subclass of Application or MultiDexApplication (if your codebase is big and you support API level 19 or 20)
* Initialize the SDK

```kotlin
class SRApplication: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        /* If you could not add your deliveryClientKey in your AndroidManifest.xml
         * Call instead: LumenDeliveryClient.initializeApp(this, "MY_DELIVERY_CLIENT_KEY")
         */
        LumenDeliveryClient.initializeApp(this)
        ...
    }
}
```
* Point to your custom application subclass in the `AndroidManifest.xml`

```kotlin
android:name=".SRApplication"
```

### 2. Bridge between your Player and the DeliveryClient

This is done by the plugin !

### 3. Instanciate a `LumenDeliveryClientPlugin`

The plugin creation is divided in two phases :
- A plugin configuration phase which needs to interact with an ExoPlayer instance. This uses a builder pattern.
- A meshOptions continuation method which allows you to add extra parameters for Mesh.

#### **Plugin configuration**

The plugin is always the one that will transform an ExoPlayer.Builder into an ExoPlayer instance.
The keyword "this" in this section refers to an android Context or any subclass.

We are interacting with :
- The LoadControl
- The BandwidthMeter
The plugin is always configuring things last so be warned that any custom modification with these classes will be overriden.

If you do not need to interact with the ExoPlayer instance before its construction (with ExoPlayer.Builder object) then you can leave the SDK in charge of its creation.
```kotlin
val builder = LumenDeliveryClientPlugin.Builder(this, manifestUrl)
```

If you need to interact with the ExoPlayer.Builder you can either create the ExoPlayer.Builder yourself or hook into one created by the Plugin.
```kotlin
// Pre created
val exoPlayerBuilder = ExoPlayer.Builder(this)
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).exoPlayerBuilder(exoPlayerBuilder)

// Using hook
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).exoPlayerBuilder { exoPlayerBuilder ->  
    // Work with exoPlayerBuilder
}
```

If you need to override the LoadControl, you can also either give it to us or hook to it. The LoadControl needs to be a DefaultLoadControl as this guarantees maximum efficiency.
```kotlin
// Pre created
val loadControlBuilder = DefaultLoadControl.Builder()
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).loadControlBuilder(loadControlBuilder)

// Hook
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).loadControlBuilder { defaultLoadControlBuilder ->
    // Work with defaultLoadControlBuilder
}
```

If you need to interact with the BandwidthMeter you can use or subclass an ExoPlayerBandwidthMeter object :
```kotlin
val pluginBuilder = LumenDeliveryClientPlugin.Builder(this, manifestUrl).bandwidthMeterCustomFactory { exoPlayerBuilder ->
    ExoPlayerBandwidthMeter(this, exoPlayerBuilder)
}
```

Any other interaction with the ExoPlayer.Builder class should be safe to use as Lumen does not interact with anything else (including DRM, etc).

#### **Mesh configuration**

Once the plugin is configured, you can optionally call the method meshOptions() on it. Inside that scope you can call one or multiple methods to configure mesh.

```kotlin
LumenDeliveryClientPlugin.Builder(this, manifestUrl).meshOptions {
    /*
    * Set Mesh property
    *
    * param: String
    */
    meshProperty("MY_PROPERTY")
    /*
    * Set the DeliveryClientKey
    * Is only required if it was not set in AndroidManifest.xml
    * Will override the AndroidManifest.xml DeliveryClientKey
    *
    * param: String
    */
    deliveryClientKey("MY_DELIVERY_CLIENT_KEY")
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

#### Mesh plugin resolution

Once resolved the plugin keeps a strong reference on all used items and gives access to most of it including :

- DeliveryClient (private)
- ExoPlayer (public)
- Context (public)
- BandwidthMeter (public)
- PlayerInteractor (public) (it's a glue class that the plugin took care of embedding and configuring)
- LoadControl (public)
- originalUri (public)
- finalUri (public)

You can access and use them, though the ExoPlayer instance and finalUri are definetely the mandatory ones.

```kotlin
// If you have no plugin config or mesh config steps
val plugin = LumenDeliveryClientPlugin.Builder(this, manifestUrl).build()

// Plugin configuration + meshOptions (empty)
val plugin = LumenDeliveryClientPlugin.Builder(this, manifestUrl).loadControlBuilder{}.meshOptions{}.build()
```

We recommend that you keep a strong reference to the plugin instance as this will keep strong refs of everything and you will be interacting with the plugin directly.

### 4. Start the SDK instance and get the final url.

Calling the `start()` method on the LumenDeliveryClientPlugin instance will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```kotlin
plugin.start()
val finalUrl = plugin.finalUri
```

For convenience, you can also call start() directly on a DeliveryClientPlugin.Builder, it will resolve the plugin and pass it back in your provided lambda (skips .build() call)

### 5. Give your player the final URL

To maximize compatibility with the SDK we strongly encourage you to allow HTTP <-> HTTPS cross protocol redirects in your ExoPlayer media sources.

With `finalUrl` you can create the `mediamItem` for ExoPlayer, like this:

```kotlin
val mediaItem = MediaItem.fromUri(finalUrl)
```

### 6. Stop the Lumen Delivery Client

Once the video is done playing, you have to stop the SDK created earlier.

````kotlin
// Calling stop will finish ongoing tasks and release all resources used
plugin.stop()
````

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

## How to investigate? Make sure the integration is working?

### Enable logs
By default the log level is set to `OFF`, it can be override either at initilization which will propagate to all `LumenDeliveryClient` instances:
````kotlin
LumenDeliveryClient.setLogLevel(LumenLogLevel.INFO)
LumenDeliveryClient.initializeApp(this)
````

or during meshOptions :
````kotlin
LumenDeliveryClientPlugin.Builder(this, manifestUrl).meshOptions {
    logLevel(LumenLogLevel.INFO)
}
````

**Notes:**
* Logs related to Mesh SDK will be prefixed with `[SR-KT]`
* LumenLogLevel: `TRACE` | `CRITICAL` | `ERROR` | `WARNING` | `INFO` | `DEBUG` | `OFF`

Log example:
````
I/[SR-KT]: 2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Outbound payload => {"dcKey":"demoswebsiteandpartners","platform":"android","sdkVersion":"1.5.0-beta-3dda3f7","arch":"aarch64","osName":"Q","appHostVersion":"1.0","osVersion":"10","bundleId":"io.streamroot.ctl.delivery.client.mesh.exoplayermesh","model":"ANA-NX9"}
I/[SR-KT]: 2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Received response code/message => 200 / OK
I/[SR-KT]: 2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Inbound payload => {"activateDeliveryClient":true}
    2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Backend request done in 122 ms
    2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Contacting backend SUCCESS -> result = YES
I/[SR-KT]: 2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Contacting backend ENDED, result = YES
I/[SR-KT]: 2022-01-21T11:51:46.046Z info [misc] : [DNADLLBinder] native library dir /data/app/io.streamroot.ctl.delivery.client.mesh.exoplayermesh-qvY91VH2lMA_qz5t0UEIwA==/lib/arm64
I/[SR-KT]: 2022-01-21T11:51:46.046Z info [misc] : [DNADLLBinder] Load shared lib maestro_mesh SUCCESS
    2022-01-21T11:51:46.046Z info [misc] : [DC_ACTIVATION] - Ending with final state => SUCCESS / YES, activated ? true, success ? true; took 154 ms
````
### StatsView

Streamroot provides an optional utils library that allows the display of Mesh information on the device.

## **⚠️ This is not intended for production ⚠️**

Add the utils dependency to your module's build.gradle by changing the name of the artifact. Append -utils to the artifact name to pull the utils package as well.

```gradle
// /!\ Optional package for stats view. Not intended for production /!\
implementation "io.streamroot.lumen.delivery.client:mesh-plugin-exoplayer-$exo_version-utils:$dc_version.$plugin_patch"
```

Add the LumenStatsView to your layout, ideally over the biggest surface. You can do this freely as it won't intercept user interaction.

```xml
<io.streamroot.lumen.delivery.client.utils.LumenStatsView
    android:id="@+id/dcStatsView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Retrieve your view by your preferred method and link it with a `LumenDeliveryClientPlugin` instance

````kotlin
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
````
A red overlay with Mesh SDK related stats should be displayed. The stats view overlay can be reopened by clicking frenetically anywhere on the screen.