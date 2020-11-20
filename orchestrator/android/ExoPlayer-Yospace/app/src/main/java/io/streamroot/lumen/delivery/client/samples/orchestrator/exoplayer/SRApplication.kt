package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer

import androidx.multidex.MultiDexApplication
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient

class SRApplication: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        LumenDeliveryClient.initializeApp(this)
    }
}