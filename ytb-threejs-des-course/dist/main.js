try {
  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 10;

  let renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setClearColor("#e5e5e5");
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // renderer.render(scene, camera);

  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();

  // let geometry = new THREE.SphereGeometry(1, 10, 10);
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
  let mesh = new THREE.Mesh(geometry, material);
  // mesh.position.x = 2;
  // mesh.position.y = 2;
  // mesh.position.set(2, 2, 0);
  // mesh.scale.set(1, 2, 1);
  mesh.rotation.set(45, 0, 0);

  scene.add(mesh);

  // geometry = new THREE.BoxGeometry(1, 1, 1);
  // material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
  // mesh = new THREE.Mesh(geometry, material);
  // mesh.position.y = 2;
  // scene.add(mesh);

  for (let i = 0; i < 15; i++) {
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 10;
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 10;
    mesh.rotation.set(
      Math.random() * 365,
      Math.random() * 365,
      Math.random() * 365
    );

    scene.add(mesh);
  }

  let light = new THREE.PointLight(0xffffff, 1, 500);
  light.position.set(0, 0, 0);
  scene.add(light);

  light = new THREE.PointLight(0xffffff, 2, 1000);
  light.position.set(0, 0, 25);
  scene.add(light);

  let rotateX = 0;
  let sin = new intervalBetween();
  // renderer.render(scene, camera);
  let render = function () {
    requestAnimationFrame(render);

    // rotateX = rotateX + 0.1;
    // mesh.rotation.set(rotateX, rotateX, 0);
    // sin.calc();
    // mesh.scale.set(1 + sin.result, 1 + sin.result, 1 + sin.result);

    renderer.render(scene, camera);
  };

  render();

  // this.tl = new TimelineMax().delay(0.3);
  // this.tl = new TimelineMax({ paused: true });
  // this.tl.to(mesh.scale, 1, { x: 2, ease: Expo.easeOut });
  // this.tl.to(mesh.scale, 3, { x: 0.5, ease: Expo.easeOut });
  // this.tl.to(mesh.scale, 1, { x: 2, ease: Expo.easeOut });
  // this.tl.to(mesh.position, 5, { x: 2, ease: Expo.easeOut });
  // this.tl.to(mesh.position, 1, { x: 0, ease: Expo.easeOut });
  // this.tl.to(
  //   mesh.rotation,
  //   0.5,
  //   { y: Math.PI * 5, ease: Expo.easeOut },
  //   "=-1.5"
  // );

  // document.body.addEventListener("click", (e) => {
  //   this.tl.paused() ? this.tl.play() : this.tl.pause();
  // });

  // this.tl = new TimelineMax({ paused: true });
  let onHover = function (e) {
    e.preventDefault();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length === 0) {
      mesh.material.color.set(0xffcc00);
      // this.tl.pause();
      return;
    }

    // this.tl.play();
    for (let i = 0; i < intersects.length; i++) {
      this.tl = new TimelineMax();

      intersects[i].object.material.color.set(0xff0000);

      this.tl.to(intersects[i].object.scale, 1, { x: 2, ease: Expo.easeOut });
      this.tl.to(intersects[i].object.scale, 1, { x: 0.5, ease: Expo.easeOut });
      this.tl.to(intersects[i].object.scale, 1, { x: 2, ease: Expo.easeOut });
      this.tl.to(intersects[i].object.scale, 1, { x: 1, ease: Expo.easeOut });
      // this.tl.to(intersects[i].object.position, 1, {
      //   x: 2,
      //   ease: Expo.easeOut,
      // });
      // this.tl.to(intersects[i].object.position, 1, {
      //   x: 0,
      //   ease: Expo.easeOut,
      // });
      this.tl.to(
        intersects[i].object.rotation,
        3,
        { y: Math.PI * 5, ease: Expo.easeOut }
        // "=-1.5"
      );
    }
  };

  window.addEventListener("mousemove", onHover);
} catch (err) {
  console.error(err);
  document.querySelector(".err").innerHTML = err;
}
