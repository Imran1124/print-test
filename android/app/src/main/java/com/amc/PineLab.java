package com.amc;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.content.ComponentName;
import android.app.Activity;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import java.util.Map;
import com.facebook.react.bridge.Callback;
import java.util.HashMap;

public class PineLab extends ReactContextBaseJavaModule {

  private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
  private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
  private static final int REQUEST_CODE = 1004;

  private Promise promiseIntent;

  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
      if (requestCode == REQUEST_CODE) {
        if (promiseIntent != null) {
          if (resultCode == Activity.RESULT_CANCELED) {
            promiseIntent.reject(E_FAILED_TO_SHOW_PICKER, "Payment Cancelled");
          } else if (resultCode == Activity.RESULT_OK) {
            Bundle extras = intent.getExtras();
            String response = extras.getString("RESPONSE_DATA");
            promiseIntent.resolve(response);
          }

          promiseIntent = null;
        }
      }
    }
  };

  PineLab(ReactApplicationContext reactContext) {
    super(reactContext);

    // Add the listener for `onActivityResult`
    reactContext.addActivityEventListener(mActivityEventListener);
  }

  @Override
  public String getName() {
    return "PineLab";
  }

  @ReactMethod
  public void onPaymentStart(String payloadJson, Promise promise) {
    Activity currentActivity = getCurrentActivity();

    if (currentActivity == null) {
      promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
      return;
    }

    // Store the promise to resolve/reject when picker returns data
    promiseIntent = promise;

    // String payloadJson =
    // "{\"Detail\":{\"BillingRefNo\":\"TX12345678\",\"PaymentAmount\":9900,\"TransactionType\":4001},\"Header\":{\"ApplicationId\":\"26b69bdbac7a4e3aac78d727a9210fb6\",\"UserId\":\"1234\",\"MethodId\":\"1001\",\"VersionNo\":\"1.0\"}}";

    try {
      final Intent intent = new Intent("com.pinelabs.masterapp.HYBRID_REQUEST");
      intent.setPackage("com.pinelabs.masterapp");
      intent.putExtra("REQUEST_DATA", payloadJson);
      intent.putExtra("packageName", "com.amc");
      currentActivity.startActivityForResult(intent, REQUEST_CODE);
    } catch (Exception e) {
      promiseIntent.reject(E_FAILED_TO_SHOW_PICKER, e);
      promiseIntent = null;
    }
  }
}