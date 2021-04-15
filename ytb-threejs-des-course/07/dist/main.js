//// mandatory being declared
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
let renderer = new THREE.WebGLRenderer({ antialias: true });

// canvas color
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x444444);
renderer.setSize(window.innerWidth, window.innerHeight);

// optional
// let gridCenterColor = new THREE.Color("rgb(200, 200, 50)");
// let gridColor = new THREE.Color("rgb(100, 80, 20)");

// let axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

// let gridHelper = new THREE.GridHelper(100, 20, gridCenterColor, gridColor);

// scene.add(gridHelper);

/**
 * this is core object
 */
let sphereGeometry = new THREE.SphereGeometry(6, 64, 64);
let sphereMaterialLineBasic = new THREE.LineBasicMaterial({
  linewidth: 2,
  color: 0xffc3c3,
});
let sphereMaterialDashed = new THREE.LineDashedMaterial({
  color: 0xffc3c3,
  dashSize: 3,
  scale: 1,
  gapSize: 1,
  scale: 5,
});
let sphere = new THREE.Line(
  geo2line(sphereGeometry),
  sphereMaterialDashed,
  THREE.LineSegments
);
sphere.position.set(2.5, 6, 2.5);
sphere.castShadow = false;
scene.add(sphere);

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
camera.position.x = 10;
camera.position.y = 20;
camera.position.z = 10;
camera.lookAt(scene.position);

/**
 * controls
 */

let guiControls = new (function () {
  this.rotationX = 0.0;
  this.rotationY = 0.01;
  this.rotationZ = 0.0;

  this.material = "dashed";
  this.color = "#ff0000";
  this.scale = 1;
  this.dashSize = 0.0001;
  this.gapSize = 1;
})();
let datGui = new dat.GUI();

datGui1 = datGui.addFolder("1");

datGui1.add(guiControls, "rotationX", 0, 1);
datGui1.add(guiControls, "rotationY", 0, 1);
datGui1.add(guiControls, "rotationZ", 0, 1);

datGui2 = datGui.addFolder("2");
datGui2.add(guiControls, "material", ["solid", "dashed"]);

datGui2.addColor(guiControls, "color");

datGui2.add(guiControls, "dashSize", 0, 1).listen();
datGui2.add(guiControls, "gapSize", 0, 10);
// .step(0.05)
// .onChange(function (value) {
//   sphere.material.gapSize = value;
// });

/**
 * animation
 */
function animate() {
  sphere.rotation.x += guiControls.rotationX;
  sphere.rotation.y += guiControls.rotationY;
  sphere.rotation.z += guiControls.rotationZ;

  sphere.material =
    guiControls.material === "solid"
      ? sphereMaterialLineBasic
      : sphereMaterialDashed;

  sphere.material.color.set(guiControls.color);

  sphere.material.dashSize = guiControls.dashSize;
  sphere.material.gapSize = guiControls.gapSize;
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

function geo2line(geo) {
  let geometry = new THREE.Geometry();
  let vertices = geometry.vertices;

  let material = new THREE.LineBasicMaterial({
    color: 0x0000ff,
  });

  for (i = 0; i < geo.faces.length; i++) {
    let face = geo.faces[i];

    if (face instanceof THREE.Face3) {
      vertices.push(geo.vertices[face.a].clone());
      vertices.push(geo.vertices[face.b].clone());
      vertices.push(geo.vertices[face.b].clone());
      vertices.push(geo.vertices[face.c].clone());
      vertices.push(geo.vertices[face.c].clone());
      vertices.push(geo.vertices[face.a].clone());
    } else if (face instanceof THREE.Face4) {
      vertices.push(geo.vertices[face.a].clone());
      vertices.push(geo.vertices[face.b].clone());
      vertices.push(geo.vertices[face.b].clone());
      vertices.push(geo.vertices[face.c].clone());
      vertices.push(geo.vertices[face.c].clone());
      vertices.push(geo.vertices[face.d].clone());
      vertices.push(geo.vertices[face.d].clone());
      vertices.push(geo.vertices[face.a].clone());
    }
  }

  // geometry.computeLineDistances();
  let line = new THREE.Line(geometry, material);
  line.computeLineDistances();

  return geometry;
}
