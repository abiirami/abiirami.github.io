import * as THREE from "three";
import { floorMaterial, glassMaterial, wallMaterial } from "../materials";

export default function ArtRoom() {

  const room = new THREE.Group();


  // --------------------
  // DIMENSIONS
  // --------------------

  const width = 1.6;
  const height = 1.4;
  const depth = 2.8;



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
  // RIGHT WALL WITH GAP
  // --------------------

  const rightWall =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.08,
        height,
        depth - 0.45
      ),
      wallMaterial
    );


  rightWall.position.set(
    width / 2,
    0,
    0.225
  );


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


  floor.receiveShadow = true;


  room.add(floor);




  // --------------------
  // GLASS WALLS
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




  // =================================================
  // MATERIALS
  // =================================================

  const woodMaterial =
    new THREE.MeshStandardMaterial({
      color:"#8B5A35",
      roughness:0.9
    });


  const canvasMaterial =
    new THREE.MeshStandardMaterial({
      color:"#F5E6CC",
      roughness:0.8
    });




  // =================================================
  // EASEL
  // =================================================

  const easel =
    new THREE.Group();



  const canvas =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.4,
        0.36,
        0.04
      ),
      canvasMaterial
    );


  canvas.position.y = 0.18;


  easel.add(canvas);




  const canvasArt =
    new THREE.Mesh(
      new THREE.PlaneGeometry(
        0.32,
        0.28
      ),
      new THREE.MeshStandardMaterial({
        color:"#79A6D2"
      })
    );


  canvasArt.position.set(
    0,
    0.18,
    0.025
  );


  easel.add(canvasArt);




  const shelf =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.45,
        0.04,
        0.1
      ),
      woodMaterial
    );


  shelf.position.y = 0.02;


  easel.add(shelf);




  function createFrontLeg(x){

    const leg =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          0.04,
          0.7,
          0.04
        ),
        woodMaterial
      );


    leg.position.set(
      x,
      -0.32,
      0.08
    );


    leg.rotation.x = -0.15;


    easel.add(leg);

  }


  createFrontLeg(-0.15);
  createFrontLeg(0.15);




  // rear tripod leg

  const backLeg =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.04,
        0.75,
        0.04
      ),
      woodMaterial
    );


  backLeg.position.set(
    0,
    -0.32,
    -0.22
  );


  backLeg.rotation.x =
    0.45;


  easel.add(backLeg);




  easel.position.set(
    0,
    -0.05,
    0.15
  );


  room.add(easel);






  // =================================================
  // PAINTINGS
  // =================================================


  function createPainting(
    position,
    wall,
    color,
    scale
  ){

    let frame;
    let art;



    // --------------------
    // RIGHT WALL
    // --------------------

    if(wall === "right"){

      frame =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.03,
            0.45 * scale,
            0.6 * scale
          ),
          woodMaterial
        );


      frame.position.copy(position);


      art =
        new THREE.Mesh(
          new THREE.PlaneGeometry(
            0.4 * scale,
            0.36 * scale
          ),
          new THREE.MeshStandardMaterial({
            color
          })
        );


      art.position.set(
        position.x - 0.02,
        position.y,
        position.z
      );


      art.rotation.y =
        -Math.PI / 2;

    }




    // --------------------
    // BACK WALL
    // --------------------

    if(wall === "back"){

      frame =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.6 * scale,
            0.45 * scale,
            0.03
          ),
          woodMaterial
        );


      frame.position.copy(position);



      art =
        new THREE.Mesh(
          new THREE.PlaneGeometry(
            0.4 * scale,
            0.36 * scale
          ),
          new THREE.MeshStandardMaterial({
            color
          })
        );


      art.position.set(
        position.x,
        position.y,
        position.z + 0.02
      );


      // faces room

      art.rotation.y = 0;

    }


    room.add(frame);
    room.add(art);

  }





  // --------------------
  // RIGHT WALL PAINTINGS
  // --------------------

  createPainting(
    new THREE.Vector3(
      width / 2 - 0.045,
      0.05,
      -0.2
    ),
    "right",
    "#E9A86A",
    1
  );


  createPainting(
    new THREE.Vector3(
      width / 2 - 0.045,
      0.1,
      0.7
    ),
    "right",
    "#86B8A8",
    1.2
  );




  // --------------------
  // BACK WALL PAINTINGS
  // --------------------

  createPainting(
    new THREE.Vector3(
      -0.45,
      0.12,
      -depth / 2 + 0.045
    ),
    "back",
    "#C77D9B",
    0.9
  );


  createPainting(
    new THREE.Vector3(
      0.35,
      0.18,
      -depth / 2 + 0.045
    ),
    "back",
    "#E5B95C",
    1
  );



  return room;

}