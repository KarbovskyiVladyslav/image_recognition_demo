#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;

class BuildPostprocessor : IPostprocessBuildWithReport
{
    public int callbackOrder { get { return 0; } }

    public void OnPostprocessBuild(BuildReport report)
    {
        FileUtil.DeleteFileOrDirectory("Assets/WebGLTemplates/AR-Renderer/Targets");
        FileUtil.DeleteFileOrDirectory("Assets/WebGLTemplates/AR-Renderer/Targets.meta");
    }
}
#endif