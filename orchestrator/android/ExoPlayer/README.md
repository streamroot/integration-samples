# Streamroot Android Orchestrator ExoPlayer Kotlin

## Common integration

Make sure you start with the [common Kotlin integration](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/README_kotlin.kt)

## Specific integration override

### 3. Bridge between your Player and the delivery client

In order to work perfectly, the SDK instances need to interact with the player and listen to its events.  
Please add the following class to your project :

- [PlayerInteractor](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/ExoPlayer/app/src/main/java/io/streamroot/lumen/delivery/client/samples/orchestrator/exoplayer/ExoPlayerInteractor.kt)

## Additional steps

-> ExoPlayer requires targetCompatibility java 8.
