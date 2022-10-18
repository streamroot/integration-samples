package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer;

import androidx.multidex.MultiDexApplication;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;

public final class Application extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        LumenDeliveryClient.initializeApp(this);
    }
}
