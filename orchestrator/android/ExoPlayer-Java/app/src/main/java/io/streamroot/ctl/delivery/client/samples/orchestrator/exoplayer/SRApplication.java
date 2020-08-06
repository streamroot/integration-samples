package io.streamroot.ctl.delivery.client.samples.orchestrator.exoplayer;

import androidx.multidex.MultiDexApplication;

import io.streamroot.ctl.delivery.client.core.CTLDeliveryClient;

public final class SRApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        CTLDeliveryClient.initializeApp(this);
    }
}
