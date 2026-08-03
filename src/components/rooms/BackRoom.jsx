import * as THREE from "three";

export default function BackRoom() {

  const room = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 2.13;   // same as office
  const height = 1.4;   // upper floor height
  const depth = 1.4;    // back half of cube



  // --------------------
  // MATERIAL
  // --------------------

  const wallMaterial =
    new THREE.MeshStandardMaterial({
      color:"#F7E9D2",
      roughness:0.9
    });



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


  room.add(backWall);



  // --------------------
  // LEFT WALL
  // --------------------

  const leftWall =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.08,
        height,
        depth
      ),
      wallMaterial
    );


  leftWall.position.x =
    -width / 2;


  room.add(leftWall);



  // --------------------
  // RIGHT WALL
  // --------------------

  const rightWall =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.08,
        height,
        depth
      ),
      wallMaterial
    );


  rightWall.position.x =
    width / 2;


  room.add(rightWall);



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
      wallMaterial
    );


  floor.position.y =
    -height / 2;


  room.add(floor);



  return room;
}