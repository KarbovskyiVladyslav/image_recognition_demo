// #define VERBOSE

using UnityEngine;
using System.Runtime.InteropServices;
using System;
using UnityEditor;

public static class Receiver
{
    private static bool isActivated = false;

	[DllImport("__Internal")]
	private static extern void set_callbacks(   delegate_TargetTransform vtt, 
                                                delegate_FaceTransform vft, 
                                                delegate_MarkerTransform vmt, 
                                                delegate_ScanningFinished vsf, 
                                                delegate_SceneLoaded vsl );

	delegate void delegate_TargetTransform(Vector3 position, Quaternion rotation, Vector3 scale, float cameraFov, int targetIndex);
	delegate void delegate_FaceTransform(Vector3 position, Quaternion rotation, Vector3 scale, float cameraFov, string faceMeshData, int status);
	delegate void delegate_MarkerTransform(Vector3 position, Quaternion rotation, float cameraFov);
	delegate void delegate_ScanningFinished();
	delegate void delegate_SceneLoaded(int sceneIndex);

    [RuntimeInitializeOnLoadMethod]
    public static void Activate()
	{
        if (!isActivated)
        {
            set_callbacks(
                p_TargetTransform,
                p_FaceTransform,
                p_MarkerTransform,
                p_ScanningFinished,
                p_SceneLoaded);
            isActivated = true;
        }
    }

	[MonoPInvokeCallback(typeof(delegate_TargetTransform))]
	private static void p_TargetTransform(Vector3 position, Quaternion rotation, Vector3 scale, float cameraFov, int targetIndex)
	{
        EventBus.onTargetTracking?.Invoke(position, rotation, scale, cameraFov, targetIndex);
        //Debug.LogError("p_TargetTransform: " + position + "/" + rotation + "/" + scale + "/" + cameraFov + "/" + targetIndex);
    }

    [MonoPInvokeCallback(typeof(delegate_FaceTransform))]
	private static void p_FaceTransform(Vector3 position, Quaternion rotation, Vector3 scale, float cameraFov, string faceMeshData, int status)
	{
        //Debug.LogError("p_FaceTransform: " + position + "/" + rotation + "/" + scale + "/" + cameraFov + "/" + faceMeshData + "/"+ status);
        Vector3[] facemeshVertices = Utils.FaceVerticies(faceMeshData);
        EventBus.onFaceTracking?.Invoke(position, rotation, scale, cameraFov, facemeshVertices, status);
    }

    [MonoPInvokeCallback(typeof(delegate_MarkerTransform))]
    private static void p_MarkerTransform(Vector3 position, Quaternion rotation, float cameraFov)
    {
        EventBus.onMarkerTracking?.Invoke(position, rotation, cameraFov);
        //Debug.LogError("p_MarkerTransform: " + position + "/" + rotation + "/" + cameraFov);
    }

    [MonoPInvokeCallback(typeof(delegate_ScanningFinished))]
    private static void p_ScanningFinished()
    {
        EventBus.onScanningFinished?.Invoke();
        //Debug.LogError("p_ScanningFinished");
    }

    [MonoPInvokeCallback(typeof(delegate_SceneLoaded))]
    private static void p_SceneLoaded(int sceneIndex)
    {
        EventBus.onSceneLoaded?.Invoke(sceneIndex);
        //Debug.LogError("p_SceneLoaded: " + sceneIndex);
    }
}