let P5 = new p5((p) => {
  let header = document.querySelector("#header").offsetHeight;
  let canvasArea = document.querySelector("#canvasArea");
  let footer = document.querySelector("#footer").offsetHeight;

  let clicked = false;
  let frame = 60;

  let sphere;
  let currentOffset;
  let destination;

  let img;

  p.preload = function () {
    // img = p.loadImage("p5-crash/space.jpg");
    img = p.loadImage("https://source.unsplash.com/1600x900/?space", "space");
  };

  p.setup = function () {
    p.createCanvas(
      p.windowWidth,
      p.windowHeight - (header + footer) - 40,
      p.WEBGL
    );
    // p.noLoop();

    img.resize(p.width, p.height);
    bg = p.image(img, -p.width / 2, -p.height / 2);
    // p.background(p.image(img, -p.width / 2, -p.height / 2));

    sphere = {
      w: 70,
      dx: p.createSlider(3, 20, 6),
      dy: p.createSlider(3, 20, 6),
    };

    currentOffset = {
      x: 100,
      y: 100,
    };

    destination = {
      x: undefined,
      y: undefined,
    };
  };

  p.draw = function () {
    // p.background(225, 34, 93);
    img.resize(p.width, p.height);
    p.image(img, -p.width / 2, -p.height / 2);
    // p.background(bg);
    // p.background(img);

    p.push();

    if (
      (destination.x && destination.x != currentOffset.x) ||
      (destination.y && destination.y != currentOffset.y)
    ) {
      currentOffset.x += (destination.x - currentOffset.x) * 0.1;
      currentOffset.y += (destination.y - currentOffset.y) * 0.1;
    } else {
      destination = { x: undefined, y: undefined };
    }

    p.translate(currentOffset.x, currentOffset.y);
    p.rotateY(p.frameCount * 0.025);
    p.sphere(sphere.w, sphere.dx.value(), sphere.dy.value());
    p.pop();
  };

  p.mousePressed = (e) => {
    destination.x = p.mouseX - p.width / 2;
    destination.y = p.mouseY - p.height / 2;
  };

  p.mouseWheel = (e) => {};

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight - (header + footer) - 40);
    img.resize(p.width, p.height);
    p.image(img, -p.width / 2, -p.height / 2);
  };
}, "canvasArea");
