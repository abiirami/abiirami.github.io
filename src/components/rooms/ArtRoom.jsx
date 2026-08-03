import * as THREE from "three";

export default function ArtRoom() {

  const room = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 1.6;   // changed from 2.13
  const height = 1.4;
  const depth = 2.8;



  // --------------------
  // MATERIALS
  // --------------------

  const wallMaterial =
    new THREE.MeshStandardMaterial({
      color: "#F7E9D2",
      roughness: 0.9,
    });


  const glassMaterial =
    new THREE.MeshPhysicalMaterial({
      color: "#B9DDF2",
      transmission: 1,
      transparent: true,
      opacity: 0.35,
      roughness: 0,
      thickness: 0.15,
    });


  const floorMaterial =
    new THREE.MeshStandardMaterial({
      color: "#B9825A",
      roughness: 0.8,
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
  // RIGHT WALL (moved inward)
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
      floorMaterial
    );


  floor.position.y =
    -height / 2;


  room.add(floor);



  // --------------------
  // LEFT GLASS WALL
  // --------------------

  const leftGlass =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.03,
        height,
        depth
      ),
      glassMaterial
    );


  leftGlass.position.x =
    -width / 2;


  room.add(leftGlass);



  // --------------------
  // FRONT GLASS WALL
  // --------------------

  const frontGlass =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        width,
        height,
        0.03
      ),
      glassMaterial
    );


  frontGlass.position.z =
    depth / 2;


  room.add(frontGlass);



  return room;
}