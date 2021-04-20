import * as THREE from "../lib/three.module.js";
// import { OrbitControls } from "../lib/controls/OrbitControls.js";
import { OrbitControls } from "../lib/controls/OrbitControls.js";

let camera, scene, renderer;
let geometry = [];
let material = [];
let mesh = [];

let light = [];
let lightHelper;

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
  camera.position.x = 2;
  camera.position.y = 2;
  camera.position.z = 2;

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
  material[2] = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
  material[3] = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load("../lib/resources/joker.png"),
    side: THREE.DoubleSide,
  });

  mesh[0] = new THREE.Mesh(geometry[0], material[0]);
  mesh[0].castShadow = true;

  scene.add(mesh[0]);

  /**
   * light
   */
  // FIXME:
  // light[0] = new THREE.AmbientLight(0xffffff, 0.5);
  light[0] = new THREE.AmbientLight(0xff0000);
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
  // controls = new PointerLockControls(camera, document.body);
  // document.body.addEventListener("click", (e) => {
  //   controls.lock();
  // });

  // FIXME:
  let guiControls = new (function () {
    this.light = true;
    this.lightType = "point";
    this.material = "phong";
  })();
  let datGui = new dat.GUI();

  let datGui1 = datGui.addFolder("1");

  datGui1.add(guiControls, "light", true).onChange((v) => {
    v ? scene.add(light[0]) : scene.remove(light[0]);
  });

  datGui1
    .add(guiControls, "material", ["basic", "phong", "phong-joker", "lambert"])
    .onChange((v) => {
      switch (v) {
        case "phong":
          mesh[0].material = new THREE.MeshPhongMaterial({ color: 0xffffff });
          break;
        case "lambert":
          mesh[0].material = new THREE.MeshLambertMaterial({ color: 0xffffff });
          break;
        case "phong-joker":
          mesh[0].material = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load("../lib/resources/joker.png"),
          });
          break;
        default:
          mesh[0].material = new THREE.MeshBasicMaterial({ color: 0xffffff });
          break;
      }
    });

  datGui1
    .add(guiControls, "lightType", ["point", "ambient", "spot", "directional"])
    .onChange((v) => {
      scene.remove(light[0]);
      lightHelper && scene.remove(lightHelper);

      switch (v) {
        case "point":
          light[0] = new THREE.PointLight(0xff0000, 1, 100);
          light[0].position.set(-1.5, 2, -4);

          lightHelper = new THREE.PointLightHelper(light[0], 1);

          break;
        case "ambient":
          light[0] = new THREE.AmbientLight(0x0000ff);
          break;
        case "spot":
          light[0] = new THREE.SpotLight(0x00ff00);
          light[0].position.set(-1.5, 2, -4);
          light[0].target = mesh[0];

          lightHelper = new THREE.SpotLightHelper(light[0]);
          break;
        default:
          light[0] = new THREE.DirectionalLight(0xff00ff, 1);
          light[0].position.set(-1.5, 2, -4);
          light[0].target = mesh[0];
          lightHelper = new THREE.DirectionalLightHelper(light[0], 5);
          break;
      }

      if (guiControls.light) scene.add(light[0]);
      scene.add(lightHelper);
    });

  datGui1.open();
}

/**
 * animation
 */
// FIXME:
function animation(time) {
  // mesh[0].rotation.x = time / 2000;
  // mesh[0].rotation.y = time / 1000;

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
