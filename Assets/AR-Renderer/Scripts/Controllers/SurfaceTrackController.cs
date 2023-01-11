using System.Runtime.InteropServices;
using UnityEngine.SceneManagement;

public class SurfaceTrackController : TargetTrackController
{
    [DllImport("__Internal")]
    private static extern int ScanSurfaceCmd(string sceneIndex, string controller);

    protected override void OnValidate() {}

    protected override void Start()
    {
        int sceneIndex = SceneManager.GetActiveScene().buildIndex;
        LoadScene("surface", sceneIndex.ToString(), "1");
        HideAllTargets();
    }

    //Must be called manually to start scanning the surface
    public void ScanSurface() 
    {
        int sceneIndex = SceneManager.GetActiveScene().buildIndex;

        ScanSurfaceCmd(sceneIndex.ToString(), gameObject.name);
    }
}
