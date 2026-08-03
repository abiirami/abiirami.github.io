import * as THREE from "three";

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
    // MATERIALS
    // --------------------

    const wallMaterial =
        new THREE.MeshStandardMaterial({
            color: "#F7E9D2",
            roughness: 0.9
        });

    const glassMaterial =
        new THREE.MeshPhysicalMaterial({
            color: "#cfe6ff",
            transmission: 1,
            transparent: true,
            opacity: 0.65,
            roughness: 0,
            metalness: 0,
            thickness: 0.05
        });

    // --------------------
    // ROOM CREATOR
    // --------------------

    function createRoom(glassRightWall = false) {

        const group = new THREE.Group();

        // LEFT WALL

        const leftWall = new THREE.Mesh(
            new THREE.BoxGeometry(
                wallThickness,
                floorHeight,
                depth
            ),
            wallMaterial
        );

        leftWall.position.x = -width / 2;

        group.add(leftWall);

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
            wallMaterial
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