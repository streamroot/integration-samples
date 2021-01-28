package io.streamroot.dna.samples.exoplayer

import androidx.multidex.MultiDexApplication
import io.streamroot.dna.core.DnaClient

class SRApplication: MultiDexApplication() {
    override fun onCreate() {
        super.onCreate()
        DnaClient.initializeApp(this)
    }
}