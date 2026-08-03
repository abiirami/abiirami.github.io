import * as THREE from "three";


// HOUSE PALETTE

export const wallMaterial =
  new THREE.MeshStandardMaterial({
    color:"#F3E8D3",
    roughness:0.85,
    metalness:0
  });

export const floorMaterial =
  new THREE.MeshStandardMaterial({
    color: "#B9825A",
    roughness: 0.8,
  });

  export const doorMaterial =
    new THREE.MeshStandardMaterial({
      color:"#8B5A35",
      roughness:0.8
    });



// GLASS

export const glassMaterial =
  new THREE.MeshPhysicalMaterial({
    color:"#e8f5ff",

    transmission:1,
    transparent:true,

    opacity:0.28,

    roughness:0.1,
    metalness:0,

    thickness:0.03,
    ior:1.25,

    side:THREE.DoubleSide
  });

// PLANTS

export const leafMaterial =
  new THREE.MeshStandardMaterial({
    color:"#8FB573",
    roughness:1,
  });

  // Metal
 export const metalMaterial =
    new THREE.MeshStandardMaterial({
      color:"#647678",
      metalness:0.5,
      roughness:0.3
    });