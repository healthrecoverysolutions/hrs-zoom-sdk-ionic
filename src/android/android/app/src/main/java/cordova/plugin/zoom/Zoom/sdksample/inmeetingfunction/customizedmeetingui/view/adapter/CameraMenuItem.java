package cordova.plugin.zoom.Zoom.sdksample.inmeetingfunction.customizedmeetingui.view.adapter;

import cordova.plugin.zoom.Zoom.sdksample.inmeetingfunction.customizedmeetingui.view.adapter.SimpleMenuItem;

public class CameraMenuItem extends SimpleMenuItem {
    private String cameraId;
    public CameraMenuItem(int action, String label, String cameraId) {
        super(action, label);
        this.cameraId = cameraId;
    }
    public String getCameraId() {
        return cameraId;
    }

    public void setCameraId(String cameraId) {
        this.cameraId = cameraId;
    }
}

