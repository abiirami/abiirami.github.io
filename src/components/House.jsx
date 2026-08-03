import { useEffect, useRef } from "react";
import * as THREE from "three";
import OfficeRoom from "./rooms/OfficeRoom";
import ArtRoom from "./rooms/ArtRoom";
import Hallway from "./rooms/Hallway";
import BackRoom from "./rooms/BackRoom";
import RightRoom from "./rooms/RightRoom";
import Balcony from "./rooms/Balcony";
import { wallMaterial, metalMaterial } from "./materials";

export default function House() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;


        // --------------------
        // SCENE
        // --------------------

        const scene = new THREE.Scene();


        // --------------------
        // CAMERA
        // --------------------

        const camera = new THREE.PerspectiveCamera(
            40,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        camera.position.set(
            0,
            2,
            10
        );

        camera.lookAt(
            0,
            2,
            0
        );


        // --------------------
        // RENDERER
        // --------------------

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setPixelRatio(
            window.devicePixelRatio
        );

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setClearColor(
            0x000000,
            0
        );

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type =
            THREE.PCFSoftShadowMap;


        containerRef.current.appendChild(
            renderer.domElement
        );

        // --------------------
        // HOUSE GROUP
        // --------------------

        const houseGroup = new THREE.Group();

        const office =
            OfficeRoom();

        office.position.set(
            -0.535,
            2.1,
            0.7
        );
        houseGroup.add(
            office
        );

        const artRoom = ArtRoom();
        artRoom.position.set(
            -0.8,
            0.7,
            0
        );

        houseGroup.add(
            artRoom
        );

        const hallway = Hallway();

        hallway.position.set(
            0.265,
            0.7,
            0
        );

        houseGroup.add(
            hallway
        );

        const backRoom = BackRoom();

        backRoom.position.set(
            -0.535, // align with Office
            2.1,    // upper floor
            -0.7    // behind Office
        );

        houseGroup.add(
            backRoom
        );

        const rightRoom = RightRoom();


rightRoom.position.set(
  1.065,
  1.4,
  0
);


houseGroup.add(
  rightRoom
);


const balcony = Balcony();

balcony.position.set(
  1.6,   // outside right wall
1.4,   // second floor height
  0.7    // sticks toward front
);


houseGroup.add(
  balcony
);
        scene.add(
            houseGroup
        );


        // --------------------
        // MAIN HOUSE
        // --------------------

        const house =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    3.2,   // width
                    2.8,   // height
                    2.8    // depth
                ),
                wallMaterial
            );


        house.position.y = 1.4;

        house.castShadow = true;
        house.receiveShadow = true;


        // houseGroup.add(
        //     house
        // );

// --------------------
// ROOF SLAB
// --------------------

const roof =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            3.5,   // width (3.2 + 0.3)
            0.08,  // thickness
            3.1    // depth (2.8 + 0.3)
        ),
        metalMaterial   // same material as balcony railing
    );


roof.position.set(
    0,
    2.84,
    0
);


roof.castShadow = true;
roof.receiveShadow = true;


houseGroup.add(
    roof
);



        // --------------------
        // GROUND PLATFORM
        // --------------------

        const ground =
            new THREE.Mesh(
                new THREE.CircleGeometry(
                    10,
                    64
                ),
                new THREE.MeshStandardMaterial({
                    color: "#A8C98A",
                    roughness: 1
                })
            );

        ground.rotation.x = -Math.PI / 2;
        // ground.rotation.z = -Math.PI / 4;
        ground.position.y = -0.02;
        // ground.position.x = 18;
        // ground.position.z = 40;

        ground.receiveShadow = true;

        scene.add(
            ground
        );



        // --------------------
        // LIGHTING
        // --------------------

        const ambient =
            new THREE.AmbientLight(
                "#fff1d0",
                1.8
            );

        scene.add(
            ambient
        );


        const sun =
            new THREE.DirectionalLight(
                "#ffe0a3",
                2
            );


        sun.position.set(
            5,
            7,
            5
        );


        sun.castShadow = true;


        scene.add(
            sun
        );


        // const interior =
        //     new THREE.PointLight(
        //         "#ffc27a",
        //         2.5,
        //         5
        //     );


        // interior.position.set(
        //     -0.7,
        //     2,
        //     0
        // );


        // houseGroup.add(
        //     interior
        // );

        // --------------------
        // MOUSE ROTATION
        // --------------------

        let dragging = false;
        let previousX = 0;
        let velocity = 0;


        function mouseDown(event) {
            dragging = true;
            previousX = event.clientX;
            renderer.domElement.style.cursor = "grabbing";
        }


        function mouseMove(event) {
            if (!dragging) return;

            const delta =
                event.clientX - previousX;

            velocity = delta * 0.004;

            houseGroup.rotation.y += velocity;

            previousX = event.clientX;
        }


        function mouseUp() {
            dragging = false;
            renderer.domElement.style.cursor = "grab";
        }


        renderer.domElement.addEventListener(
            "mousedown",
            mouseDown
        );

        renderer.domElement.addEventListener(
            "mousemove",
            mouseMove
        );

        window.addEventListener(
            "mouseup",
            mouseUp
        );


        // --------------------
        // ANIMATION
        // --------------------

        let animationId;


        function animate() {

            animationId =
                requestAnimationFrame(
                    animate
                );


            //   if (!dragging) {

            //     houseGroup.rotation.y += velocity;

            //     velocity *= 0.94;


            //     // subtle idle movement
            //     if (Math.abs(velocity) < 0.00005) {
            //       houseGroup.rotation.y += 0.001;
            //     }
            //   }


            renderer.render(
                scene,
                camera
            );
        }


        animate();



        // --------------------
        // RESIZE
        // --------------------

        function handleResize() {

            camera.aspect =
                window.innerWidth /
                window.innerHeight;


            camera.updateProjectionMatrix();


            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );
        }


        window.addEventListener(
            "resize",
            handleResize
        );



        // --------------------
        // CLEANUP
        // --------------------

        return () => {

            cancelAnimationFrame(
                animationId
            );


            renderer.domElement.removeEventListener(
                "mousedown",
                mouseDown
            );


            renderer.domElement.removeEventListener(
                "mousemove",
                mouseMove
            );


            window.removeEventListener(
                "mouseup",
                mouseUp
            );


            window.removeEventListener(
                "resize",
                handleResize
            );


            if (
                containerRef.current &&
                containerRef.current.contains(
                    renderer.domElement
                )
            ) {

                containerRef.current.removeChild(
                    renderer.domElement
                );
            }


            renderer.dispose();
        };


    }, []);



    return (

        <div
            ref={containerRef}
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                background: "transparent",
                cursor: "grab",
            }}
        />

    );
}