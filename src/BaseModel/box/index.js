export const createBox = (options = {}) => {
  const { url = 'https://assets.babylonjs.com/environments/cubehouse.png', faceUV, ...rest } = options
  const boxMat = new BABYLON.StandardMaterial("boxMat");
  boxMat.diffuseTexture = new BABYLON.Texture(url);
  const defaultFaceUV = [];
  defaultFaceUV[0] = new BABYLON.Vector4(0.5, 0, 0.75, 1.0);
  defaultFaceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0);
  defaultFaceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0);
  defaultFaceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0);
  const box = BABYLON.MeshBuilder.CreateBox("box", {faceUV: faceUV || defaultFaceUV, wrap: true, ...rest});
  box.position.y = 0.5;
  box.material = boxMat;
  return box;
}

export const createBox2 = () => {
  const faceUV = [];
  faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
  faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
  faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
  faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
  const box = createBox({
    url: 'https://assets.babylonjs.com/environments/semihouse.png',
    width: 2,
    faceUV
  });
  return box;
}