const canva = document.getElementById("canva");
const engine = new BABYLON.Engine(canva);
const scene = new BABYLON.Scene(engine);


const camera = new BABYLON.ArcRotateCamera("camera", Math.PI/2,  Math.PI/2, 10, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canva,true);
camera.lowerBeta = null;
camera.upperBeta = null;


const mesh = new BABYLON.MeshBuilder.CreateSphere("circle",{diameter : 2});
const SunMaterial = new BABYLON.StandardMaterial("material",scene);
SunMaterial.emissiveTexture = new BABYLON.Texture("images/sun.jpg",scene);
SunMaterial.disableLighting = true;
mesh.material = SunMaterial;


const  ground = new BABYLON.MeshBuilder.CreateDisc("ground",{radius : 10 , tessellation : 60},scene)
const groundMat = new BABYLON.StandardMaterial("grMat",scene);
groundMat.diffuseColor = new BABYLON.Color3(0.3,0.8,0.3)
ground.rotation.x = Math.PI/2
ground.material = groundMat;


const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 1;


const skybox = new BABYLON.MeshBuilder.CreateBox("sky",{size : 100 },scene)
const skyMaterial = new BABYLON.StandardMaterial("skyMat",scene);
skyMaterial.backFaceCulling = false;
skyMaterial.disableLighting = true;

skyMaterial.reflectionTexture = new BABYLON.CubeTexture("cube/",scene)
skyMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;


skybox.infiniteDistance = true;
skybox.disableLighting = true;
skybox.material = skyMaterial;


engine.runRenderLoop(()=>{
    scene.render()
})

