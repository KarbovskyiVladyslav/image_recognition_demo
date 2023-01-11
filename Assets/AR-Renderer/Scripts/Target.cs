using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Target : MonoBehaviour
{
    [SerializeField] private TargetPreview targetPreview;
    [SerializeField] private GameObject obj;

    public TargetPreview TargetPreview { get { return targetPreview; } }

    public void DisplayPreview(bool state)
    {
        if (targetPreview == null) { return; }

        targetPreview.Display(state);
    }

    public void DisplayObj(bool state)
    {
        if (obj == null) { return; }

        if (obj.activeSelf != state)
        {
            obj.SetActive(state);
        }
    }
}