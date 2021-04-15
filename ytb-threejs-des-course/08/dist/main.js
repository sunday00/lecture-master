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

var loader = new THREE.ColladaLoader();
// loader.options.convertUpAxis = true;
let dae;
loader.load(
  "https://cdn.rawgit.com/wpdildine/wpdildine.github.com/master/models/monkey.dae",
  function (collada) {
    dae = collada.scene;
    dae.scale.x = dae.scale.y = dae.scale.z = 3;

    dae.traverse(function (child) {
      if (child.colladaId == "Suzanne") {
        child.traverse(function (e) {
          e.castShadow = true;
          e.receiveShadow = true;
          if (e.material instanceof THREE.MeshPhongMaterial) {
            e.material.needsUpdate = true;
          }
        });
      } else if (child.colladaId == "Plane") {
        child.traverse(function (e) {
          e.castShadow = true;
          e.receiveShadow = true;
        });
      }
    });
    dae.updateMatrix();
    animate();
    scene.add(dae);
  }
);

// dae.position.set(2.5, 6, 2.5);
// dae.castShadow = false;
// scene.add(dae);

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
  this.rotationY = 0.0;
  this.rotationZ = 0.01;

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
datGui2.addColor(guiControls, "color");

/**
 * animation
 */
function animate() {
  if (dae) {
    dae.traverse(function (child) {
      if (child.name == "Suzanne") {
        child.rotation.x += guiControls.rotationX;
        child.rotation.y += guiControls.rotationY;
        child.rotation.z += guiControls.rotationZ;
      } else if (child.colladaId == "Plane") {
        child.traverse(function (e) {});
      }
    });
  }
  // sphere.material.color.set(guiControls.color);
  // sphere.material.dashSize = guiControls.dashSize;
  // sphere.material.gapSize = guiControls.gapSize;
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
