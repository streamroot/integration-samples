package io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import io.streamroot.lumen.delivery.client.samples.mesh_delivery.exoplayer.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ActivityMainBinding.inflate(layoutInflater).apply {
            this.launchButton.setOnClickListener {
                if (streamEditText.text.isBlank()) return@setOnClickListener;
                PlayerActivity.makeIntent(
                    this@MainActivity, PlayerActivity.PlayerActivityArgs(
                        dcKeyET.text.toString(),
                        streamEditText.text.toString(),
                        meshPropET.text.toString()
                    )
                ).apply {
                    addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
                    addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                }.run {
                    startActivity(this)
                }
            }

            setContentView(this.root)
        }
    }
}