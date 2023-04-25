export const createGround = (options) => {
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10, ...options});
  const groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
  ground.material = groundMat;
  return ground;
}