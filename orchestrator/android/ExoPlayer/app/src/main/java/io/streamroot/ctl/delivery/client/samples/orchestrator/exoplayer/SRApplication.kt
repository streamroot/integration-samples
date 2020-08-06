package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer

import androidx.multidex.MultiDexApplication
import io.streamroot.ctl.delivery.client.core.CTLDeliveryClient

class SRApplication: MultiDexApplication() {

    override fun onCreate() {
        super.onCreate()
        CTLDeliveryClient.initializeApp(this)
    }
}