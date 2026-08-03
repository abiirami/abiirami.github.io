import * as THREE from "three";
import { wallMaterial, floorMaterial, glassMaterial } from "../materials";

export default function RightRoom() {

    const room = new THREE.Group();

    // --------------------
    // DIMENSIONS
    // --------------------

    const width = 1.07;
    const floorHeight = 1.4;
    const depth = 2.8;
    const wallThickness = 0.08;

    // --------------------
    // ROOM CREATOR
    // --------------------

    function createRoom(glassRightWall = false) {

        const group = new THREE.Group();

        // RIGHT WALL

        const rightWall = new THREE.Mesh(
            new THREE.BoxGeometry(
                wallThickness,
                floorHeight,
                depth
            ),
            glassRightWall
                ? glassMaterial
                : wallMaterial
        );

        rightWall.position.x = width / 2;

        group.add(rightWall);

        // --------------------
        // RIGHT WALL COVER STRIP
        // --------------------

        if (glassRightWall) {

            const wallCover =
                new THREE.Mesh(
                    new THREE.BoxGeometry(
                        0.09,        // thickness of cover
                        floorHeight, // same height as wall
                        1.4          // length of cover
                    ),
                    wallMaterial
                );


            wallCover.position.set(
                width / 2 + 0.01,
                0,
                -0.7
            );


            group.add(wallCover);

        }

        // FRONT WALL

        const frontWall = new THREE.Mesh(
            new THREE.BoxGeometry(
                width,
                floorHeight,
                wallThickness
            ),
            wallMaterial
        );

        frontWall.position.z = depth / 2;

        group.add(frontWall);

        // BACK WALL

        const backWall = new THREE.Mesh(
            new THREE.BoxGeometry(
                width,
                floorHeight,
                wallThickness
            ),
            wallMaterial
        );

        backWall.position.z = -depth / 2;

        group.add(backWall);

        // FLOOR

        const floor = new THREE.Mesh(
            new THREE.BoxGeometry(
                width,
                0.05,
                depth
            ),
            floorMaterial
        );

        floor.position.y = -floorHeight / 2;

        group.add(floor);

        return group;
    }

    // --------------------
    // BOTTOM ROOM
    // --------------------

    const bottomRoom = createRoom(false);

    bottomRoom.position.y = -0.7;

    room.add(bottomRoom);

    // --------------------
    // TOP ROOM
    // --------------------

    const topRoom = createRoom(true);

    topRoom.position.y = 0.7;

    room.add(topRoom);

    return room;
}