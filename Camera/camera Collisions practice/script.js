import{jump} from './jump_and_crouch.js'


const canva = document.getElementById("canvas")
const engine = new BABYLON.Engine(canva , true)
const scene = new BABYLON.Scene(engine)
scene.collisionedEnabled = true
scene.gravity = new BABYLON.Vector3(0,-0.98,0)



const camera = new BABYLON.UniversalCamera("Player_camera",new BABYLON.Vector3(0,5,0),scene);
camera.ellipsoid = new BABYLON.Vector3(1,1,3)
camera.attachControl(canva,true)
camera.applyGravity = true
camera.checkCollisions = true


const ground = new BABYLON.MeshBuilder.CreateGround("ground" ,  {size : 100 }, scene)
ground.checkCollisions = true
const groundMat = new BABYLON.StandardMaterial("g_mat",scene)
const texture = new BABYLON.Texture("img2.jpg",scene)
texture.uScale =10
texture.vScale =10
groundMat.diffuseTexture = texture
ground.material = groundMat


  function box (position){
     const mesh = new BABYLON.MeshBuilder.CreateBox("box", {width : 3 , height : 7 } , scene)
     mesh.position = position
     mesh.checkCollisions = true
   }


  const box1 = box( new  BABYLON.Vector3(0,0,0))
  const box2 = box( new  BABYLON.Vector3(1,0,-10))
  const box3 = box(new  BABYLON.Vector3(2,0,20))
  const box4 = box(new  BABYLON.Vector3(6,0,10))

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,1,0))




window.addEventListener('keydown', function(key){
  if (key.code === 'Space'){
     jump(camera)
  }

})




engine.runRenderLoop(()=>{
    scene.render()
})




 

