import { createBox, createBox2, createRoof } from "../../BaseModel";
import { places } from "../../config";

export const buildHouse = (width) => {
  const roof = createRoof(undefined, {
    scalingY: width
  });
  const box = width === 1 ? createBox() : createBox2();
  const house = BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);

  return house;
}

export const  buildHouses = () => {

  const detached_house = buildHouse(1);
  detached_house.rotation.y = -Math.PI / 16;
  detached_house.position.x = -6.8;
  detached_house.position.z = 2.5;

  const semi_house = buildHouse(2);
  semi_house .rotation.y = -Math.PI / 16;
  semi_house.position.x = -4.5;
  semi_house.position.z = 3;
  const houses = [];
  for (let i = 0; i < places.length; i++) {
      if (places[i][0] === 1) {
          houses[i] = detached_house.createInstance("house" + i);
      }
      else {
          houses[i] = semi_house.createInstance("house" + i);
      }
      houses[i].rotation.y = places[i][1];
      houses[i].position.x = places[i][2];
      houses[i].position.z = places[i][3];
  }
  return houses;
}