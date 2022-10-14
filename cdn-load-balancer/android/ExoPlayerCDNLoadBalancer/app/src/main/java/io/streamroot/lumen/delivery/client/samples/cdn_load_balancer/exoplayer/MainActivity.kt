package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.exoplayer.databinding.ActivityMainBinding

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
                        orchPropET.text.toString()
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
