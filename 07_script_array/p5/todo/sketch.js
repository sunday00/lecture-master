let P5 = new p5((p) => {
  // let canvasArea = document.querySelector("#canvasArea");
  let main = document.querySelector("main");
  let canvasSize = [main.offsetWidth, main.offsetWidth * 0.65];

  let cre = document.querySelector(".cre input");
  let upd = document.querySelector(".upd input");
  let del = document.querySelector(".del input");
  let quit = document.querySelector(".quit button");

  cre.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const lastKey = Object.keys(localStorage)
        ?.sort((a, b) => a.localeCompare(b))
        .pop();
      let lastIdx = lastKey ? parseInt(lastKey.replace("todo", "")) : 0;

      localStorage.setItem(`todo${lastIdx + 1}`, e.currentTarget.value);
      e.currentTarget.value = "";
    }
  });

  quit.addEventListener("click", (e) => {
    localStorage.clear();
  });

  let clicked = false;
  let frame = 60;

  p.setup = function () {
    p.createCanvas(canvasSize[0], canvasSize[1]);
    // p.noLoop();
    p.frameRate(frame);
  };

  p.draw = function () {
    p.background(225, 34, 93);

    p.translate(p.width / 2, p.height / 2);
    p.rectMode(p.CENTER);
  };

  p.mousePressed = (e) => {};

  p.mouseWheel = (e) => {};

  p.windowResized = () => {
    p.resizeCanvas(canvasSize[0], canvasSize[1]);
  };
}, "canvasArea");
