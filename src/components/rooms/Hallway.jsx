import * as THREE from "three";

export default function Hallway() {

  const hallway = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 0.53;
  const height = 1.4;
  const depth = 2.8;



  // --------------------
  // MATERIALS
  // --------------------

  const wallMaterial =
    new THREE.MeshStandardMaterial({
      color:"#F7E9D2",
      roughness:0.9
    });


  const floorMaterial =
    new THREE.MeshStandardMaterial({
      color:"#B9825A",
      roughness:0.8
    });


  const doorMaterial =
    new THREE.MeshStandardMaterial({
      color:"#8B5A35",
      roughness:0.8
    });



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


  hallway.add(floor);



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


  hallway.add(rightWall);



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


  hallway.add(backWall);



  // --------------------
  // FRONT DOOR WALL
  // --------------------

  const frontDoor =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        width,
        height,
        0.05
      ),
      doorMaterial
    );


  frontDoor.position.z =
    depth / 2;


  hallway.add(frontDoor);



  return hallway;
}