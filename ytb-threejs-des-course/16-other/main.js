import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/controls/OrbitControls.js";

let camera, scene, renderer;
let geometry = [];
let material = [];
let mesh = [];

let light = [];
let lightHelper;

let controls;

let loaders = [];

let effects = [];

let mouse = {
  x: undefined,
  y: undefined,
};
let raycaster;

init();

function init() {
  /**
   * define basic
   */
  raycaster = new THREE.Raycaster();

  camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  // camera.position.x = 700;
  // camera.position.y = 200;
  camera.position.z = 2.5;

  scene = new THREE.Scene();

  /**
   * loader
   */

  /**
   * core shapes
   */
  // FIXME:: here is what I make...
  geometry[0] = new THREE.PlaneGeometry(5, 5, 10, 10);

  // material[0] = new THREE.MeshNormalMaterial();
  material[0] = new THREE.MeshPhongMaterial({
    // color: 0x00ff00,
    side: THREE.DoubleSide,
    flatShading: THREE.FlatShading,
    vertexColors: true,
  });

  mesh[0] = new THREE.Mesh(geometry[0], material[0]);
  mesh[0].castShadow = true;

  // const planePositionArray = mesh[0].geometry.attributes.position.array;
  // for (let i = 0; i < planePositionArray.length; i += 3) {
  //   const x = planePositionArray[i];
  //   const y = planePositionArray[i + 1];
  //   const z = planePositionArray[i + 2];

  //   planePositionArray[i + 2] = z + Math.random();
  // }

  /**
   * light
   */
  // FIXME:
  light[0] = new THREE.DirectionalLight(0xffffff, 1);
  light[1] = new THREE.PointLight(0xff0000, 10, 100);

  light[0].position.set(0, 0, 1);
  light[1].position.set(0, 0, -1);

  scene.add(light[0]);
  scene.add(light[1]);

  /**
   * create canvas and append ... and so on
   */
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);

  /**
   * effects
   */

  /**
   * controls
   */
  controls = new OrbitControls(camera, renderer.domElement);

  // FIXME:
  let guiControls = new (function () {
    this.width = 5;
    this.height = 5;
    this.widthSeg = 10;
    this.heightSeg = 10;
  })();
  let datGui = new dat.GUI();

  let datGui1 = datGui.addFolder("size");
  function handleChangeSize(v) {
    mesh[0].geometry.dispose();
    mesh[0].geometry = geometry[0] = new THREE.PlaneGeometry(
      guiControls.width,
      guiControls.height,
      guiControls.widthSeg,
      guiControls.heightSeg
    );
    const planePositionArray = mesh[0].geometry.attributes.position.array;
    for (let i = 0; i < planePositionArray.length; i += 3) {
      const x = planePositionArray[i];
      const y = planePositionArray[i + 1];
      const z = planePositionArray[i + 2];

      planePositionArray[i + 2] = z + Math.random();
    }

    const colors = [];
    for (let i = 0; i < mesh[0].geometry.attributes.position.count; i++) {
      colors.push(0.5, 0.7, 0.5);
    }

    mesh[0].geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(colors), 3)
    );
  }
  datGui1.add(guiControls, "width", 1, 30).onChange(handleChangeSize);
  datGui1.add(guiControls, "height", 1, 30).onChange(handleChangeSize);
  datGui1.add(guiControls, "widthSeg", 1, 30).onChange(handleChangeSize);
  datGui1.add(guiControls, "heightSeg", 1, 30).onChange(handleChangeSize);

  datGui1.open();

  handleChangeSize(null);
  scene.add(mesh[0]);
}

/**
 * animation
 */
// FIXME:
function animation(time) {
  renderer.render(scene, camera);

  mesh[0].rotation.z += 0.01;

  raycaster.setFromCamera(mouse, camera);
  const interSects = raycaster.intersectObject(mesh[0]);

  if (interSects.length > 0) {
    const { color } = interSects[0].object.geometry.attributes;

    const r = 1;
    const g = 0;
    const b = 0;

    color.setX(interSects[0].face.a, r);
    color.setY(interSects[0].face.a, g);
    color.setZ(interSects[0].face.a, b);

    color.setX(interSects[0].face.b, r);
    color.setY(interSects[0].face.b, g);
    color.setZ(interSects[0].face.b, b);

    color.setX(interSects[0].face.c, r);
    color.setY(interSects[0].face.c, g);
    color.setZ(interSects[0].face.c, b);

    color.needsUpdate = true;
  }
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / innerHeight) * 2 + 1;
});
