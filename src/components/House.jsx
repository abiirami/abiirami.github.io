import { useEffect, useRef } from "react";
import * as THREE from "three";

import OfficeRoom from "./rooms/OfficeRoom";
import ArtRoom from "./rooms/ArtRoom";
import Hallway from "./rooms/Hallway";
import BackRoom from "./rooms/BehindRoom";
import RightRoom from "./rooms/RightRoom";
import Balcony from "./rooms/Balcony";

import { metalMaterial } from "./materials";

import { OrbitControls } from
    "three/examples/jsm/controls/OrbitControls.js";


export default function House() {

    const containerRef = useRef(null);


    useEffect(() => {

        if (!containerRef.current) return;



        // --------------------
        // SCENE
        // --------------------

        const scene =
            new THREE.Scene();


        scene.background =
            new THREE.Color("#dfe8d5");



        // --------------------
        // CAMERA
        // --------------------

        const camera =
            new THREE.PerspectiveCamera(
                40,
                window.innerWidth /
                window.innerHeight,
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
            1.5,
            0
        );



        // --------------------
        // RENDERER
        // --------------------

        const renderer =
            new THREE.WebGLRenderer({
                antialias: true
            });


        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                1.5
            )
        );


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );


        renderer.outputColorSpace =
            THREE.SRGBColorSpace;


        renderer.shadowMap.enabled = true;


        renderer.shadowMap.type =
            THREE.PCFSoftShadowMap;


        containerRef.current.appendChild(
            renderer.domElement
        );




        // --------------------
        // HOUSE
        // --------------------

        const houseGroup =
            new THREE.Group();



        const office =
            OfficeRoom();


        office.position.set(
            -0.535,
            2.1,
            0.7
        );


        office.userData = {

            page: "/tech_portfolio",

            label:
                "Click to view tech portfolio"

        };


        houseGroup.add(
            office
        );



        const artRoom =
            ArtRoom();


        artRoom.position.set(
            -0.8,
            0.7,
            0
        );


        artRoom.userData = {

            page: "/art",

            label:
                "Click to view art portfolio"

        };


        houseGroup.add(
            artRoom
        );



        const hallway =
            Hallway();


        hallway.position.set(
            0.265,
            0.7,
            0
        );


        hallway.userData = {

            page: "/about",

            label:
                "Click to view About Me"

        };


        houseGroup.add(
            hallway
        );



        const backRoom =
            BackRoom();


        backRoom.position.set(
            -0.535,
            2.1,
            -0.7
        );


        houseGroup.add(
            backRoom
        );



        const rightRoom =
            RightRoom();


        rightRoom.position.set(
            1.065,
            1.4,
            0
        );


        houseGroup.add(
            rightRoom
        );



        const balcony =
            Balcony();


        balcony.position.set(
            1.9,
            1.4,
            0.7
        );


        houseGroup.add(
            balcony
        );


        scene.add(
            houseGroup
        );




        // --------------------
        // ROOF
        // --------------------

        const roof =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    3.5,
                    0.08,
                    3.1
                ),
                metalMaterial
            );


        roof.position.y =
            2.84;


        roof.castShadow = true;
        roof.receiveShadow = true;


        houseGroup.add(
            roof
        );



        houseGroup.traverse(
            object => {

                if (object.isMesh) {

                    object.castShadow = true;
                    object.receiveShadow = true;

                }

            }
        );

        // --------------------
        // GROUND
        // --------------------

        const ground =
            new THREE.Mesh(
                new THREE.CircleGeometry(
                    10,
                    64
                ),
                new THREE.MeshStandardMaterial({
                    color: "#9fc47d",
                    roughness: 1
                })
            );


        ground.rotation.x =
            -Math.PI / 2;


        ground.receiveShadow = true;


        scene.add(
            ground
        );




        // --------------------
        // LIGHTING
        // --------------------

        scene.add(
            new THREE.AmbientLight(
                "#fff8e7",
                1.5
            )
        );



        const sun =
            new THREE.DirectionalLight(
                "#fff1d6",
                2.5
            );


        sun.position.set(
            4,
            5,
            5
        );


        sun.castShadow = true;


        sun.shadow.mapSize.set(
            1024,
            1024
        );


        sun.shadow.camera.near =
            0.1;


        sun.shadow.camera.far =
            50;


        sun.shadow.camera.left =
            -10;


        sun.shadow.camera.right =
            10;


        sun.shadow.camera.top =
            10;


        sun.shadow.camera.bottom =
            -10;


        camera.add(
            sun
        );


        scene.add(
            camera
        );




        // --------------------
        // CONTROLS
        // --------------------

        const controls =
            new OrbitControls(
                camera,
                renderer.domElement
            );


        controls.target.set(
            0,
            1.8,
            0
        );


        controls.enableDamping = true;

        controls.dampingFactor = 0.05;


        controls.minPolarAngle =
            Math.PI / 2.1;


        controls.maxPolarAngle =
            Math.PI / 2.1;


        controls.enablePan = false;

        controls.enableZoom = false;




        // --------------------
        // CLICK LABEL SYSTEM
        // --------------------

        const raycaster =
            new THREE.Raycaster();


        const mouse =
            new THREE.Vector2();


        let selectedRoom = null;



        const label =
            document.createElement(
                "div"
            );


        Object.assign(
            label.style,
            {
                position: "fixed",
                background:
                    "rgba(255,245,220,0.92)",
                color: "#6b4b32",
                padding:
                    "8px 14px",
                borderRadius:
                    "10px",
                fontFamily:
                    "sans-serif",
                fontSize:
                    "14px",
                pointerEvents:
                    "none",
                opacity:
                    "0",
                transform:
                    "translate(-50%, -50%)",
                transition:
                    "opacity .2s",
                zIndex:
                    "10"
            }
        );


        document.body.appendChild(
            label
        );




        function updateLabelPosition() {

            if (!selectedRoom)
                return;


            const position =
                new THREE.Vector3();


            selectedRoom.getWorldPosition(
                position
            );


            position.y += 0.2;


            position.project(
                camera
            );



            const x =
                (position.x * 0.5 + 0.5)
                * window.innerWidth;


            const y =
                (-position.y * 0.5 + 0.5)
                * window.innerHeight;



            label.style.left =
                `${x}px`;


            label.style.top =
                `${y}px`;

        }




        function findRoom(event) {


            const rect =
                renderer.domElement
                    .getBoundingClientRect();


            mouse.x =
                ((event.clientX - rect.left)
                    / rect.width) * 2 - 1;


            mouse.y =
                -((event.clientY - rect.top)
                    / rect.height) * 2 + 1;



            raycaster.setFromCamera(
                mouse,
                camera
            );



            const hits =
                raycaster.intersectObjects(
                    houseGroup.children,
                    true
                );



            if (!hits.length)
                return null;



            let object =
                hits[0].object;



            while (object) {

                if (object.userData.page)
                    return object;


                object =
                    object.parent;

            }


            return null;

        }




        function clickRoom(event) {

            const room =
                findRoom(event);



            if (!room) {

                selectedRoom = null;

                label.style.opacity = 0;

                return;

            }




            if (selectedRoom !== room) {

                selectedRoom = room;


                label.innerText =
                    room.userData.label;


                label.style.opacity = 1;


                updateLabelPosition();


                return;

            }




            window.location.hash =
                room.userData.page;

        }




        renderer.domElement.addEventListener(
            "pointerdown",
            clickRoom
        );




        // --------------------
        // LOOP
        // --------------------

        let frame;


        function animate() {

            frame =
                requestAnimationFrame(
                    animate
                );


            controls.update();


            updateLabelPosition();


            renderer.render(
                scene,
                camera
            );

        }


        animate();




        // --------------------
        // RESIZE
        // --------------------

        function resize() {

            camera.aspect =
                window.innerWidth /
                window.innerHeight;


            camera.updateProjectionMatrix();


            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );


            updateLabelPosition();

        }


        window.addEventListener(
            "resize",
            resize
        );




        // --------------------
        // CLEANUP
        // --------------------

        return () => {


            cancelAnimationFrame(
                frame
            );


            window.removeEventListener(
                "resize",
                resize
            );


            renderer.domElement.removeEventListener(
                "pointerdown",
                clickRoom
            );


            if (
                document.body.contains(label)
            ) {

                document.body.removeChild(
                    label
                );

            }



            controls.dispose();


            renderer.dispose();



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

        };


    }, []);



    return (

        <div

            ref={containerRef}

            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                cursor: "grab"
            }}

        />

    );

}