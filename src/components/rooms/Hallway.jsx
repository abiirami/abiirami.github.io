import * as THREE from "three";
import { wallMaterial, floorMaterial, doorMaterial, metalMaterial, glassMaterial } from "../materials";

export default function Hallway() {

  const hallway = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 0.53;
  const height = 1.38;
  const depth = 2.8;



  // --------------------
  // FLOOR
  // --------------------

  const floor =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        width,
        0.05,
        depth
      ),
      floorMaterial
    );


  floor.position.y =
    -height / 2;


  floor.receiveShadow = true;


  hallway.add(
    floor
  );



  // --------------------
  // RIGHT WALL
  // --------------------

  const rightWall =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.08,
        height,
        depth - 0.4
      ),
      wallMaterial
    );


  rightWall.position.x =
    width / 2;
rightWall.position.z += 0.2;



  hallway.add(
    rightWall
  );



  // --------------------
  // BACK WALL
  // --------------------

  const backWall =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        width,
        height,
        0.08
      ),
      wallMaterial
    );


  backWall.position.z =
    -depth / 2;


  hallway.add(
    backWall
  );


  // --------------------
  // DOOR 
  // --------------------

  const door =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        width,
        height,
        0.035
      ),
      glassMaterial
    );


  door.position.set(
    0,
    0,
    depth / 2 + 0.01
  );


  door.castShadow = true;


  hallway.add(
    door
  );



  // --------------------
  // DOOR FRAME
  // --------------------




  function addFrame(
    x,
    y,
    w,
    h
  ){

    const frame =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          w,
          h,
          0.04
        ),
        metalMaterial
      );


    frame.position.set(
      x,
      y,
      depth / 2 + 0.03
    );


    frame.castShadow = true;


    hallway.add(
      frame
    );

  }



  // left trim

  addFrame(
    -width / 2 - 0.025,
    0,
    0.05,
    height
  );



  // right trim

  addFrame(
    width / 2 + 0.025,
    0,
    0.05,
    height
  );



  // top trim

  addFrame(
    0,
    height / 2 + 0.025,
    width + 0.1,
    0.05
  );



  // --------------------
  // HANDLE
  // --------------------

  const handle =
    new THREE.Mesh(
      new THREE.SphereGeometry(
        0.025,
        16,
        16
      ),
      metalMaterial
    );


  handle.position.set(
    width / 2 - 0.08,
    0,
    depth / 2 + 0.1
  );


  handle.castShadow = true;


  hallway.add(
    handle
  );



  return hallway;
}