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
renderer.setClearColor(0x444);
renderer.setSize(window.innerWidth, window.innerHeight);

// optional
let axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

/**
 * this is core object
 */
let cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
let cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xdddddd,
  wireframe: true,
});
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0, 0);
scene.add(cube);

/**
 * camera
 */
camera.position.x = 40;
camera.position.y = 40;
camera.position.z = 40;
camera.lookAt(scene.position);

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
  renderer.render(scene, camera);
};

render();
