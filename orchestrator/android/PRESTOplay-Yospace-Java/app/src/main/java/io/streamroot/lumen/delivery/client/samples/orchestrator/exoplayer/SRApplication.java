package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import androidx.multidex.MultiDexApplication;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;

public final class SRApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        LumenDeliveryClient.initializeApp(this);
    }
}
