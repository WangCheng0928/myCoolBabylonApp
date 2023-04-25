export const buildOutline = () => {
  const outline = [
    new BABYLON.Vector3(-0.3, 0, -0.1),
    new BABYLON.Vector3(0.2, 0, -0.1)
  ];
  for (let i = 0; i < 30; i++) {
    outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 60), 0, 0.2 * Math.sin(i * Math.PI / 60) - 0.1));
  }
  outline.push(new BABYLON.Vector3(0, 0, 0.1));
  outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));
  return outline;
}