import * as THREE from "three";

export default function OfficeRoom() {

  const room = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 2.13;
  const height = 1.4;
  const depth = 1.4;


  // --------------------
  // MATERIALS
  // --------------------

  const wallMaterial =
    new THREE.MeshStandardMaterial({
      color: "#FFF1D6",
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


  const woodMaterial =
    new THREE.MeshStandardMaterial({
      color: "#A87545",
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
      woodMaterial
    );

  floor.position.y =
    -height / 2;


  room.add(floor);



  // --------------------
  // LEFT GLASS (BIG WINDOW)
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
  // FRONT GLASS (SMALL WINDOW)
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



  // --------------------
  // DESK
  // --------------------

  const desk =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        1,
        0.08,
        0.45
      ),
      woodMaterial
    );


  desk.position.set(
    0,
    -0.25,
    -0.15
  );


  room.add(desk);



  // --------------------
  // MONITOR
  // --------------------

  const monitor =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.45,
        0.3,
        0.05
      ),
      new THREE.MeshStandardMaterial({
        color:"#151515",
        emissive:"#79C8FF",
        emissiveIntensity:0.8,
      })
    );


  monitor.position.set(
    0,
    0,
    -0.35
  );


  room.add(monitor);



  return room;
}