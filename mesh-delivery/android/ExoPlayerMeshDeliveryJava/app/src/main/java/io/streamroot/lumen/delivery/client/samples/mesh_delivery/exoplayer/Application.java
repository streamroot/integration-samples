package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer;

import androidx.multidex.MultiDexApplication;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;

public class Application extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        LumenDeliveryClient.initializeApp(this);
    }
}