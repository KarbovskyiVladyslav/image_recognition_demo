using UnityEngine;

public class FacemeshModelAnimation : MonoBehaviour
{
    public Transform[] bones;

    public void Animate(Vector3[] vertices) {
        for (int i = 0; i < bones.Length; i++)
        {
            if (bones[i])
            {
                int targetVertex = int.Parse(bones[i].name);
                CalculateBonePosition(bones[i], vertices[targetVertex]);
            }
        }
    }

    private void CalculateBonePosition(Transform bone, Vector3 vertexPosition) {
        bone.position = vertexPosition;
    }
}