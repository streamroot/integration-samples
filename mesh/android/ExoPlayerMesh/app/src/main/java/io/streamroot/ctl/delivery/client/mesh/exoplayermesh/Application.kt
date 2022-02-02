package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import androidx.multidex.MultiDexApplication
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient

class Application : MultiDexApplication() {
    override fun onCreate() {
        super.onCreate()
        LumenDeliveryClient.initializeApp(this)
    }
}