import * as THREE from "../lib/three.module.js";
// import { OrbitControls } from "../lib/controls/OrbitControls.js";
import { OrbitControls } from "../lib/controls/OrbitControls.js";

let camera, scene, renderer;
let geometry = [];
let material = [];
let mesh = [];
let controls;

init();

function init() {
  /**
   * define basic
   */
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  camera.position.z = 10;

  scene = new THREE.Scene();

  /**
   * core shapes
   */
  // FIXME:: here is what I make...
  geometry[0] = new THREE.BoxGeometry(1, 1, 1);

  material[0] = new THREE.MeshNormalMaterial();

  material[1] = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/joker.png"),
    side: THREE.DoubleSide,
  });
  material[2] = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/dark_knight.jpg"),
    side: THREE.DoubleSide,
  });
  material[3] = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/laravel.png"),
    side: THREE.DoubleSide,
  });
  material[4] = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/oldboy.jpg"),
    side: THREE.DoubleSide,
  });
  material[5] = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/superman.png"),
    side: THREE.DoubleSide,
  });
  material[6] = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/vue.png"),
    side: THREE.DoubleSide,
  });
  let cubeMaterial = new THREE.MeshFaceMaterial([
    material[1],
    material[2],
    material[3],
    material[4],
    material[5],
    material[6],
  ]);

  // mesh[0] = new THREE.Mesh(geometry[0], material[0]);
  mesh[0] = new THREE.Mesh(geometry[0], cubeMaterial);
  scene.add(mesh[0]);

  /**
   * create canvas and append ... and so on
   */
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);

  /**
   * controls
   */
  controls = new OrbitControls(camera, renderer.domElement);
  // controls = new PointerLockControls(camera, document.body);
  // document.body.addEventListener("click", (e) => {
  //   controls.lock();
  // });
}

/**
 * animation
 */
// FIXME:
function animation(time) {
  mesh[0].rotation.x = time / 2000;
  mesh[0].rotation.y = time / 1000;

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
