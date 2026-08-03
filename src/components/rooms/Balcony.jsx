import * as THREE from "three";
import { floorMaterial, metalMaterial } from "../materials";

export default function Balcony() {

  const balcony = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 0.6;
  const depth = 1.4;
  const thickness = 0.08;


  // --------------------
  // FLOOR
  // --------------------

  const floor =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        width,
        thickness,
        depth
      ),
      floorMaterial
    );


  floor.receiveShadow = true;

  balcony.add(floor);



  // --------------------
  // RAIL SETTINGS
  // --------------------

  const railHeight = 0.8;
  const railThickness = 0.04;


  function createRail(
    x,
    y,
    z,
    w,
    h,
    d
  ){

    const rail =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          w,
          h,
          d
        ),
        metalMaterial
      );


    rail.position.set(
      x,
      y,
      z
    );


    // rail.castShadow = true;

    balcony.add(rail);
  }



  // --------------------
  // HORIZONTAL RAILS
  // --------------------

  const railLevels = [
    0.35,
    0.78
  ];


  railLevels.forEach((y)=>{


    // FRONT

    createRail(
      0,
      y,
      depth / 2,
      width,
      railThickness,
      railThickness
    );


    // BACK

    createRail(
      0,
      y,
      -depth / 2,
      width,
      railThickness,
      railThickness
    );


    // RIGHT SIDE

    createRail(
      width / 2,
      y,
      0,
      railThickness,
      railThickness,
      depth
    );


  });



  // --------------------
  // FRONT + BACK POSTS
  // --------------------

  const spacing = 0.3;


  const xPosts =
    Math.floor(width / spacing) + 1;


  for(let i = 0; i < xPosts; i++){

    const x =
      -width / 2 +
      (width / (xPosts - 1)) * i;


    // FRONT

    createRail(
      x,
      railHeight / 2,
      depth / 2,
      railThickness,
      railHeight,
      railThickness
    );


    // BACK

    createRail(
      x,
      railHeight / 2,
      -depth / 2,
      railThickness,
      railHeight,
      railThickness
    );

  }



  // --------------------
  // LEFT + RIGHT POSTS
  // --------------------

  const zPosts =
    Math.floor(depth / spacing) + 1;


  for(let i = 0; i < zPosts; i++){

    const z =
      -depth / 2 +
      (depth / (zPosts - 1)) * i;


    // RIGHT

    createRail(
      width / 2,
      railHeight / 2,
      z,
      railThickness,
      railHeight,
      railThickness
    );

  }

// --------------------
// OUTSIDE BACK STAIRS
// --------------------

const stairMaterial =
  new THREE.MeshStandardMaterial({
    color:"#8B5A35",
    roughness:0.8
  });


const stairWidth = 0.45;
const stepDepth = 0.22;
const stepHeight = 0.10;

const steps = 10;


// move stairs away from balcony
const stairOffset = 0.18;


for(let i = 0; i < steps; i++){

  const step =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        stairWidth,
        stepHeight,
        stepDepth
      ),
      stairMaterial
    );


  step.position.set(

    // hugs outside wall
    -width / 2 + stairWidth / 2,

    // descend
    -i * 0.14 - 0.05,

    // starts behind balcony
    -depth / 2 - stairOffset - i * 0.12

  );


  step.castShadow = true;
  step.receiveShadow = true;


  balcony.add(step);

}


  return balcony;
}