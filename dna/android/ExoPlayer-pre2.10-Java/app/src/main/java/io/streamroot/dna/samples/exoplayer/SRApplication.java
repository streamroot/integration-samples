package io.streamroot.dna.samples.exoplayer;

import androidx.multidex.MultiDexApplication;

import io.streamroot.dna.core.DnaClient;

public final class SRApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        DnaClient.initializeApp(this);
    }
}