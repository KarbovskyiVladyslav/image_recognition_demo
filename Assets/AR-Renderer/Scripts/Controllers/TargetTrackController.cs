using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.SceneManagement;

public class TargetTrackController : MonoBehaviour
{
    [SerializeField] private Target[] targets;

    const float SCALE_FACTOR = 0.115f;
    [DllImport("__Internal")]
    protected static extern int LoadScene(string message, string index, string targetImg);

    [SerializeField] private Camera cam;

    int currentTarget = -1;
    Vector3 targetPos;
    Quaternion targetRot;
    Vector3 targetSc;

    [SerializeField] private float transformLerpSpeed;

    protected void OnEnable()
    {
        Receiver.Activate();
        EventBus.onTargetTracking += Tracking;
    }

    private void OnDisable()
    {
        EventBus.onTargetTracking -= Tracking;
        LoadScene("stop", null, null);
    }

    protected virtual void Start()
    {
        int sceneIndex = SceneManager.GetActiveScene().buildIndex;
        LoadScene("image", sceneIndex.ToString(), targets.Length.ToString());
        HideAllTargets();
    }

    private void FixedUpdate()
    {
        if (currentTarget != -1)
        {
            targets[currentTarget].transform.position = Vector3.Lerp(targets[currentTarget].transform.position, targetPos, Time.deltaTime * transformLerpSpeed);
            targets[currentTarget].transform.rotation = Quaternion.Lerp(targets[currentTarget].transform.rotation, targetRot, Time.deltaTime * transformLerpSpeed);
            targets[currentTarget].transform.localScale = Vector3.Lerp(targets[currentTarget].transform.localScale, targetSc, Time.deltaTime * transformLerpSpeed);
        }
    }

    protected void Tracking(Vector3 position, Quaternion rotation, Vector3 scale, float cameraFOV, int targetIndex)
    {
        Quaternion rotationConverted = new Quaternion(rotation.x, -rotation.y, -rotation.z, rotation.w);
        Vector3 scaleConverted = scale * SCALE_FACTOR;

        int ct = -1;
        for (int i = 0; i < targets.Length; i++)
        {
            if (targetIndex == -1)
            {
                targets[i].DisplayObj(false);
            }
            else
            {
                if (i == targetIndex)
                {
                    targets[i].DisplayObj(true);
                    if (currentTarget == -1)
                    {
                        currentTarget = i;
                        targets[i].transform.position = position;
                        targets[i].transform.rotation = rotationConverted;
                        targets[i].transform.localScale = scaleConverted;
                    }

                    targetPos = position;
                    targetRot = rotationConverted;
                    targetSc = scaleConverted;

                    cam.fieldOfView = cameraFOV;
                    ct = i;
                }
                else
                {
                    targets[i].DisplayObj(false);
                }
            }
        }
        currentTarget = ct;
    }

    protected void HideAllTargets()
    {
        for (int i = 0; i < targets.Length; i++)
        {
            targets[i].DisplayObj(false);
            targets[i].DisplayPreview(false);
        }
    }

    protected virtual void OnValidate()
    {
        CreateScheme();
    }

    public void CreateScheme()
    {
        int buildIndex = SceneManager.GetActiveScene().buildIndex;
        if (buildIndex < 0)
        {
            Debug.LogError("Invalid scene build index (" + buildIndex + "). The scheme for scene has not been created.");
            return;
        }
        DotMindSchemasController.CreateSchema(SceneManager.GetActiveScene().buildIndex, targets);
        Debug.Log("The scheme for scene has been created.");
    }
}