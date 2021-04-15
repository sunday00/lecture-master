//// mandatory being declared
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer({ antialias: true });

// canvas color
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0xdddddd);
renderer.setSize(window.innerWidth, window.innerHeight);

// optional
let gridCenterColor = new THREE.Color("rgb(200, 200, 50)");
let gridColor = new THREE.Color("rgb(100, 80, 20)");

let axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

let gridHelper = new THREE.GridHelper(100, 20, gridCenterColor, gridColor);

scene.add(gridHelper);

/**
 * this is core object
 */
let cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
let cubeMaterial = new THREE.MeshLambertMaterial({
  color: 0xff3300,
});
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(2.5, 4, 2.5);
cube.castShadow = true;
scene.add(cube);

let torGeometry = new THREE.TorusKnotGeometry(3, 1, 64, 64);
let torMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
let torusKnot = new THREE.Mesh(torGeometry, torMaterial);
torusKnot.position.set(-15, 6, 2.5);
torusKnot.castShadow = true;
scene.add(torusKnot);

let text;
const loader = new THREE.FontLoader();
loader.load("/lib/helvetiker_regular.typeface.json", function (font) {
  const textGeometry = new THREE.TextGeometry("Hello three.js!", {
    font: font,
    size: 2,
    height: 1,
    curveSegments: 12,
    // bevelEnabled: true,
    // bevelThickness: 2,
    // bevelSize: 8,
    // bevelOffset: 0,
    // bevelSegments: 5,
  });

  let textMaterial = new THREE.MeshPhongMaterial({ color: 0xff9000 });
  text = new THREE.Mesh(textGeometry, textMaterial);
  text.position.set(15, 6, 2.5);
  text.castShadow = true;
  scene.add(text);
});

let planeGeometry = new THREE.PlaneGeometry(100, 100, 100);
let planeMaterial = new THREE.MeshLambertMaterial({
  color: new THREE.Color("rgb(200,200,200)"),
  side: THREE.DoubleSide,
});
let plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);

/**
 * light
 */
let light = new THREE.SpotLight(0xeeeeee);
light.castShadow = true;
light.position.set(20, 35, 40);

scene.add(light);

/**
 * camera
 */
camera.position.x = 40;
camera.position.y = 40;
camera.position.z = 60;
camera.lookAt(scene.position);

let cameraHelper = new THREE.CameraHelper(light.shadow.camera);
scene.add(cameraHelper);

/**
 * controls
 */

let guiControls = new (function () {
  this.rotationX = 0.01;
  this.rotationY = 0.01;
  this.rotationZ = 0.01;

  this.lightX = 20;
  this.lightY = 80;
  this.lightZ = 40;

  this.intensity = 1;
  this.distance = 0;
  this.angle = 1.57;
  this.exponent = 0;

  this.shadowCameraNear = 20;
  this.shadowCameraFar = 500;
  this.shadowCameraFov = 50;
  this.shadowCameraVisible = true;
  this.shadowMapWidth = 1028;
  this.shadowMapHeight = 1028;
  this.shadowBias = 0.001;
  // this.shadowDarkness = 0.5;
  this.target = cube;
})();
let datGui = new dat.GUI();

datGui1 = datGui.addFolder("1");

datGui1.add(guiControls, "rotationX", 0, 1);
datGui1.add(guiControls, "rotationY", 0, 1);
datGui1.add(guiControls, "rotationZ", 0, 1);

datGui2 = datGui.addFolder("2");

// datGui2.add(guiControls, "lightSpeed", 0, 1);
datGui2.add(guiControls, "lightX", -600, 600);
datGui2.add(guiControls, "lightY", -600, 600);
datGui2.add(guiControls, "lightZ", -600, 600);

datGui3 = datGui.addFolder("3");
datGui3
  .add(guiControls, "target", ["cube", "torusKnot", "text"])
  .onChange(function () {
    if (guiControls.target == "cube") {
      light.target = cube;
    } else if (guiControls.target == "torusKnot") {
      light.target = torusKnot;
    } else if (guiControls.target == "text") {
      light.target = text;
    }
  });
datGui3.add(guiControls, "intensity", 0.01, 5);
datGui3.add(guiControls, "distance", 0, 1000);
datGui3.add(guiControls, "angle", 0.001, 1.57);
datGui3.add(guiControls, "exponent", 0, 50);

datGui4 = datGui.addFolder("4");
datGui4.add(guiControls, "shadowCameraNear", 1, 60).name("near");
datGui4.add(guiControls, "shadowCameraFar", 0, 300).name("far");
datGui4.add(guiControls, "shadowCameraFov", 1, 180).name("fov");

datGui4.add(guiControls, "shadowCameraVisible");
datGui4.add(guiControls, "shadowBias", 0, 1).name("bias");
// datGui4.add(guiControls, "shadowDarkness", 0, 1).onChange(function (value) {
//   light.shadowDarkness = value;
//   light.shadowCamera.updateProjectionMatrix();
// });
// datGUI.close();

/**
 * animation
 */
function animate() {
  cube.rotation.x += guiControls.rotationX;
  cube.rotation.y += guiControls.rotationY;
  cube.rotation.z += guiControls.rotationZ;

  light.position.x = guiControls.lightX;
  light.position.y = guiControls.lightY;
  light.position.z = guiControls.lightZ;

  light.intensity = guiControls.intensity;
  light.distance = guiControls.distance;
  light.angle = guiControls.angle;
  light.exponent = guiControls.exponent;

  light.shadow.camera.near = guiControls.shadowCameraNear;
  light.shadow.camera.far = guiControls.shadowCameraFar;
  light.shadow.camera.fov = guiControls.shadowCameraFov;

  light.shadow.bias = guiControls.shadowBias;
  // light.shadow.camera.updateProjectionMatrix();

  scene.remove(cameraHelper);
  if (guiControls.shadowCameraVisible) {
    cameraHelper = new THREE.CameraHelper(light.shadow.camera);
    scene.add(cameraHelper);
  }

  // light.shadowCameraFov = guiControls.shadowCameraFov;
  // light.shadowCameraVisible = guiControls.shadowCameraVisible;
  // light.shadow.bias = guiControls.shadowBias;
  // light.shadowDarkness = guiControls.shadowDarkness;
}

// append canvas to body
document.body.appendChild(renderer.domElement);
controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.addEventListener("change", render);

//// maybe common
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

let render = function () {
  requestAnimationFrame(render);

  animate();

  renderer.render(scene, camera);
};

render();
