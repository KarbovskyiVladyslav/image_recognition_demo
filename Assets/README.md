# AR-Renderer-Unity

Unity 2021.x or later is required.
Developed in Unity 2021.2.7f1.

## Image recognition
1. Create new scene. And set it build index ("File/Build Settings/Scenes in Build").
2. In hierarchy press RMB -> AR-Renderer/AR-Target-Tracking-Scene.
3. In hierarchy expand "AR-Target-Tracking-Scene". Create Target game object(RMB -> "AR-Renderer/Target") and set it as child of "AR-Target-Tracking-Scene/AR-Renderer-Scene". (You can create more than one target).
4. In hierarchy expand "AR-Target-Tracking-Scene/AR-Renderer-Scene/Target" and set whatever you want to display as child of "AR-Target-Tracking-Scene/AR-Renderer-Scene/Target/Displayer".
5. In hierarchy select "AR-Target-Tracking-Scene/AR-Renderer-Scene/Target/AR-Renderer-Target-Preview" and in Inspector set your target image ("Target Preview (Script)/Image"). (Image should be located in "Assets/Compiler/Targets" folder. If it is not exists, create it).
6. In hierarchy select "AR-Target-Tracking-Scene" and in inspector "Target Track Controller (Script)" in field "Target" set all you created targets and press "Generate" button (The scheme for compiler will be created).
7. Open project folder and go to "Assets/Compiler". Make sure all there is "Schemas" folder with files with same name as your scene build index, and "Targets" folder with you target images.
8. Depending on your system run DotMindCompiler (DotMindCompiler-win, DotMindCompiler-macos or DotMindCompiler-linux). (Make sure you are running it from project folder in explorer and not from Unity Editor).
9. Web server will be created and page will be opened in browser automatically (If this did not happen, open the page at the address in the console manually).
10. In browser on the page you will see a block for each scene with targets images and their indices.
11. If everything is correct press "Compile .mind file for <x> scene". You can check the compilation status under this button.
12. When compilation is finished you can close tab in browser and webserver console.
13. In "File/Build Settings" change target platform to WebGL.
14. In "Edit/Player Settings/Player/Resolution and Presentation" select "AR-Renderer" WebGL template.
15. In "Edit/Player Settings/Player/Publishing Settings" change compression to Disabled.
16. If necessary set base href (or leave it empty. By default address is "http(s)://{yourip} or {localhost}:3000/") (For example, if you set href to "exampleHref/", all links will point to "http(s)://{yourip} or {localhost}:3000/exampleHref/" by default. It will be useful for Github Pages for example);
17. Done.

## Surface recognition preparation
1. Create new scene. And set it build index ("File/Build Settings/Scenes in Build").
2. In hierarchy press RMB -> AR-Renderer/AR-Surface-Tracking-Scene.
3. In hierarchy expand "AR-Surface-Tracking-Scene". Create Target game object(RMB -> "AR-Renderer/Target") and set it as child of "AR-Surface-Tracking-Scene/AR-Renderer-Scene".
4. In hierarchy expand "AR-Surface-Tracking-Scene/AR-Renderer-Scene/Target" and set whatever you want to display as child of "AR-Surface-Tracking-Scene/AR-Renderer-Scene/Target/Displayer".
5. In hierarchy select "AR-Surface-Tracking-Scene" and in inspector "Surface Track Controller (Script)" in field "Target" set your target.
6. Create ui element for "AR-Renderer-Surface-Track-Controller/SurfaceTrackController (Script)/ScanSurface" function. (This function should be called manually to start scanning the surface). 
7. In "File/Build Settings" change target platform to WebGL.
8. In "Edit/Player Settings/Player/Resolution and Presentation" select "AR-Renderer" WebGL template.
9. In "Edit/Player Settings/Player/Publishing Settings" change compression to Disabled.
10. If necessary set base href (or leave it empty for default value) (by default address is "http(s)://{yourip} or {localhost}:3000/") (For example, if you set href to "exampleHref/", all links will point to "http(s)://{yourip} or {localhost}:3000/exampleHref/" by default. It will be useful for Github Pages for example);
11. Done.

## Surface recognition process
1. Place your phone parallel to the surface. It is preferable that it be some object (bussines card, copybook, etc.) and not a clean surface.
2. Press on "ScanSurface" ui element ("Surface recognition preparation" block, point 4).
3. Done.

## Face recognition
1. In hierarchy press RMB -> AR-Face-Tracking-Scene
2. In hierarch select "AR-Renderer-Face-Track-Controller/" and set whatever you need to display as child of "AR-Renderer-Scene" (For correct custom model tracking and animation it should be located as close to default facemesh as possible).
3. Change target platform to WebGL.
4. In "Edit/Player Settings/Player/Resolution and Presentation" select "AR-Renderer" WebGL template.
5. In "Edit/Player Settings/Player/Publishing Settings" change compression to Disabled.
6. If necessary set base href (or leave it empty for default value) (by default address is "http(s)://{yourip} or {localhost}:3000/") (For example, if you set href to "exampleHref/", all links will point to "http(s)://{yourip} or {localhost}:3000/exampleHref/" by default. It will be useful for Github Pages for example);
7. Done.

Additional information about animation of custom facemesh models you can find in "Assets/AR-Renderer/FaceMesh/Readme.md"


## Additional information
To track certain events, you can subscribe to the desired event using a static class EventBus ("Assets/AR-Renderer/Scripts/EventBus"). (For example: EventBus.onTargetFound += "Your function");
These events are invoked automatically.
For more information about events check "Assets/AR-Renderer/Scripts/EventBus.cs".

##Background from camera
If necessary, you can turn off the background from the camera. Select camer on the scene and change it background color alpha channel to 255.

##Static objects on scene
Only some game objects are relative to the AR space (like "Targets" for Targets and Surface recognition or "Scene" for Face recognition). Other objects which you have in hierarchy will be static and wil not be relative to the AR space.



