package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.launchButton).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String stream = ((TextView)findViewById(R.id.streamEditText)).getText().toString();
                if (TextUtils.isEmpty(stream.trim())) return;

                final Intent i = PlayerActivity.makeIntent(MainActivity.this,
                        new PlayerActivity.PlayerActivityArgs(
                                ((TextView)findViewById(R.id.dcKeyET)).getText().toString(),
                                stream,
                                ((TextView)findViewById(R.id.orchPropET)).getText().toString()
                        )
                ).addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(i);
            }
        });
    }
}
