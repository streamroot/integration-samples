# Streamroot Android Orchestrator ExoPlayer Yospace Java

## Common integration

Make sure you start with the [common Java integration](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/README.md)

## Specific integration override

### 3. Bridge between your Player and the delivery client.

In order to work perfectly, the SDK instances need to interact with the player and listen to its events.  
Please add the following class to your project :

- [PlayerInteractor](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/ExoPlayer-Yospace-Java/app/src/main/java/io/streamroot/lumen/delivery/client/samples/orchestrator/exoplayer/ExoPlayerInteractor.java)

## Additional steps

-> ExoPlayer requires targetCompatibility java 8.  
-> URLs are hardcoded in the YospaceModule and mode is hardcoded in PlayerActivity

```java
private static final Session.PlaybackMode YOSPACE_MODE = Session.PlaybackMode.LIVE;
```

-> You can find the missing files (adapters, policy impl, etc), inside the Yospace SDK sample application.