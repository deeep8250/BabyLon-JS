const canva = document.getElementById("canvas")
const engine = new BABYLON.Engine(canva,true)
const scene = new BABYLON.Scene(engine)

const camera =  new BABYLON.ArcRotateCamera("camera",Math.PI/2 , Math.PI/2 , 15, new BABYLON.Vector3(0,0,0),scene)
camera.attachControl(canva,true)

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,1,0),scene)

const points = [];
points.push(new BABYLON.Vector3(2,0,-2));
points.push(new BABYLON.Vector3(2,0,2));
points.push(new BABYLON.Vector3(-2,0,2));
points.push(new BABYLON.Vector3(-2,0,-2));
points.push(points[0])


BABYLON.MeshBuilder.CreateLines("box_shape",{points : points}) 


engine.runRenderLoop(()=>{
    scene.render()
})