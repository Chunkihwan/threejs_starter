import "./css/index.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { gsap } from "gsap";
import Scrollbar from "smooth-scrollbar";

Scrollbar.init(document.querySelector("#scrollArea"));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".webgl").appendChild(renderer.domElement);

camera.position.z = 40;

// gsap.from(camera.position, {
//     // delay: 0.5,
//     duration: 2,
//     z: 400,
//     ease: "power3.inOut",
// });

const addCube = (i) => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
    );
    console.log(cube);
    // gsap.from(cube.position, {
    //     delay: i * 0.02,
    //     duration: 1,
    //     x: "random(100,-100)",
    //     y: "random(100,-100)",
    //     z: "random(100,-100)",
    //     ease: "power4.inOut",
    // });
    // gsap.from(cube, {
    //     delay: i * 0.02,
    //     alpha: 0,
    //     sclae: 0,
    //     ease: "power4.inOut",
    // });

    scene.add(cube);
};

for (let i = 0; i < 100; i++) {
    addCube(i);
}

function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

gsap.from("h1", { duration: 1, alpha: 0, x: 400, ease: "power3.inOut" });

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("mouseover", () => {
    gsap.to(closeBtn, {
        duration: 0.5,
        ease: "steps(23)",
        backgroundPosition: "-690px 0px",
    });
});
closeBtn.addEventListener("mouseout", () => {
    gsap.to(closeBtn, {
        duration: 0.5,
        ease: "steps(23)",
        backgroundPosition: "0px 0px",
    });
});
