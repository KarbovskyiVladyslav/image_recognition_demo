using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MarkerTrackController : MonoBehaviour
{
    const float POSITION_MULTUPLAYER = 100;
    [SerializeField] private Camera cam;
    [SerializeField] private Transform cameraTransform;

    [DllImport("__Internal")]
    protected static extern int LoadScene(string message, string index, string targetImg);

    private void Start()
    {
        int sceneIndex = SceneManager.GetActiveScene().buildIndex;
        LoadScene("marker", sceneIndex.ToString(), null);
    }

    private void OnEnable()
    {
        Receiver.Activate();
        EventBus.onMarkerTracking += Tracking;
    }

    private void OnDisable()
    {
        EventBus.onMarkerTracking -= Tracking;
        LoadScene("stop", null, null);
    }

    void Tracking(Vector3 position, Quaternion rotation, float cameraFOV)
    {
        cameraTransform.position = new Vector3(position.x, position.z, -position.y) * POSITION_MULTUPLAYER;
        Quaternion rotationConverted = new Quaternion(rotation.x, -rotation.z, rotation.y, rotation.w);
        cameraTransform.rotation = rotationConverted;
        cam.fieldOfView = cameraFOV;
    }
}