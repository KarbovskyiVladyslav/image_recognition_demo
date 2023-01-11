using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.SceneManagement;

public class FaceTrackController : MonoBehaviour
{
    [DllImport("__Internal")]
    protected static extern int LoadScene(string message, string index, string targetImg);
    const float SCALE_FACTOR = 0.115f;

    [SerializeField] private FaceMesh faceMesh;
    [SerializeField] private bool hideFacemesh = true;
    [SerializeField] private bool alwaysDisplayFacemesh = false;
    [SerializeField] private bool fixedCameraFieldOfView = false;
    [SerializeField] private Transform scene;
    [SerializeField] private Camera cam;
    [SerializeField] private Constraints movementConstraints;
    [SerializeField] private Constraints rotationConstraints;

    private void OnEnable()
    {
        Receiver.Activate();
        EventBus.onFaceTracking += Tracking;
    }

    private void OnDisable()
    {
        LoadScene("stop", null, null);
        EventBus.onFaceTracking -= Tracking;
    }

    private void Start()
    {
        int sceneIndex = SceneManager.GetActiveScene().buildIndex;
        LoadScene("face", sceneIndex.ToString(), null);

        faceMesh.HideFacemesh(alwaysDisplayFacemesh ? false : hideFacemesh);
        Debug.LogError(cam.fieldOfView);
        Debug.LogError(transform.position);
        Debug.LogError(scene.transform.position);
        Debug.LogError(scene.transform.localScale);
    }

    protected void Tracking(Vector3 position, Quaternion rotation, Vector3 scale, float cameraFOV, Vector3[] facemeshData, int status)
    {
        if (faceMesh != null && faceMesh.gameObject.activeSelf)
        {
            faceMesh.RecalculateFaceMesh(facemeshData);
        }

        Vector3 positionConverted = new Vector3(movementConstraints.x ? scene.position.x : -position.x,
                                                movementConstraints.y ? scene.position.y : position.y,
                                                movementConstraints.z ? scene.position.z : position.z);
        Quaternion rotationConstr = new Quaternion(rotationConstraints.x ? scene.rotation.x : rotation.x,
                                                    rotationConstraints.y ? scene.rotation.y : rotation.y,
                                                    rotationConstraints.z ? scene.rotation.z : rotation.z,
                                                    rotation.w);
        Vector3 scaleConverted = scale * SCALE_FACTOR;

        if (status == 1)
        {
            if (!scene.gameObject.activeSelf)
            {
                scene.gameObject.SetActive(true);
            }

            scene.position = positionConverted;
            scene.rotation = rotationConstr;
            scene.localScale = scaleConverted;
            cam.fieldOfView = fixedCameraFieldOfView ? cam.fieldOfView : cameraFOV;
        }
        else
        {
            if (scene.gameObject.activeSelf)
            {
                scene.gameObject.SetActive(alwaysDisplayFacemesh);
            }
        }
    }

    [System.Serializable]
    public struct Constraints
    {
        public bool x;
        public bool y;
        public bool z;
    }
}