(function(){var e={4129:function(e){const t=512;async function n(e){let t=document.createElement("video");if(t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("ref","video"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.zIndex="-2",navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)return await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:e}}).then((e=>(t.addEventListener("loadedmetadata",(()=>{t.setAttribute("width",t.videoWidth+"px"),t.setAttribute("height",t.videoHeight+"px"),i(t),window.addEventListener("resize",(()=>{i(t)}))})),t.srcObject=e,t))).catch((e=>{throw e}))}function r(e){let n=document.createElement("canvas");n.style.display="none",n.width=t,n.height=e.videoHeight/e.videoWidth*n.width,n.getContext("2d").drawImage(e,0,0,n.width,n.height);let r=n.toDataURL("image/jpeg");return r}function i(e){let t,n,r=e?.parentElement;if(!e||!r)return;const i=e.videoWidth/e.videoHeight,a=r.clientWidth/r.clientHeight;i>a?(n=r.clientHeight,t=n*i):(t=r.clientWidth,n=t/i),e.style.top=-(n-r.clientHeight)/2+"px",e.style.left=-(t-r.clientWidth)/2+"px",e.style.width=t+"px",e.style.height=n+"px"}function a(e){if(e&&null!=e){const t=e.srcObject.getTracks();t.forEach((function(e){e.stop()})),e.remove()}}e.exports={CreateCameraVideo:n,TakePhoto:r,StopVideo:a}},3861:function(e){const t="#scanningOverlay",n="#loadingOverlay",r=2,i=2,a=.001,o=1e3,s=30;function c(e,c){return new window.MINDAR.IMAGE.MindARThree({container:c,imageTargetSrc:e,uiScanning:t,uiLoading:n,warmupTolerance:r,missTolerance:i,filterMinCF:a,filterBeta:o,maxTrack:s})}function u(e){return new window.MINDAR.FACE.MindARThree({container:e,uiScanning:t,uiLoading:n})}e.exports={MindArTarget:c,MindArFace:u}},207:function(e,t,n){"use strict";var r=n(9242),i=n(3396);const a={id:"app"};function o(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(n)])}var s=n(89);const c={},u=(0,s.Z)(c,[["render",o]]);var d=u,l=n(2483);const h={id:"app",ref:"app"},f={id:"container",class:"fixed",ref:"arContainer"},w={style:{display:"block"},id:"unity-canvas",class:"fixed",ref:"uc"},m=["innerHTML"],p=["innerHTML"],S=["innerHTML"];function g(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>o.SetFullscreen(!0)),ref:"fullscreenBtn",id:"fullscreenBtn"}," Fullscreen ",512),(0,i._)("div",f,[(0,i._)("canvas",w,null,512),((0,i.wg)(),(0,i.j4)((0,i.LL)(o.GetSceneComponent()),{sceneData:a.currentScene,key:a.currentScene.sceneIndex},null,8,["sceneData"]))],512),a.ShowLoading?((0,i.wg)(),(0,i.iD)("div",{key:0,id:"uiScreeen",class:"fixed",innerHTML:a.loadingIndicatorHTML},null,8,m)):(0,i.kq)("",!0),a.ShowScanning?((0,i.wg)(),(0,i.iD)("div",{key:1,id:"uiScreeen",class:"fixed",innerHTML:a.scanningIndicatorHTML},null,8,p)):(0,i.kq)("",!0),a.ShowSplash?((0,i.wg)(),(0,i.iD)("div",{key:2,id:"uiScreeen",class:"fixed",innerHTML:a.splashScreenHTML},null,8,S)):(0,i.kq)("",!0)],512)}class v{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}}class y{constructor(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){this.elements=e}clone(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}decompose(e,t,n){const r=this.elements;let i=new v(r[0],r[1],r[2]).magnitude();const a=new v(r[4],r[5],r[6]).magnitude(),o=new v(r[8],r[9],r[10]).magnitude(),s=this.determinant();s<0&&(i=-i);const c=1/i,u=1/a,d=1/o,l=new y;return l.clone(this),l.elements[0]*=c,l.elements[1]*=c,l.elements[2]*=c,l.elements[4]*=u,l.elements[5]*=u,l.elements[6]*=u,l.elements[8]*=d,l.elements[9]*=d,l.elements[10]*=d,e.set(r[12],r[14],r[13]),n.set(i,a,o),t.setFromRotationMatrix(l),this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],u=e[2],d=e[6],l=e[10],h=e[14],f=e[3],w=e[7],m=e[11],p=e[15];return f*(+i*s*d-r*c*d-i*o*l+n*c*l+r*o*h-n*s*h)+w*(+t*s*h-t*c*l+i*a*l-r*a*h+r*c*u-i*s*u)+m*(+t*c*d-t*o*h-i*a*d+n*a*h+i*o*u-n*c*u)+p*(-r*o*u-t*s*d+t*o*l+r*a*d-n*a*l+n*s*u)}}class b{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],u=t[6],d=t[10],l=n+o+d;if(l>0){const e=.5/Math.sqrt(l+1);this.x=(u-s)*e,this.y=(a-r)*e,this.z=(i-c)*e,this.w=.25/e}else if(n>o&&n>d){const e=2*Math.sqrt(1+n-o-d);this.x=.25*e,this.y=(i+c)/e,this.z=(r+a)/e,this.w=(u-s)/e}else if(o>d){const e=2*Math.sqrt(1+o-n-d);this.x=(r+a)/e,this.y=(s+u)/e,this.z=.25*e,this.w=(i-c)/e}else{const e=2*Math.sqrt(1+d-n-o);this.x=(i+c)/e,this.y=.25*e,this.z=(s+u)/e,this.w=(a-r)/e}return this.x*=-1,this}}class A{constructor(){}isValid(){}}class E extends A{constructor(e,t,n,r=60,i=[]){super(),e||(e=new v),t||(t=new b),n||(n=new v),this.position=e,this.rotation=t,this.scale=n,this.cameraFOV=r,this.faceMeshData=i.join()}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.faceMeshData)}}class T extends A{constructor(e,t,n,r=60,i=0){super(),e||(e=new v),t||(t=new b),n||(n=new v),this.position=e,this.rotation=t,this.scale=n,this.cameraFOV=r,this.targetIndex=i}isValid(){return!!(this.position&&this.rotation&&this.scale)}}let L,x,M,F,H,O,_;function I(e){O=e.Module,L=e.Module.cwrap("call_cb_TargetTransform",null,["number","number","number","number","number"]),x=e.Module.cwrap("call_cb_FaceTransform",null,["number","number","number","number","string","number"]),M=e.Module.cwrap("call_cb_MarkerTransform",null,["number","number","number"]),F=e.Module.cwrap("call_cb_ScanningFinished",null,[]),H=e.Module.cwrap("call_cb_SceneLoaded",null,["number"])}function C(e,t,n,r,i,a,o){let s=new E(t,n,r,i,a);if(s.isValid()){if(e){var c=O._malloc(40),u=c>>2;O.HEAPF32[u]=s.position.x,O.HEAPF32[u+1]=s.position.y,O.HEAPF32[u+2]=s.position.z,O.HEAPF32[u+3]=s.rotation.x,O.HEAPF32[u+4]=s.rotation.y,O.HEAPF32[u+5]=s.rotation.z,O.HEAPF32[u+6]=s.rotation.w,O.HEAPF32[u+7]=s.scale.x,O.HEAPF32[u+8]=s.scale.y,O.HEAPF32[u+9]=s.scale.z,x(c,c+12,c+28,s.cameraFOV,s.faceMeshData,o),O._free(c)}}else console.error("Face transform is invalid!")}function P(e,t,n,r,i,a){let o=new T(t,n,r,i,a);if(o.isValid()){if(e){var s=O._malloc(40),c=s>>2;O.HEAPF32[c]=o.position.x,O.HEAPF32[c+1]=o.position.y,O.HEAPF32[c+2]=o.position.z,O.HEAPF32[c+3]=o.rotation.x,O.HEAPF32[c+4]=o.rotation.y,O.HEAPF32[c+5]=o.rotation.z,O.HEAPF32[c+6]=o.rotation.w,O.HEAPF32[c+7]=o.scale.x,O.HEAPF32[c+8]=o.scale.y,O.HEAPF32[c+9]=o.scale.z,L(s,s+12,s+28,o.cameraFOV,a),O._free(s)}}else console.error("Target transform is invalid!")}function D(e,t,n,r){if(e){var i=O._malloc(28),a=i>>2;O.HEAPF32[a]=t.x,O.HEAPF32[a+1]=t.y,O.HEAPF32[a+2]=t.z,O.HEAPF32[a+3]=n.x,O.HEAPF32[a+4]=n.y,O.HEAPF32[a+5]=n.z,O.HEAPF32[a+6]=n.w,M(i,i+12,r),O._free(i)}}function k(e){e&&F()}function j(e,t){e&&H(t)}function R(e,t){var n="./Build";const r=!1;var i,a;r?(i=n+"/Build/Build.loader.js",a={dataUrl:n+"/Build/Build.data",frameworkUrl:n+"/Build/Build.framework.js",codeUrl:n+"/Build/Build.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"ImageRecognitionDemo",productVersion:"0.1"}):(i=n+"/Builds.loader.js",a={dataUrl:n+"/Builds.data",frameworkUrl:n+"/Builds.framework.js",codeUrl:n+"/Builds.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"ImageRecognitionDemo",productVersion:"0.1"}),e.width=window.innerWidth,e.height=window.innerHeight;var o=document.createElement("script");o.src=i,o.onload=()=>{createUnityInstance(e,a).then((e=>{window.ShowSplashScreen(!1),_=e,I(e),t(e)})).catch((e=>{}))},e.appendChild(o)}function N(e,t){const n=new y(e),r=new v,i=new b,a=new v;return n.decompose(r,i,a),t(r,i,a)}function z(e,t,n,r){N(e,((e,i,a)=>{C(_,e,i,a,t,n,r)}))}function V(e,t,n){N(e,((e,r,i)=>{P(_,e,r,i,t,n)}))}function U(e,t){N(e,((e,n,r)=>{D(_,e,n,t)}))}function B(){k(_)}function q(e){j(_,e)}class W{constructor(e){this.vue=e,window.SCENE_LOADER=this}async LoadScene(e,t,n){let r={sceneType:e,sceneIndex:Number(t),amountOfTargets:Number(n)};this.vue.currentScene=r}async ScanSurface(e){void 0!=window.currentScene&&null!=window.currentScene&&window.currentScene.ScanSurface&&window.currentScene.ScanSurface()}}const $={class:"debug",ref:"mc"};function G(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",$,null,512)}var Z=n(3861),X={name:"FaceScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch()},async Launch(){await this.Setup(),await this.Start(),window.ShowLoadingIndicator(!1)},async Setup(){return await n.e(816).then(n.t.bind(n,9816,23)).then((async()=>{let e=(0,Z.MindArFace)(this.$refs.mc);this.mindAr=e;let t=e.addFaceMesh();e.addAnchor(0);let n=e.renderer,r=e.scene,i=e.camera;this.Start=async()=>{await e.start(),q(this.sceneData.sceneIndex),n.setAnimationLoop((()=>{n.render(r,i),this.CheckTarget(e,t.geometry.positions)}))},this.Stop=async()=>{await e.stop(),n.setAnimationLoop(null)}}))},CheckTarget(e,t){let n=e.container.offsetWidth/e.container.offsetHeight,r=n<4/3?e.camera.fov:e.camera.fov*(4/3)/n,i=e.anchors[0],a=0;i.group.visible&&(a=1);let o=i.group.matrix.elements;z(o,r,t,a)}}};const Y=(0,s.Z)(X,[["render",G],["__scopeId","data-v-235d171b"]]);var K=Y;const J={class:"debug",ref:"mc"};function Q(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",J,null,512)}var ee={name:"TargetScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch()},async Launch(){await this.Setup(),await this.Start(),window.ShowLoadingIndicator(!1)},async Setup(){return await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let e=(0,Z.MindArTarget)(`./Targets/targets_${this.sceneData.sceneIndex}.mind`,this.$refs.mc);this.mindAr=e;for(var t=0;t<this.sceneData.amountOfTargets;t++)e.addAnchor(t);let n=e.renderer;e.scene,e.camera;this.Start=async()=>{await e.start(),q(this.sceneData.sceneIndex);for(var t=0;t<this.sceneData.amountOfTarget;t++)e.anchors[t].group.visible=!1;n.setAnimationLoop((()=>{this.CheckTarget(e)}))},this.Stop=async()=>{await e.stop(),n.setAnimationLoop(null)}}))},CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t;for(var r=0;r<this.sceneData.amountOfTargets;r++){let t=e.anchors[r];if(t.group.visible)return V(t.group.matrix.elements,n,r)}return V(e.camera.matrix.elements,n,-1)}}};const te=(0,s.Z)(ee,[["render",Q],["__scopeId","data-v-4f6a0186"]]);var ne=te;const re={class:"debug",ref:"mc"};function ie(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",re,null,512)}var ae=n(1114),oe={name:"MarkerScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch()},async Launch(){await this.Setup(),await this.Start(),window.ShowLoadingIndicator(!1)},async Setup(){this.scene=new ae.xsS,this.camera=new ae.cPb(70,window.innerWidth/window.innerHeight,.01,20),this.renderer=new ae.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.xr.enabled=!0,this.$refs.mc.appendChild(this.renderer.domElement),this.controller=this.renderer.xr.getController(0),this.scene.add(this.controller),this.Start=async()=>{navigator.xr.requestSession("immersive-ar",{optionalFeatures:["dom-overlay"],requiredFeatures:["hit-test"],domOverlay:{root:this.sceneData.unity}}).then((async e=>{this.session=e,this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(e),q(this.sceneData.sceneIndex),this.animate()}))},this.Stop=async()=>{this.session&&await this.session.end()}},animate(){this.renderer.setAnimationLoop((()=>{this.renderer.render(this.scene,this.camera),this.SendCameraTransformTounity()}))},SendCameraTransformTounity(){let e=this.camera.matrixWorld.elements,t=this.camera.fov;U(e,t)}}};const se=(0,s.Z)(oe,[["render",ie],["__scopeId","data-v-33343f42"]]);var ce=se;const ue={class:"debug",ref:"mc"};function de(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",ue,null,512)}var le=n(4129);n(7658),n(4200);const he=new window.MINDAR.IMAGE.Compiler;async function fe(e){const t=[];for(let i=0;i<e.length;i++){let n=await we(e[i]);t.push(n)}await he.compileImageTargets(t,(e=>{console.log(e)}));const n=await he.exportData();let r=me(n);return r}async function we(e){return new Promise(((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e}))}function me(e){var t=new Blob([e]),n=window.document.createElement("a");return n.download="targets.mind",n.href=window.URL.createObjectURL(t),n.href}var pe={name:"SurfaceScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch()},async Launch(){await this.StartVideo(),window.ShowLoadingIndicator(!1),q(this.sceneData.sceneIndex)},async ScanSurface(){window.ShowScanningIndicator(!0);let e=(0,le.TakePhoto)(this.video),t=await fe([e]);await this.Setup(t),await this.Start(),window.ShowScanningIndicator(!1),B()},async StartVideo(){this.video=await(0,le.CreateCameraVideo)("environment"),this.$refs.mc.appendChild(this.video)},async Setup(e){this.amountOfTargets;return await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let t=(0,Z.MindArTarget)(e,this.$refs.mc);this.mindAr=t;for(var n=0;n<this.sceneData.amountOfTargets;n++)t.addAnchor(n);let r=t.renderer;t.scene,t.camera;this.Start=async()=>{await t.start(),q(this.sceneData.sceneIndex);for(var e=0;e<this.sceneData.amountOfTarget;e++)t.anchors[e].group.visible=!1;r.setAnimationLoop((()=>{this.CheckTarget(t)}))},this.Stop=async()=>{await t.stop(),(0,le.StopVideo)(this.video),r.setAnimationLoop(null)}}))},CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t;for(var r=0;r<this.sceneData.amountOfTargets;r++){let t=e.anchors[r];if(t.group.visible)return V(t.group.matrix.elements,n,r)}return V(e.camera.matrix.elements,n,-1)}}};const Se=(0,s.Z)(pe,[["render",de],["__scopeId","data-v-43715880"]]);var ge=Se,ve={name:"App",components:{FaceScene:K,TargetScene:ne,MarkerScene:ce,SurfaceScene:ge},data(){return{isFullscreen:!1,sceneLoader:null,ShowLoading:!1,ShowScanning:!1,ShowSplash:!0,loadingIndicatorHTML:"",scanningIndicatorHTML:"",splashScreenHTML:"",currentScene:{}}},mounted(){this.LoadHTMLs(),this.Initialization(),window.StopCurrentScene=this.StopCurrentScene,window.SetCurrentScene=this.SetCurrentScene,window.timeout=this.timeout,window.ShowLoadingIndicator=this.ShowLoadingIndicator,window.ShowScanningIndicator=this.ShowScanningIndicator,window.ShowSplashScreen=this.ShowSplashScreen},methods:{async timeout(e){return new Promise((t=>setTimeout(t,e)))},async SetCurrentScene(e){this.StopCurrentScene(),window.currentScene=e},async StopCurrentScene(){window.currentScene&&null!=window.currentScene&&window.currentScene.Stop&&await window.currentScene.Stop()},GetSceneComponent(){switch(this.currentScene.unity=this.$refs.uc,this.currentScene.sceneType){case"face":return K;case"image":return ne;case"marker":return ce;case"surface":return ge;default:return this.StopCurrentScene(),null}},LoadHTMLs(){let e=this;var t=new XMLHttpRequest;t.open("GET","loading_indicator.html",!1),t.onreadystatechange=function(){if(4===t.readyState&&(200===t.status||0==t.status)){var n=t.responseText;e.loadingIndicatorHTML=n}},t.send(null),t=new XMLHttpRequest,t.open("GET","scanning_indicator.html",!1),t.onreadystatechange=function(){if(4===t.readyState&&(200===t.status||0==t.status)){var n=t.responseText;e.scanningIndicatorHTML=n}},t.send(null),t=new XMLHttpRequest,t.open("GET","splash_screen.html",!1),t.onreadystatechange=function(){if(4===t.readyState&&(200===t.status||0==t.status)){var n=t.responseText;e.splashScreenHTML=n}},t.send(null)},async ReloadScene(){window.currentScene&&null!=window.currentScene&&window.currentScene.Entry&&window.currentScene.Entry()},async Initialization(){let e=this.$refs.uc;this.$refs.arContainer;this.sceneLoader=new W(this);let t=this;window.addEventListener("orientationchange",(function(){t.ReloadScene()}),!1),R(e,(()=>{this.ShowLoadingIndicator(!1),setTimeout((()=>{this.$refs.fullscreenBtn&&this.$refs.fullscreenBtn.remove()}),10500)}))},SetFullscreen(e){this.$refs.fullscreenBtn.remove(),e?this.$refs.app.requestFullscreen().then((()=>{this.isFullscreen=!0})).catch((e=>{console.error(e)})):document.exitFullscreen().then((()=>{this.isFullscreen=!1})).catch((e=>{console.error(e)}))},ShowLoadingIndicator(e){this.ShowLoading=e},ShowScanningIndicator(e){this.ShowScanning=e},ShowSplashScreen(e){this.ShowSplash=e}}};const ye=(0,s.Z)(ve,[["render",g]]);var be=ye;const Ae=l.p7({history:l.r5(),routes:[{path:"/:id?",component:be}]});(0,r.ri)(d).use(Ae).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],a=e[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},n.d(a,o),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".qs.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ar-unity-renderer:";n.l=function(r,i,a,o){if(e[r])e[r].push(i);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var d=c(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkar_unity_renderer"]=self["webpackChunkar_unity_renderer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(207)}));r=n.O(r)})();
//# sourceMappingURL=app.qs.js.map
