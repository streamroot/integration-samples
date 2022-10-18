package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer

import androidx.multidex.MultiDexApplication
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient

class Application : MultiDexApplication() {
    override fun onCreate() {
        super.onCreate()
        LumenDeliveryClient.initializeApp(this)
    }
}