import { anim } from "./animation";

export const buildWheels = (parent, scene) => {

  const wheelUV = [];
  wheelUV[0] = new BABYLON.Vector4(0, 0, 1, 1);
  wheelUV[1] = new BABYLON.Vector4(0, 0.5, 0, 0.5);
  wheelUV[2] = new BABYLON.Vector4(0, 0, 1, 1);
  const wheelMat = new BABYLON.StandardMaterial("wheelMat");
  wheelMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/wheel.png");

  const animation = anim();

  const wheelRB = BABYLON.MeshBuilder.CreateCylinder('wheelRB', {diameter: 0.125, height: 0.05});
  wheelRB.material = wheelMat;
  wheelRB.parent = parent;
  wheelRB.position = new BABYLON.Vector3(-0.2, 0.035, -0.1);

  const wheelRF = wheelRB.clone('wheelRF');
  wheelRF.position.x = 0.1;

  const wheelLB = wheelRB.clone('wheelLB');
  wheelLB.position.y = -0.2 - 0.035;

  const wheelLF = wheelRF.clone('wheelLF');
  wheelLF.position.y = -0.2 -0.035;

  wheelRB.animations = [animation];
  wheelRF.animations = [animation];
  wheelLB.animations = [animation];
  wheelLF.animations = [animation];
  scene.beginAnimation(wheelRB, 0, 30, true);
  scene.beginAnimation(wheelRF, 0, 30, true);
  scene.beginAnimation(wheelLB, 0, 30, true);
  scene.beginAnimation(wheelLF, 0, 30, true);

  return {
    wheelRB,
    wheelRF,
    wheelLB,
    wheelLF
  }
}