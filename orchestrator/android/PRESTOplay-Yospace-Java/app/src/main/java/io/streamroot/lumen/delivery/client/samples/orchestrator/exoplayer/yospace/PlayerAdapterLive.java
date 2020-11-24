package io.streamroot.lumen.delivery.client.samples.orchestrator.exoplayer.yospace;

import android.app.Activity;

import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.metadata.MetadataOutput;
import com.google.android.exoplayer2.metadata.emsg.EventMessage;
import com.google.android.exoplayer2.metadata.id3.BinaryFrame;
import com.yospace.android.hls.analytic.SessionLive;
import com.yospace.hls.TimedMetadata;
import com.yospace.util.event.EventSourceImpl;

public class PlayerAdapterLive extends PlayerAdapter implements MetadataOutput
{
    private final EventSourceImpl<TimedMetadata> mMetadataSource = new EventSourceImpl<>();

    /**
     * Return an instance of PlayerAdapterLive
     */
    public PlayerAdapterLive(Activity activity)
    {
        super(activity);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.android.exoplayer2.metadata.MetadataRenderer.Output#onMetadata(MetaData)
     */
    @Override
    public void onMetadata(Metadata metadata)
    {
        String ymid = null;
        String yseq = null;
        String ytyp = null;
        String ydur = null;
        String yprg = null;

        for (int i = 0; i < metadata.length(); i++)
        {
            Metadata.Entry entry = metadata.get(i);
            if (entry instanceof BinaryFrame)
            {
                BinaryFrame binFrame = (BinaryFrame) entry;

                if ("YMID".equals(binFrame.id)) {
                    ymid = new String(binFrame.data);
                }
                else if ("YSEQ".equals(binFrame.id)) {
                    yseq = new String(binFrame.data);
                }
                else if ("YTYP".equals(binFrame.id)) {
                    ytyp = new String(binFrame.data);
                }
                else if ("YDUR".equals(binFrame.id)) {
                    ydur = new String(binFrame.data);
                }
                else if ("YPRG".equals(binFrame.id)) {
                    yprg = new String(binFrame.data);
                }
            }
            else if (entry instanceof EventMessage)
            {
                EventMessage msg = (EventMessage)entry;

                if (msg.schemeIdUri.equalsIgnoreCase("urn:yospace:a:id3:2016"))
                {
                    String msgData = new String(msg.messageData);
                    String[] frames = msgData.split(",");
                    for (String frame : frames)
                    {
                        String[] keys = frame.split("=");
                        switch (keys[0].toUpperCase())
                        {
                            case "YMID":
                                ymid = keys[1];
                                break;

                            case "YSEQ":
                                yseq = keys[1];
                                break;

                            case "YTYP":
                                ytyp = keys[1];
                                break;

                            case "YDUR":
                                ydur = keys[1];
                                break;

                            case "YPRG":
                                yprg = keys[1];
                                break;
                        }
                    }
                }
            }
        }

        TimedMetadata timedMetadata = null;
        if (ymid != null && yseq != null && ytyp != null && ydur != null) {
            timedMetadata = TimedMetadata.createFromMetadata(ymid, yseq, ytyp, ydur);
        }
        else if (yprg != null)
        {
            timedMetadata = TimedMetadata.createFromMetadata(yprg, 0.0f);
        }

        if (timedMetadata != null) {
            mMetadataSource.notify(timedMetadata);
        }
    }

    /**
     * Register a session with this PlayerAdapter
     */
    public void setSession(SessionLive session)
    {
        super.setSession(session);

        // Register the session for TimedMetadata events from the Proxy
        session.setTimedMetadataSource(mMetadataSource);
    }
}
