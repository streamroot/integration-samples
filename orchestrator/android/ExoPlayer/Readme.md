# Streamroot Android DNA
## Dependencies
- 
-

## Getting started

### Installation


### 1. Set the deliveryClientKey
Before doing anything, you must set the deliveryClientKey as a meta-data in the application manifest.

```xml 
<meta-data
    android:name="io.streamroot.ctl.delivery.client.DeliveryClientKey"
    android:value="DCKey" />
    
```
`deliveryClientKey`: Refers to your Streamroot unique identifier that you will find in the Account section of the Streamroot Dashboard. If you don't have a deliveryClientKey, you can ask for a free trial on our website.

**Note**:
It is also possible to pass your deliveryClientKey at CTL Delivery Client instantiation.

<br>

### 2. SDK Initialization
SDK initialization is done preferably in an application context subclass. 
<br>

- Create subclass of Application or MultiDexApplication(if your code base is big and you need kitkat / minSdkVersion 19-) support) 

- Initialize the SDK

```kotlin
class SRApplication: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        CTLDeliveryClient.initializeApp(this)
    }
}
```
- Point to your custom application subclass in the `AndroidManifest.xml`

```kotlin
android:name=".SRApplication"
```
<br>

### 3. Create a new CTL Delivery Client instance 
Now that you have set the `deliveryClientKey`, you are able to create the CTL Delivery Client instances.

```kotlin
private fun initDeliveryClient(newPlayer: SimpleExoPlayer) =
        CTLDeliveryClient.orchestratorBuilder(applicationContext)
                .mediaInterface(ExoPlayerMediaInterface(newPlayer))
                .options {
                    qosInterface(ExoPlayerQosModule(newPlayer))
                    orchestratorProperty()
                }
                .build(mStreamUrl)
```
<br>

### 4. Start the SDK instance 
Call `start()` method on the Delivery Client.
<br>
### 5. Give your player the new URL
Once you have a running instance of the SDK, you must retrieve its URL and input it to your player instead of your original one.

The SDK exposes a `localUrl()` method that will do it as expected.
<br>
### 6. Implement the MediaInterface
package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer

```kotlin
import android.os.Handler
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.Timeline
import io.streamroot.ctl.delivery.client.core.CTLMediaInterface
import io.streamroot.ctl.delivery.client.core.CTLTimeRange

class ExoPlayerMediaInterface(private val player: ExoPlayer) : CTLMediaInterface {
    private val handler = Handler(player.applicationLooper)

    private fun <T> runSyncOnEPHandler(block: () -> T) : T?  {
        var t: T? = null
        val lock = Object()
        synchronized(lock) {
            handler.post {
                synchronized(lock) {
                    t = block()
                    lock.notify()
                }
            }
            lock.wait()
        }
        return t
    }

    override fun playbackTime() = runSyncOnEPHandler {
        (getCurrentWindowShift() + player.currentPosition).toDouble()
    } ?: 0.0

    override fun timeRanges() = runSyncOnEPHandler {
        val shift = getCurrentWindowShift()
        val rangeDurationMs = player.bufferedPosition - player.currentPosition
        if (rangeDurationMs > 0) {
            arrayListOf(CTLTimeRange((shift + player.currentPosition).toFloat(), rangeDurationMs / 1000f))
        } else {
            arrayListOf()
        }
    } ?: arrayListOf()

    private fun getCurrentWindowShift(): Long {
        val current = player.currentTimeline
        val timelineWindow = Timeline.Window()

        return if (player.currentWindowIndex < current.windowCount) {
            player.currentTimeline.getWindow(player.currentWindowIndex, timelineWindow)
            timelineWindow.positionInFirstPeriodMs
        } else 0L
    }
}
```
<br>
### 7.Stop the CTL Delivery Client

Once the video is done playing, you have to stop the SDK you created earlier. Calling the following method will finish the ongoing tasks and release the resources.

`deliveryClient.terminate();`
<br>


