package io.streamroot.ctl.delivery.client.mesh.exoplayermesh

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import io.streamroot.ctl.delivery.client.mesh.exoplayermesh.databinding.ActivityMainBinding
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient
import io.streamroot.lumen.delivery.client.core.LumenLogLevel

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ActivityMainBinding.inflate(layoutInflater).apply {
            this.playButton.setOnClickListener {
                startActivity(Intent(this@MainActivity, PlayerActivity::class.java))
            }

            setContentView(this.root)
        }
    }
}