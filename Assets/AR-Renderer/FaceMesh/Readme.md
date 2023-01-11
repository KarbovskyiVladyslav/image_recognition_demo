## To animate a custom model, follow these steps:

## In Blender
1. Open "Assets/AR-Renderer/FaceMesh/Blender/FaceRig.blend" file in [Blender](https://www.blender.org/download/).
2. In blender's top menu Press "File" -> "Save As" and save it to any folder. (This is necessary so that the file "FaceRig.blend" remains unchanged for further use).
3. In blender's top menu Press "File" -> "Import" and import your model into blender's workspace.
4. Located your model as close to default facemesh as possible (Scale("S" - key) and move("G" - key) if it necessary). The most important thing in this step is to match your model's eyes and mouth to the default facemesh model's eyes and mouth.
5. In blender's default layout in top right corner you can find "Scene collection" window, where you can hide default facemesh. You can do it, because you don't need it anymore.
6. Click on you model and then with pressed Left Shift button click on any bone.
7. Press Right CTRL + P. In opened menu ("Set Parent To") under "Armature Deform" section click on "With Automatic Weights".
9. Press Right CTRL + A. In opened menu ("Apply") click on "All Transforms".
10. If you have an expirience with blender, you can improve model weights or delete bones which you don't need, but generally model is ready and can be imported. (Blender's top menu "File" -> "Import").

Additional information:
1. Don't move bones, otherwise you model will be broken in Unity.
2. You can use only bones which you need. Other bones can be deleted.

## In Unity
1. Import your model into Unity.
2. Place it on scene (For more detailed information check "Face recognition" section in "Readme.md" file in project "Assets" folder).
3. In hierarchy select "FaceMesh" game object and expand "Facemesh Model Animation (Script)" (if it's collapsed). This script has a field "Bones". It's an array of Transforms.
4. In top right corner you can find small lock icon. Press it and "Inspector" will be locked.
5. In hierarchy select your model, expand it and expand "Facemesh_vRig" child game object.
6. Select all child bones (Game objects with names 0, 1, 2, 3, ... etc) and drag and drop them into Bones field (from step 3).
7. In top right corner you can find small lock icon. Press it again and "Inspector" will be unlocked.
8. Done.

