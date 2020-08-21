# Streamroot Android Orchestrator Java

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
    def dc_version = "1.0.2"
    implementation 'io.streamroot.ctl.delivery.client:orchestrator-sdk:' + dc_version
}
```

**Notes**:

- Orchestrator requires Android KitKat 4.4 <=> API 19. Make sure your minSdkVersion is set to 19 or higher.
- ExoPlayerQosModule is referencing the bridge class from step 3.
- ExoPlayer requires targetCompatibility java 8.

If your minSdkVersion is strictly below API 21 (usually 19) and you encounter a maximum number of functions reached, you might need to setup a multidex application.

Please follow the following steps from the official android documentation.  
[Multidex documentation](https://developer.android.com/studio/build/multidex)

### Proguard

If you are obfuscating your code, please add the following rules to your proguard
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

- Create subclass of Application or MultiDexApplication (if your code base is big and you support API level 19 or 20)

- Initialize the SDK

```java
public final class SRApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        CTLDeliveryClient.initializeApp(this);
    }
}
```
- Point to your custom application subclass in the `AndroidManifest.xml`

```kotlin
android:name=".SRApplication"
```

### 3. Bridge between your Player and the delivery client.

In order to work perfectly, the SDK instances need to interact with the player and listen to its events.  
Please add the following class to your project :

- [QosModule](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/ExoPlayer-Java/app/src/main/java/io/streamroot/ctl/delivery/client/samples/orchestrator/exoplayer/ExoPlayerQosModule.java)

### 4. Create a new CTL Delivery Client instance. 

Now that you have set the `deliveryClientKey` and initialized the SDK, you are able to create CTL Delivery Client instances.

You first need to create and setup your ExoPlayer instance. Then the following function shows you how to configure DC instances using a SimpleExoPlayer :

```java
private CTLDeliveryClient initDeliveryClient(SimpleExoPlayer newPlayer) {
    return CTLDeliveryClient.orchestratorBuilder(getApplicationContext())
            .qosInterface(new ExoPlayerQosModule(newPlayer))
            .build(<string>url);
}
```
**Note**:
ExoPlayerQosModule is referencing the bridge class from step 3.  

### 5. Start the SDK instance and get the final url.

Calling the `start()` method on the DC will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```java
deliveryClient.start();
final Uri uri = Uri.parse(dc.localUrl());
```

### 6. Give your player the final URL

To maximize compatibility with the SDK we strongly encourage you to allow HTTP <-> HTTPS cross protocol redirects in your ExoPlayer media sources.

We recommend creating your ExoPlayer media source using the following way :  

```java
@SuppressLint("SwitchIntDef")
private MediaSource buildMediaSource(Uri uri) {
    final DefaultHttpDataSourceFactory defaultDataSourceFactory = new DefaultHttpDataSourceFactory(
            Util.getUserAgent(getApplicationContext(), "StreamrootQA"),
            DefaultHttpDataSource.DEFAULT_CONNECT_TIMEOUT_MILLIS,
            DefaultHttpDataSource.DEFAULT_READ_TIMEOUT_MILLIS,
            true
    );

    switch (Util.inferContentType(uri)) {
        case C.TYPE_HLS:
            return new HlsMediaSource.Factory(defaultDataSourceFactory)
                    //.setDrmSessionManager()
                    .createMediaSource(uri);
        case C.TYPE_DASH:
            return new DashMediaSource.Factory(
                    new DefaultDashChunkSource.Factory(
                            defaultDataSourceFactory
                    ), defaultDataSourceFactory
            )
                    //.setDrmSessionManager()
                    .createMediaSource(uri);
        default:
            throw new IllegalStateException("Unsupported type for url: $uri");
    }
}
```

### 7. Stop the CTL Delivery Client

Once the video is done playing, you have to stop the SDK you created earlier. Calling the following method will finish the ongoing tasks and release the resources.

`deliveryClient.terminate();`
<br>

## Additional options

You can pass additional options when creating a delivery client.

```java
private CTLDeliveryClient initDeliveryClient(final SimpleExoPlayer newPlayer) {
    return CTLDeliveryClient.orchestratorBuilder(getApplicationContext())
        .qosInterface(new ExoPlayerQosModule(newPlayer))
        .options(new Function1<CTLOptionalOrchestratorBuilder, Unit>() {
            @Override
            public Unit invoke(CTLOptionalOrchestratorBuilder o) {
                o.<<< HERE >>>
                return null;
            }
        }).build(<string>url);
}
```

- `orchestratorProperty(<string>)` : The orchestrator property to use. Defaults to the default property.
- `deliveryClientKey(<string>)` : This is only required if you did not provide it in your AndroidManifest.xml application's metadata (step 1).
- `contentId(<string>)` : A string that identifies your content. Defaults to your stream url minus scheme, query parameters, and port 80/443.

## Debug 

### Additional debug options

- `logLevel(CTLLogLevel.TRACE)` : Set Orchestrator's log level : TRACE | CRITICAL | ERROR | WARNING | INFO | DEBUG | OFF. Defaults to OFF.
- `proxyServer(<string>)` : Allows the use of a proxy server in the middle. String with format `ip:host`.

### Orchestrator StatsView

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

```java
dc.addStateStatsListener(dcStatsView);
```

You can display the **stats** by clicking anywhere repeatedly for 5 times or programmatically using :

```java
dcStatsView.showStats();
```

Complete implementation in a nutshell : 

```java
final SimpleExoPlayer newPlayer = new SimpleExoPlayer.Builder(getApplicationContext()).build();

newPlayer.setPlayWhenReady(true);
newPlayer.addListener(this);

final CTLDeliveryClient dc = initDeliveryClient(newPlayer);
deliveryClient = dc;
dc.addStateStatsListener(dcStatsView);
dcStatsView.showStats();
dc.start();

final Uri uri = Uri.parse(dc.localUrl());
newPlayer.prepare(new LoopingMediaSource(buildMediaSource(uri)), true, false);

player = newPlayer;
exoPlayerView.setPlayer(newPlayer);
```
