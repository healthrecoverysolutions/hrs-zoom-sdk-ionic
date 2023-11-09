package cordova.plugin.zoom;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import com.hrs.patient.MainActivity;
import com.hrs.patient.R;

import us.zoom.sdk.CustomizedMiniMeetingViewSize;
import us.zoom.sdk.NewMeetingActivity;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomUIService;

public class MyNewMeetingActivity extends NewMeetingActivity {

    private String appResourcesPackage = getPackageName();

//    @Override
//    protected int getLayout() {
//        return getResources().getIdentifier("my_new_meeting_layout", "layout", appResourcesPackage);
//        // return R.layout.my_new_meeting_layout;
//    }

    private static final String TAG = "ZoomIonicAngularPlugin";
    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.d(TAG, "Zoom oncreate "   + this);
        appResourcesPackage = getPackageName();
        super.onCreate(savedInstanceState);
        ImageView back = (ImageView ) findViewById(getResources().getIdentifier("imgMinimize", "id", appResourcesPackage));//(ImageView) findViewById(R.id.imgMinimize);

        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                    Log.d(TAG, "hurryaaa!!");
                minimiseAcitivity();
            }
        });
        //Toast.makeText(this, "MyNewMeetingActivity onCreate", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "Zoom on destroy " + this);
        super.onDestroy();
    }

    @Override
    protected void onPause() {
        Log.d(TAG, "Zoom on pause " + this);
        super.onPause();
    }

    @Override
    protected void onResume() {
        Log.d(TAG, "Zoom on resume " + this);
        super.onResume();
    }

    @Override
    public void finish() {
        Log.d(TAG, "Zoom on finish " + this);
        super.finish();
    }

    @Override
    public void onBackPressed() {
      //  super.onBackPressed();
        Log.d(TAG, "Zoom BAck Pressed " + this);
        minimiseAcitivity();
           }

    private void minimiseAcitivity() {
        Intent intent = new Intent(this, MainActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        this.startActivity(intent);
        ZoomUIService zoomUIService =  ZoomSDK.getInstance().getZoomUIService();
        // ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(0, 0, 360, 540));
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        zoomUIService.showMiniMeetingWindow();

    }

}
