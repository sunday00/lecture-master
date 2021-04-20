import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/controls/OrbitControls.js";
import { ObjectLoader } from "../lib/node_modules/three/src/loaders/ObjectLoader.js";

let camera, scene, renderer;
let geometry = [];
let material = [];
let mesh = [];

let light = [];
let lightHelper;

let controls;

let loaders = [];

init();

function init() {
  /**
   * define basic
   */
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.x = 700;
  camera.position.y = 200;
  camera.position.z = -500;

  scene = new THREE.Scene();

  /**
   * loader
   */
  loaders[0] = new THREE.ObjectLoader();
  loaders[0].load(
    "../lib/resources/models/json/lightmap/lightmap.json",
    function (obj) {
      scene.add(obj);
    }
  );

  /**
   * core shapes
   */
  // FIXME:: here is what I make...
  geometry[0] = new THREE.BoxGeometry(1, 1, 1);

  material[0] = new THREE.MeshNormalMaterial();

  mesh[0] = new THREE.Mesh(geometry[0], material[0]);
  mesh[0].castShadow = true;

  scene.add(mesh[0]);

  /**
   * light
   */
  // FIXME:
  light[0] = new THREE.DirectionalLight(0x000000, 1);
  scene.add(light[0]);

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

  // FIXME:
  let guiControls = new (function () {})();
  let datGui = new dat.GUI();

  let datGui1 = datGui.addFolder("1");

  // datGui1.add(guiControls, "light", true);

  datGui1.open();
}

/**
 * animation
 */
// FIXME:
function animation(time) {
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
