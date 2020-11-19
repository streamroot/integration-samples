package io.streamroot.lumen.delivery.client.samples.orchestrator.prestoplay;

import androidx.multidex.MultiDexApplication;

import com.castlabs.android.PlayerSDK;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;

public final class SRApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        LumenDeliveryClient.initializeApp(this);
        PlayerSDK.init(this);
    }
}
