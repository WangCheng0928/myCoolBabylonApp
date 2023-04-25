import { buildOutline } from "../../BaseModel/outline";
import earcut from 'earcut';
import { anim } from "./animation";

export const buildCar = (scene) => {
  const outline = buildOutline();
  const faceUV = [];
  faceUV[0] = new BABYLON.Vector4(0, 0.5, 0.38, 1);
  faceUV[1] = new BABYLON.Vector4(0, 0, 1, 0.5);
  faceUV[2] = new BABYLON.Vector4(0.38, 1, 0, 0.5);
  
  const carMat = new BABYLON.StandardMaterial('carMat');
  carMat.diffuseTexture = new BABYLON.Texture('https://assets.babylonjs.com/environments/car.png');
  const car = BABYLON.MeshBuilder.ExtrudePolygon("car", {shape: outline, depth: 0.2, faceUV, wrap: true}, null, earcut);
  car.rotation.x = -Math.PI / 2;
  car.material = carMat;
  const animation = anim();
  car.animations = [animation];
  scene.beginAnimation(car, 0, 210, true);
  return car;
}