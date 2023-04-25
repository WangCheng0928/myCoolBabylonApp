export const createRoof = (scene, options={}) => {
  const { url = 'https://assets.babylonjs.com/environments/roof.jpg', scalingX = 0.75, scalingY = 1, ...rest } = options;
  const roofMat = new BABYLON.StandardMaterial("roofMat");
  roofMat.diffuseTexture = new BABYLON.Texture(url, scene);
  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3, ...rest});
  roof.scaling.x = scalingX;
  roof.scaling.y = scalingY;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;
  roof.material = roofMat;
  return roof;
}