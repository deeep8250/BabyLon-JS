const canvas = document.getElementById("canvas")
const engine = new BABYLON.Engine(canvas,true)
const scene = new BABYLON.Scene(engine)



const camera = new BABYLON.ArcRotateCamera("camera", Math.PI/2 , Math.PI/2 , 2.5 , new BABYLON.Vector3(0,0,0),scene)
camera.attachControl(canvas,true)

const wheel = new BABYLON.MeshBuilder.CreateCylinder(name,{diameter : 1 , height : 0.2},scene)
wheel.rotation.z = Math.PI/2
var material = new BABYLON.StandardMaterial("material",scene)
material.diffuseTexture = new BABYLON.Texture("wheel.jpg",scene)
wheel.material = material 


const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,1,0),scene)
scene.registerBeforeRender(()=>{

wheel.rotation.x += 0.20

})

engine.runRenderLoop(()=>{
    scene.render()
})