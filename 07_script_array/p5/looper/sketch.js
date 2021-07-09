let P5 = new p5((p) => {
  let canvasArea = document.querySelector("#canvasArea");
  let main = document.querySelector(".main");
  let canvasSize = [main.offsetWidth, main.offsetWidth * 0.65];

  let clicked = false;
  let frame = 60;

  function Ellipse(color, p) {
    return {
      color: color,
      xd: p.random(-1, 1),
      yd: p.random(-1, 1),
      xs: p.random(10, 30),
      ys: p.random(10, 30),
      x: p.random(-p.width / 2, p.width / 2),
      y: p.random(-p.height / 2, p.height / 2),
    };
  }
  let ellipses = [];

  p.setup = function () {
    p.createCanvas(canvasSize[0], canvasSize[1]);
    // p.noLoop();
    p.frameRate(frame);

    for (let i = 0; i < 43; i++) {
      let rgb = [
        Math.floor(p.random(150, 255)),
        Math.floor(p.random(150, 255)),
        Math.floor(p.random(150, 255)),
      ];
      let fill = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      let ellipseInfo = new Ellipse(fill, p);
      ellipses.push(ellipseInfo);
    }
  };

  p.draw = function () {
    p.background(225, 34, 93);

    p.translate(p.width / 2, p.height / 2);
    p.rectMode(p.CENTER);

    ellipses.forEach((ellipseInfo) => {
      ellipseInfo.x = ellipseInfo.x + ellipseInfo.xd * ellipseInfo.xs;
      ellipseInfo.y = ellipseInfo.y + ellipseInfo.yd * ellipseInfo.ys;

      if (ellipseInfo.x <= -p.width / 2 || ellipseInfo.x >= p.width / 2) {
        ellipseInfo.xs = p.random(10, 30);
        ellipseInfo.xd = ellipseInfo.x <= -p.width / 2 ? 1 : -1;
      }

      if (ellipseInfo.y <= -p.height / 2 || ellipseInfo.y >= p.height / 2) {
        ellipseInfo.ys = p.random(10, 30);
        ellipseInfo.yd = ellipseInfo.y <= -p.height / 2 ? 1 : -1;
      }

      p.fill(ellipseInfo.color);
      p.ellipse(ellipseInfo.x, ellipseInfo.y, 40, 40);
    });
  };

  p.mousePressed = (e) => {};

  p.mouseWheel = (e) => {};

  p.windowResized = () => {
    p.resizeCanvas(canvasSize[0], canvasSize[1]);
  };
}, "canvasArea");
