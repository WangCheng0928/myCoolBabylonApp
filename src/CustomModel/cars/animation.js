export const anim = () => {
  const animCar = new BABYLON.Animation('carAnimation', 'position.x', 30, 
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  const carKeys = [{
    frame: 0,
    value: -4,
  }, {
    frame: 150,
    value: 4
  }, {
    frame: 210,
    value: 4
  }];
  animCar.setKeys(carKeys);
  return animCar;
}