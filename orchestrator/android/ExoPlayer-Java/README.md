# Streamroot Android Orchestrator ExoPlayer Java
## Common integration

Please start with the [common Java integration](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/README.kt)

## Specific integration override

### 3. Bridge between your Player and the delivery client.

In order to work perfectly, the SDK instances need to interact with the player and listen to its events.  
Please add the following class to your project :

- [QosModule](https://github.com/streamroot/streamroot-samples/blob/master/orchestrator/android/ExoPlayer-Java/app/src/main/java/io/streamroot/lumen/delivery/client/samples/orchestrator/exoplayer/ExoPlayerQosModule.java)
