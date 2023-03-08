package io.streamroot.lumen.delivery.client.samples.cdn_load_balancer.theoplayer;

import android.content.Context;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.multidex.MultiDexApplication;
import io.streamroot.lumen.delivery.client.core.LumenDeliveryClient;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Application extends MultiDexApplication {
  private static final String THEO_LICENSE_STRING = "Put your license here";

  private static @Nullable String THEO_LICENSE_ASSET(@NonNull final Context context) {
    BufferedReader inputStream = null;
    String license = null;
    try {
      inputStream =
          new BufferedReader(new InputStreamReader(context.getAssets().open("theo_license.txt")));
      license = inputStream.readLine();
    } catch (Throwable ignored) {
    } finally {
      try {
        if (inputStream != null) inputStream.close();
      } catch (Throwable ignored) {
      }
    }
    return license;
  }

  public static String THEO_LICENSE(@NonNull final Context context) {
    @Nullable final String assetLicense = THEO_LICENSE_ASSET(context);
    return TextUtils.isEmpty(assetLicense) ? THEO_LICENSE_STRING : assetLicense;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    LumenDeliveryClient.initializeApp(this);
  }
}
