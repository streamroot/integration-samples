# Streamroot Android Orchestrator Kotlin

## Dependencies

Dependencies will be pulled automatically as dependencies of the Orchestrator SDK

- org.jetbrains.kotlin:kotlin-reflect | kotlin-stdlib-jdk8 | kotlin-android-extensions-runtime
- org.jetbrains.kotlinx:kotlinx-coroutines-android
- com.getkeepsafe.relinker:relinker
- androidx.annotation:annotation

## Installation

Add Streamroot's maven repository to your project i.e. the following in your **project**'s build.gradle :

```gradle
allprojects {
    repositories {
        ...
        maven { url 'https://sdk.streamroot.io/android' }
    }
}
```

Add the orchestrator dependency to your module (often called app). In your **module** build.gradle add :

```gradle
dependencies {
    ...
    def dc_version = "1.0.0"
    implementation 'io.streamroot.ctl.delivery.client:orchestrator-sdk:' + dc_version
}
```

Orchestrator requires Android KitKat 4.4 <=> API 19. Make sure your minSdkVersion is set to 19 or higher.

Compatibility options need to be added to your **module**'s build.gradle. Make sure to add the following block : 

```gradle
android {
    ...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

If your minSdkVersion is strictly below API 21 (usually 19) and you encounter a maximum number of functions reached, you might need to setup a multidex application.

Please follow the following steps from the official android documentation.  
[Multidex documentation](https://developer.android.com/studio/build/multidex)

### Proguard

If you are obfuscating your code, please add the following rules to your proguard.
```
-keep class io.streamroot.** { *; }
-dontwarn io.streamroot.ctl.**
```

### Network security

Make sure your application allows clear text traffic.

First add an xml resource (called here network_security_config.xml) to your project that defines the network security configuration : 

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

Then add the following attributes in the application of your **AndroidManifest.xml**

```xml
<manifest ...>
    <application
        ...
        android:usesCleartextTraffic="true"
        android:networkSecurityConfig="@xml/network_security_config">
    </application>
</manifest>
```

## Getting started

### 1. Set the deliveryClientKey

Before doing anything, you must set the deliveryClientKey as a meta-data in the application manifest.

```xml
<manifest ...>
    <application ...>
        ...
        <meta-data
            android:name="io.streamroot.ctl.delivery.client.DeliveryClientKey"
            android:value="DCKey" />
    </application>
</manifest>
```

`deliveryClientKey`: Refers to your Streamroot unique identifier that you will find in the Account section of the Streamroot Dashboard. If you don't have a deliveryClientKey, you can ask for a free trial on our website.

**Note**:
It is also possible to pass your deliveryClientKey at CTL Delivery Client initialization or instantiation.

### 2. SDK Initialization

SDK initialization is done preferably in an application context subclass. 
<br>

- Create subclass of Application or MultiDexApplication(if your code base is big and you need kitkat / minSdkVersion 19) support) 

- Initialize the SDK

```kotlin
class SRApplication: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        CTLDeliveryClient.initializeApp(this)
        ...
    }
}
```
- Point to your custom application subclass in the `AndroidManifest.xml`

```kotlin
android:name=".SRApplication"
```

### 3. Bridge between your Player and the delivery client

In order to work perfectly, the SDK instances need to interact with the player and listen to its events.  
Please add the following classes to your project :

- [MediaInterface](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/ExoPlayer/app/src/main/java/io/streamroot/ctl/delivery/client/samples/orchestrator/exoplayer/ExoPlayerMediaInterface.kt) (Mandatory)
- [QosModule](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/ExoPlayer/app/src/main/java/io/streamroot/ctl/delivery/client/samples/orchestrator/exoplayer/ExoPlayerQosModule.kt) (Optional)

However optional, we strongly recommend that you use the QosModule as well.

### 4. Create a new CTL Delivery Client instance 

Now that you have set the `deliveryClientKey` and initialized the SDK, you are able to create CTL Delivery Client instances.

You first need to create and setup your ExoPlayer instance. Then the following function shows you how to configure DC instances using a SimpleExoPlayer :

```kotlin
private fun initDeliveryClient(newPlayer: SimpleExoPlayer) =
        CTLDeliveryClient.orchestratorBuilder(applicationContext)
                .mediaInterface(ExoPlayerMediaInterface(newPlayer))
                .options {
                    qosInterface(ExoPlayerQosModule(newPlayer))
                    orchestratorProperty(<string>)
                }
                .build(<string>url)
```
**Note**:
ExoPlayerMediaInterface & ExoPlayerQosModule are referencing the bridge classes from step 3.  
**Note**: 
You can turn logging in using the option `logLevel(CTLLogLevel.TRACE)`

### 5. Start the SDK instance and get the final url.

Calling the `start()` method on the DC will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```kotlin
deliveryClient.start()
val finalUrl = deliveryClient.localUrl()
```

### 6. Give your player the final URL

To maximize compatibility with the SDK we strongly encourage you to allow HTTP <-> HTTPS cross protocol redirects in your ExoPlayer media sources.

We recommend creating your ExoPlayer media source using the following way :  

```kotlin
@SuppressLint("SwitchIntDef")
private fun buildMediaSource(uri: Uri): MediaSource {
    val defaultDataSourceFactory =
        DefaultHttpDataSourceFactory(
                Util.getUserAgent(applicationContext, "StreamrootQA"),
                DefaultHttpDataSource.DEFAULT_CONNECT_TIMEOUT_MILLIS,
                DefaultHttpDataSource.DEFAULT_READ_TIMEOUT_MILLIS,
                true
        )

    return when (Util.inferContentType(uri)) {
        C.TYPE_HLS -> HlsMediaSource.Factory(defaultDataSourceFactory)
            //.setDrmSessionManager()
            .createMediaSource(uri)
        C.TYPE_DASH -> DashMediaSource.Factory(
            DefaultDashChunkSource.Factory(
                defaultDataSourceFactory
            ), defaultDataSourceFactory
        )
            //.setDrmSessionManager()
            .createMediaSource(uri)
        else -> {
            throw IllegalStateException("Unsupported type for url: $uri")
        }
    }
}
```

### 7. Stop the CTL Delivery Client

Once the video is done playing, you have to stop the SDK you created earlier. Calling the following method will finish the ongoing tasks and release the resources.

`deliveryClient.terminate()`
<br>

### 8. (Optional - Debug ONLY) Orchestrator StatsView

Streamroot provides an utils library which allows the display of Orchestrator information on the device.

/!\ This is **not** intended for production /!\

Add the utils dependency to your module's build.gradle

```gradle
implementation 'io.streamroot.ctl.delivery.client:orchestrator-sdk-utils:' + dc_version
```

Add the CTLStatsView to your layout, ideally over the biggest surface. You can do this freely as it won't intercept your touches.

```xml
<io.streamroot.ctl.delivery.client.utils.CTLStatsView
    android:id="@+id/dcStatsView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Retrieve your view by finding it by ID, or synthetically.

`dcStatsView = ...`

Link the CTLStatsView between step 4 and 5, so ideally after creation and before the start().

```kotlin
dc.addStateStatsListener(dcStatsView)
```

You can display the **stats** by clicking anywhere repeatedly for 5 times or programmatically using :

```kotlin
dcStatsView.showStats()
```

Complete implementation in a nutshell : 

```kotlin
val newPlayer = SimpleExoPlayer.Builder(applicationContext).build()

newPlayer.playWhenReady = true
newPlayer.addListener(this)

initDeliveryClient(newPlayer).let { dc ->
    deliveryClient = dc

    dc.addStateStatsListener(dcStatsView)
    dcStatsView.showStats()
    dc.start()

    val uri = Uri.parse(dc.localUrl())
    newPlayer.prepare(LoopingMediaSource(buildMediaSource(uri)), true, false)
}

player = newPlayer
exoPlayerView.player = newPlayer
```
