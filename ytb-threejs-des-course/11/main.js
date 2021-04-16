import * as THREE from "../lib/three.module.js";

let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {
  /**
   * define basic
   */
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  scene = new THREE.Scene();

  /**
   * core shapes
   */
  // FIXME:: here is what I make...
  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  /**
   * create canvas and append ... and so on
   */
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

/**
 * animation
 */
// FIXME:
function animation(time) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
