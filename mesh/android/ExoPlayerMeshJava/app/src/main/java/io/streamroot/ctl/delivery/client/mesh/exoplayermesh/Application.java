package io.streamroot.ctl.delivery.client.mesh.exoplayermesh;

import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;

public class Application extends android.app.Application {
    @Override
    public void onCreate() {
        super.onCreate();
        LumenDeliveryClient.initializeApp(this)
    }
}