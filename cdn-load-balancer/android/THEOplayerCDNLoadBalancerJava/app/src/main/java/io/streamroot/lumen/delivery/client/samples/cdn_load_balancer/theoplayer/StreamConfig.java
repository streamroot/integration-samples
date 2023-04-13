package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.theoplayer;

import android.content.Context;
import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import io.streamroot.lumen.delivery.client.core.LumenLogLevel;

public class StreamConfig implements Parcelable {
  public static final Creator<StreamConfig> CREATOR =
      new Creator<StreamConfig>() {
        @Override
        public StreamConfig createFromParcel(Parcel in) {
          return new StreamConfig(in);
        }

        @Override
        public StreamConfig[] newArray(int size) {
          return new StreamConfig[size];
        }
      };

  private static boolean isValidIntentParam(Uri intentUri, String param) {
    return !TextUtils.isEmpty(intentUri.getQueryParameter(param));
  }

  public static final StreamConfig createFromUri(@NonNull Context context, @NonNull Uri uri) {
    final StreamConfig sc = new StreamConfig();
    try {
      sc.autostart = uri.getQueryParameter("autostart").equals("true");
    } catch (Exception e) {
      sc.autostart = false;
    }
    try {
      sc.isStreamrootEnabled = uri.getQueryParameter("isStreamrootEnabled").equals("true");
    } catch (Exception e) {
      sc.isStreamrootEnabled = false;
    }
    sc.streamrootKey =
        isValidIntentParam(uri, "streamrootKey")
            ? uri.getQueryParameter("streamrootKey")
            : context.getString(R.string.streamroot_key_prefill);
    sc.contentId = isValidIntentParam(uri, "contentId") ? uri.getQueryParameter("contentId") : null;
    sc.property = isValidIntentParam(uri, "property") ? uri.getQueryParameter("property") : null;
    sc.contentUrl =
        isValidIntentParam(uri, "contentUrl")
            ? uri.getQueryParameter("contentUrl")
            : context.getString(R.string.stream_url_prefill);
    sc.logLevel =
        isValidIntentParam(uri, "logLevel")
            ? LumenLogLevel.valueOf(uri.getQueryParameter("logLevel"))
            : LumenLogLevel.ERROR;
    sc.latency = isValidIntentParam(uri, "latency") ? uri.getQueryParameter("latency") : null;
    return sc;
  }

  public boolean autostart;
  public boolean isStreamrootEnabled;
  public @NonNull String streamrootKey;
  public @Nullable String contentId;
  public @Nullable String property;
  public @NonNull String contentUrl;
  public @NonNull LumenLogLevel logLevel;
  public @Nullable String latency;

  private StreamConfig() {}

  public StreamConfig(
      boolean autostart,
      boolean isStreamrootEnabled,
      @NonNull String srkey,
      @Nullable String contentId,
      @Nullable String property,
      @NonNull String manifest,
      @NonNull LumenLogLevel logLevel,
      @Nullable String latency) {
    this.autostart = autostart;
    this.isStreamrootEnabled = isStreamrootEnabled;
    this.streamrootKey = srkey;
    this.contentId = contentId;
    this.property = property;
    this.contentUrl = manifest;
    this.logLevel = logLevel;
    this.latency = latency;
  }

  protected StreamConfig(Parcel in) {
    autostart = in.readByte() != 0;
    isStreamrootEnabled = in.readByte() != 0;
    streamrootKey = in.readString();
    contentId = in.readString();
    property = in.readString();
    contentUrl = in.readString();
    logLevel = LumenLogLevel.valueOf(in.readString());
    latency = in.readString();
  }

  @Override
  public void writeToParcel(Parcel dest, int flags) {
    dest.writeByte((byte) (autostart ? 1 : 0));
    dest.writeByte((byte) (isStreamrootEnabled ? 1 : 0));
    dest.writeString(streamrootKey);
    dest.writeString(contentId);
    dest.writeString(property);
    dest.writeString(contentUrl);
    dest.writeString(logLevel.name());
    dest.writeString(latency);
  }

  @Override
  public int describeContents() {
    return 0;
  }
}
