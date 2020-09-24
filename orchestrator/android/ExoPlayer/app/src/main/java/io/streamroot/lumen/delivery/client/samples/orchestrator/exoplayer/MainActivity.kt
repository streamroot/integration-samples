package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        launchButton.setOnClickListener {
            if (streamEditText.text.isBlank()) return@setOnClickListener
            PlayerActivity.makeIntent(this,
                PlayerActivity.PlayerActivityArgs(
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
    }
}
