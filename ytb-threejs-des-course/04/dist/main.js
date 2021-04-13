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
renderer.setClearColor(0x444);
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
// let cubeMaterial = new THREE.MeshBasicMaterial({
let cubeMaterial = new THREE.MeshLambertMaterial({
  color: 0xff3300,
});
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(2.5, 7, 2.5);
cube.castShadow = true;
scene.add(cube);

let planeGeometry = new THREE.PlaneGeometry(30, 30, 30);
let planeMaterial = new THREE.MeshLambertMaterial({
  color: new THREE.Color("rgb(200,200,200)"),
  side: THREE.DoubleSide,
});
let plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.position.set(0,0,0);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);

/**
 * light
 */
let light = new THREE.SpotLight(0xff0000);
light.castShadow = true;
light.position.set(15, 30, 30);

// light.target.position.set(0, 0, 0);
// scene.add(light.target);

scene.add(light);

/**
 * camera
 */
camera.position.x = 40;
camera.position.y = 40;
camera.position.z = 40;
camera.lookAt(scene.position);

/**
 * animation
 */
let time = 0;
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.08;
  cube.rotation.z += 0.05;

  light.position.x = Math.cos(time * 0.1) * 60;
  light.position.z = Math.sin(time * 0.1) * 60;
  time++;
}

// append canvas to body
document.body.appendChild(renderer.domElement);

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
