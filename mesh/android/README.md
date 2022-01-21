# Mesh SDK Common Integration for Android (Kotlin)

## Prerequisite
To integrate Mesh SDK, we need:
* A valid delivery client key. It is available in the Account section of your dashboard
* Mesh SDK Framework installed

**NOTE:** For this sample app, we are using `demoswebsiteandpartners` delivery client key. If you do not have a delivery client key, you can ask for a [free trial on our website](https://www.lumen.com/en-us/edge-computing/mesh-delivery.html).

## Framework installation
Add Streamroot's maven repository to the project settings in `settings.gradle`
````gradle
dependencyResolutionManagement {
    repositories {
        maven { url 'https://beta.streamroot.io/android' }
    }
}
````

Add Mesh SDK dependency. Add in your `builde.gradle` of the **module** (it often ends with .app)
````gradle
// It is good practice to lock dependencies version
def dc_version = '1.5.0-beta-3dda3f7'

implementation 'io.streamroot.lumen.delivery.client:mesh-sdk:$dc_version'
````
Mesh SDK will be pulled, but also other dependencies it depends on. Here is an exhaustive list:

- org.jetbrains.kotlin:kotlin-reflect
- org.jetbrains.kotlin:kotlin-stdlib-jdk8
- org.jetbrains.kotling:kotlin-android-extensions-runtime
- org.jetbrains.kotlinx:kotlinx-coroutines-android
- com.getkeepsafe.relinker:relinker
- androidx.annotation:annotation

**Notes**:

- Mesh SDK requires Android KitKat 4.4 <=> API 19. Make sure your minSdkVersion is set to 19 or higher.
- PlayerInteractor is referencing the bridge class from step 3.

If your minSdkVersion is strictly below API 21 (usually 19) and you encounter a maximum number of functions reached, you might need to setup a multidex application.

Please follow the following steps from the official android documentation.
[Multidex documentation](https://developer.android.com/studio/build/multidex)

## Configuration
### Proguard

If you are obfuscating your code, please add the following rules to your proguard.
```
-keep class io.streamroot.** { *; }
-dontwarn io.streamroot.lumen.**
```

### Declare permisions
In your `AndroidManifest.xml` add the following permissions
````xml
<uses-permission android:name="android.permission.INTERNET"/>
````

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

We strongly recomand to set the deliveryClientKey in your `AndroidManifest.xml`. However, if not possible, it is also possible to pass your deliveryClientKey at Lumen Delivery Client initialization or instantiation.

## Code integration

### 1. SDK Initialization

SDK initialization is done preferably in an application context subclass.

* Create subclass of Application or MultiDexApplication (if your code base is big and you support API level 19 or 20)
* Initialize the SDK

```kotlin
class SRApplication: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        LumenDeliveryClient.initializeApp(this)
        ...
    }
}
```
* Point to your custom application subclass in the `AndroidManifest.xml`

```kotlin
android:name=".SRApplication"
```

### 2. Bridge between your Player and the delivery client

In order to work perfectly, the SDK instances uses a `PlayerInteractor`.

It is a component in charge of the interactions between the player and the SDK. It monitors Quality of Service (QoS) metrics and allow the SDK to behave accordingly.

You can find an ExoPlayer implementation example in [ExoPlayerMesh](ExoPlayerMesh/app/src/main/java/io/streamroot/ct/delivery/client/mesh/PlayerInteractor.kt).

### 3. Instanciate a LumenDeliveryClient

Now the SDK is initialized, you are able to create `LumenDeliveryClient` instances.

You first need to create and setup your ExoPlayer instance. Then the following function shows you how to configure DC instances using a SimpleExoPlayer :

```kotlin
private fun initDeliveryClient(player: SimpleExoPlayer) =
    LumenDeliveryClient.meshBuilder(this) //< applicationContext
        .playerInteractor(PlayerInteractor(player))
        .build(url) //< string
```
**Note**:
PlayerInteractor is referencing the bridge class from step 3, name may be different

### 4. Start the SDK instance and get the final url.

Calling the `start()` method on the DC will start the SDK.
Once you have a running instance of the SDK, you must retrieve the final URL and input it to your player instead of your original one.

```kotlin
deliveryClient.start()
val finalUrl = deliveryClient.localUrl()
```

### 5. Give your player the final URL

To maximize compatibility with the SDK we strongly encourage you to allow HTTP <-> HTTPS cross protocol redirects in your ExoPlayer media sources.

From the `finalUrl` you can create the `mediamItem` for ExoPlayer

```kotlin
val mediaItem = MediaItem.fromUri(deliveryManifest)
```

### 6. Stop the Lumen Delivery Client

Once the video is done playing, you have to stop the SDK created earlier.

````kotlin
// Calling terminate will finish ongoing tasks and release all resources used
deliveryClient.terminate()
````

## Additional options

You can pass additional options when creating a `LumenDeliveryClient`.

```kotlin
private fun initDeliveryClient(newPlayer: SimpleExoPlayer) =
    LumenDeliveryClient.meshBuilder(applicationContext)
        .playerInteractor(PlayerInteractor(newPlayer))
        .options {
            /*
             * Set the Mesh property to use
             *
             * param: string
             */
            meshProperty("MY_PROPERTIES")

            /*
             * Set the DeliveryClientKey to use
             * Is only required if it was not set in AndroidManifest.xml
             * Will override the AndroidManifest.xml DeliveryClientKey
             *
             * param: string
             */
            deliveryClientKey("MY_DELIVERY_CLIENT_KEY")

            /*
             * Set the content id
             * A string that identifies your content
             * By default, it uses the stream url
             *
             * param: string
             */
             contentId("MY_CONTENT_ID")

             /*
              * Set the log level to use
              * See the "How to investigate?" to know more
              *
              * param: LumenLogLevel
              */
             logLevel(LumenLogLeven.INFO)
        }
        .build(<string>url)
```

## How to investigate? Make sure the integraiton is working?

### Enable logs
By default the log leven is set to OFF, it can be override either at initilization which will propagate to all `LumenDeliveryClient`:
````kotlin
LumenDeliveryClient.setLogLevel(LumenLogLevel.INFO)
LumenDeliveryClient.initializeApp(this)
````

or during a `LumenDeliveryClient` creation:
````kotlin
private fun initDeliveryClient(newPlayer: SimpleExoPlayer) =
    LumenDeliveryClient.meshBuilder(applicationContext)
        .playerInteractor(PlayerInteractor(newPlayer))
        .options {
          logLevel(LumenLogLeven.INFO)
        }
        .build(<string>url)
````

**Notes:**
* Logs related to Mesh SDK will be prefixed with `[SR-KT]`
* LumenLogLevel: TRACE | CRITICAL | ERROR | WARNING | INFO | DEBUG | OFF

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

Streamroot provides an utils library which allows the display of Orchestrator information on the device.

/!\ This is **not** intended for production /!\

Add the utils dependency to your module's build.gradle

```gradle
// /!\ Optional package for stats view. Not intended for production /!\
implementation 'io.streamroot.lumen.delivery.client:mesh-sdk-utils:$dc_version'
```

Add the LumenStatsView to your layout, ideally over the biggest surface. You can do this freely as it won't intercept user interaction.

```xml
<io.streamroot.lumen.delivery.client.utils.LumenStatsView
    android:id="@+id/dcStatsView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Retrieve your view by your prefered method and like it with a `LumenDeliveryClient` instance

````kotlin
// Helper function to initializing the stats view
private fun initStatsView(dcStatsView: View) {
    dcStatsView.apply {
        // Instanciate a LumenStatsVie
        val statsView = LumenStatsView(context)
        lumenDeliveryClient?.addStateStatsListener(statsView)

        // Display the stat view. Otherwise it is hidden by default
        statsView.showStats()

        addView(statsView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
    }
}

dcStatsView = ...
initStatsView(dcStatsView)
````
A red overlay with Mesh SDK related stats should be displayed. The stats view oveerlay can be reopened by clicking frenetically anywhere on the screen.