using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(TargetTrackController))]

public class TargetTrackControllerEditor : Editor
{
    public override void OnInspectorGUI()
    {
        TargetTrackController ttc = (TargetTrackController)target;

        DrawDefaultInspector();

        if (GUILayout.Button("Generate"))
        {
            ttc.CreateScheme();
        }
    }
}
