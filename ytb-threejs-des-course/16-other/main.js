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

let guiControls;

init();

function init() {
  /**
   * define basic
   */
  raycaster = new THREE.Raycaster();

  camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  // camera.position.x = 700;
  // camera.position.y = 200;
  camera.position.z = 6;

  scene = new THREE.Scene();

  /**
   * loader
   */

  /**
   * core shapes
   */
  // FIXME:: here is what I make...
  geometry[0] = new THREE.PlaneGeometry(24, 24, 27, 27);

  // material[0] = new THREE.MeshNormalMaterial();
  material[0] = new THREE.MeshPhongMaterial({
    // color: 0x00ff00,
    side: THREE.DoubleSide,
    flatShading: THREE.FlatShading,
    vertexColors: true,
  });

  mesh[0] = new THREE.Mesh(geometry[0], material[0]);

  mesh[0].rotation.x -= 120;
  mesh[0].rotation.y -= 120;

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

  light[0].position.set(2, 2, 5);
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
  guiControls = new (function () {
    this.width = 24;
    this.height = 24;
    this.widthSeg = 27;
    this.heightSeg = 27;

    this.r = 10;
    this.g = 0;
    this.b = 0;
  })();
  // TOGGLE: comment
  // INFO: gui state
  // let datGui = new dat.GUI();

  // TOGGLE: comment
  // let datGui1 = datGui.addFolder("size");
  function handleChangeSize(v) {
    mesh[0].geometry.dispose();
    mesh[0].geometry = geometry[0] = new THREE.PlaneGeometry(
      guiControls.width,
      guiControls.height,
      guiControls.widthSeg,
      guiControls.heightSeg
    );
    const planePositionArray = mesh[0].geometry.attributes.position.array;
    mesh[0].geometry.attributes.position.randomValue = [];
    for (let i = 0; i < planePositionArray.length; i++) {
      if (i % 3 === 0) {
        const x = planePositionArray[i];
        const y = planePositionArray[i + 1];
        const z = planePositionArray[i + 2];

        planePositionArray[i + 2] = z + Math.random();
      }
      mesh[0].geometry.attributes.position.randomValue.push(Math.random());
    }

    mesh[0].geometry.attributes.position.originalPosition = planePositionArray;

    const colors = [];
    for (let i = 0; i < mesh[0].geometry.attributes.position.count; i++) {
      colors.push(0.5, 0.7, 0.5);
    }

    mesh[0].geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(colors), 3)
    );
  }
  // TOGGLE: comment
  // datGui1.add(guiControls, "width", 1, 30).onChange(handleChangeSize);
  // datGui1.add(guiControls, "height", 1, 30).onChange(handleChangeSize);
  // datGui1.add(guiControls, "widthSeg", 1, 30).onChange(handleChangeSize);
  // datGui1.add(guiControls, "heightSeg", 1, 30).onChange(handleChangeSize);
  // datGui1.open();

  // TOGGLE: comment
  // let datGui2 = datGui.addFolder("color");
  // datGui2.add(guiControls, "r", 0, 10);
  // datGui2.add(guiControls, "g", 0, 10);
  // datGui2.add(guiControls, "b", 0, 10);
  // datGui2.open();

  handleChangeSize(null);
  scene.add(mesh[0]);
}

/**
 * animation
 */
// FIXME:
function animation(time) {
  renderer.render(scene, camera);
  // if ((time * 1000) % 2 === 0) return;
  // mesh[0].rotation.z += 0.01;
  const planePosition = mesh[0].geometry.attributes.position;
  for (let i = 0; i < planePosition.array.length; i++) {
    planePosition.array[i] =
      planePosition.originalPosition[i] +
      Math.cos(time * 0.01 + planePosition.randomValue[i]) * 0.003;
    planePosition.array[i + 1] =
      planePosition.originalPosition[i + 1] +
      Math.sin(time * 0.01 + planePosition.randomValue[i + 1]) * 0.003;
  }
  planePosition.needsUpdate = true;

  raycaster.setFromCamera(mouse, camera);
  const interSects = raycaster.intersectObject(mesh[0]);

  if (interSects.length > 0) {
    const { color } = interSects[0].object.geometry.attributes;

    const initialColor = {
      r: 0.5,
      g: 0.7,
      b: 0.5,
    };

    const hoverColor = {
      r: guiControls?.r * 0.1,
      g: guiControls?.g * 0.1,
      b: guiControls?.b * 0.1,
    };
    gsap.to(hoverColor, {
      ...initialColor,
      duration: 1,
      onUpdate: () => {
        color.setX(interSects[0].face.a, hoverColor.r);
        color.setY(interSects[0].face.a, hoverColor.g);
        color.setZ(interSects[0].face.a, hoverColor.b);

        color.setX(interSects[0].face.b, hoverColor.r);
        color.setY(interSects[0].face.b, hoverColor.g);
        color.setZ(interSects[0].face.b, hoverColor.b);

        color.setX(interSects[0].face.c, hoverColor.r);
        color.setY(interSects[0].face.c, hoverColor.g);
        color.setZ(interSects[0].face.c, hoverColor.b);

        color.needsUpdate = true;
      },
    });
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
