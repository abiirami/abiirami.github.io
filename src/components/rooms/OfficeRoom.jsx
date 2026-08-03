import * as THREE from "three";
import { floorMaterial, wallMaterial, glassMaterial, metalMaterial } from "../materials";

export default function OfficeRoom() {

  const room = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 2.13;
  const height = 1.4;
  const depth = 1.4;

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
      floorMaterial
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
// OFFICE MATERIALS
// --------------------

const woodMaterial =
    new THREE.MeshStandardMaterial({
        color:"#6B4423",
        roughness:0.8
    });


const rugMaterial =
    new THREE.MeshStandardMaterial({
        color:"#8B7D6B",
        roughness:1
    });



// --------------------
// RUG
// --------------------

const rug =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            1.4,
            0.02,
            1
        ),
        rugMaterial
    );


rug.position.set(
    0,
    -0.68,
    0
);


room.add(rug);



// --------------------
// DESK TOP
// --------------------

const desk =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            1,
            0.08,
            0.5
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
// DESK LEGS (2)
// --------------------

[
    [-0.42, -0.48, -0.15],
    [0.42, -0.48, -0.15]
].forEach(([x,y,z])=>{

    const leg =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.06,
                0.45,
                0.06
            ),
            metalMaterial
        );


    leg.position.set(
        x,
        y,
        z
    );


    room.add(leg);

});



// --------------------
// MONITOR FRAME
// --------------------

const monitorFrame =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.6,
            0.38,
            0.05
        ),
        metalMaterial
    );


monitorFrame.position.set(
    0,
    0.02,
    -0.32
);


room.add(monitorFrame);



// --------------------
// MONITOR SCREEN
// --------------------

const screen =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.52,
            0.30,
            0.01
        ),
        new THREE.MeshStandardMaterial({
            color:"#111111",
            emissive:"#A9D6DC",
            emissiveIntensity:0.15,
            roughness:0.2
        })
    );


screen.position.set(
    0,
    0.02,
    -0.285
);


room.add(screen);



// --------------------
// MONITOR STEM
// --------------------

const monitorStem =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.04,
            0.18,
            0.04
        ),
        metalMaterial
    );


monitorStem.position.set(
    0,
    -0.13,
    -0.32
);


room.add(monitorStem);




// --------------------
// KEYBOARD
// --------------------

const keyboard =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.35,
            0.02,
            0.15
        ),
        metalMaterial
    );


keyboard.position.set(
    0,
    -0.20,
    0.02
);


room.add(keyboard);


  return room;
}