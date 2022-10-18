package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer

import androidx.multidex.MultiDexApplication
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient

class Application : MultiDexApplication() {
    override fun onCreate() {
        super.onCreate()
        LumenDeliveryClient.initializeApp(this)
    }
}