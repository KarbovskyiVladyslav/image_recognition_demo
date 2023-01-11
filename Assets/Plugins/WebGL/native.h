struct Vector3 {
	float x,y,z;
};

struct Quaternion {
	float x,y,z,w;
};

//------------------------
//position, rotation, scale, camera field of view, targetIndex;
//------------------------
typedef void (*callback_TargetTransform)(	struct Vector3, 
											struct Quaternion, 
											struct Vector3, 
											float, 
											int32_t tIdx );
											
//------------------------
//position, rotation, scale, camera field of view,  facemesh vertices array as string;
//------------------------
typedef void (*callback_FaceTransform)(		struct Vector3, 
											struct Quaternion, 
											struct Vector3, 
											float cameraFOV, 
											const char *a,
											int32_t status);

//------------------------
//position, rotation, camera field of view, 
//------------------------
typedef void (*callback_MarkerTransform)(	struct Vector3, 
											struct Quaternion, 
											float);

//------------------------
//------------------------
typedef void (*callback_ScanningFinished)();

//------------------------
//scene index
//------------------------
typedef void (*callback_SceneLoaded)(int32_t);