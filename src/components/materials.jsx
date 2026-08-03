import * as THREE from "three";


// HOUSE PALETTE

export const wallMaterial =
  new THREE.MeshStandardMaterial({
    color: "#FFF1D6",
    roughness: 0.9,
  });


export const woodMaterial =
  new THREE.MeshStandardMaterial({
    color: "#B9825A",
    roughness: 0.8,
  });


export const darkMaterial =
  new THREE.MeshStandardMaterial({
    color: "#273238",
    roughness: 0.5,
  });


// GLASS

export const glassMaterial =
  new THREE.MeshPhysicalMaterial({
    color:"#B9DDF2",
    transmission:1,
    transparent:true,
    opacity:0.35,
    roughness:0,
    thickness:0.2,
  });


// PLANTS

export const leafMaterial =
  new THREE.MeshStandardMaterial({
    color:"#8FB573",
    roughness:1,
  });


// LIGHTS

export const warmLightColor =
  "#FFD39A";

  // Railing Metal
 export const metalMaterial =
    new THREE.MeshStandardMaterial({
      color:"#a1a1a1",
      metalness:0.8,
      roughness:0.3
    });