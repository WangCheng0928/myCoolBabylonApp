export const anim = () => {
  const animWheel = new BABYLON.Animation('wheelAnimation', 'rotation.y', 30, 
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  const wheelKeys = [{
    frame: 0,
    value: 0,
  }, {
    frame: 30,
    value: 2 * Math.PI
  }];
  animWheel.setKeys(wheelKeys);
  return animWheel;
}