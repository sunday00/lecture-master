function Task(id, task, w, h) {
  this.w = w;
  this.h = h;

  this.id = id;
  this.task = task;

  this.reset = () => {
    this.x = -1 * Math.floor(Math.random() * this.w);
    this.y = Math.floor(Math.random() * this.h);
    this.size = Math.floor(Math.random() * this.h);
    this.speed = Math.ceil(Math.random() * 30);
    this.color = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
  };

  this.reset();

  return this;
}

let P5 = new p5((p) => {
  // let canvasArea = document.querySelector("#canvasArea");
  let main = document.querySelector("main");
  let canvasSize = [main.offsetWidth, main.offsetWidth * 0.65];

  let cre = document.querySelector(".cre input");
  let upd = document.querySelector(".upd input[name='upd']");
  let del = document.querySelector(".del input");
  let quit = document.querySelector(".quit button");

  let tasks = [];

  cre.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const lastKey = Object.keys(localStorage)
        ?.sort((a, b) => a.localeCompare(b))
        .pop();
      let lastIdx = lastKey ? parseInt(lastKey.replace("todo", "")) : 0;

      localStorage.setItem(`todo${lastIdx + 1}`, e.currentTarget.value);

      tasks.push(
        new Task(`todo${lastIdx + 1}`, e.currentTarget.value, p.width, p.height)
      );

      e.currentTarget.value = "";
    }
  });

  upd.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const inputIdx = document.querySelector('.col.upd div [name="idx"]');
      const lastKey = Object.keys(localStorage)
        ?.sort((a, b) => a.localeCompare(b))
        .pop();
      const isExists = localStorage.getItem(`todo${inputIdx.value}`);
      let currentIdx = isExists
        ? parseInt(inputIdx.value)
        : parseInt(lastKey.replace("todo", "")) + 1;

      localStorage.setItem(`todo${currentIdx}`, e.currentTarget.value);

      if (isExists) {
        tasks.find((t) => t.id === `todo${currentIdx}`).task =
          e.currentTarget.value;
      } else {
        tasks.push(
          new Task(
            `todo${currentIdx}`,
            e.currentTarget.value,
            p.width,
            p.height
          )
        );
      }

      e.currentTarget.value = "";
      inputIdx.value = "";
      inputIdx.focus();
    }
  });

  del.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      let currentIdx = parseInt(e.currentTarget.value);
      const isExists = localStorage.getItem(`todo${currentIdx}`);

      if (isExists) {
        localStorage.removeItem(`todo${currentIdx}`);
        tasks = tasks.filter((t) => t.id !== `todo${currentIdx}`);
      }

      e.currentTarget.value = "";
    }
  });

  quit.addEventListener("click", (e) => {
    localStorage.clear();
    tasks = [];
  });

  let clicked = false;
  let frame = 60;

  p.setup = function () {
    p.createCanvas(canvasSize[0], canvasSize[1]);
    // p.noLoop();
    p.frameRate(frame);

    Object.keys(localStorage)
      .filter((s) => s.startsWith("todo"))
      .forEach((t) => {
        tasks.push(new Task(t, localStorage.getItem(t), p.width, p.height));
      });
  };

  p.draw = function () {
    p.background(235, 84, 143);

    tasks.forEach((t) => {
      p.push();

      p.stroke(255);
      p.strokeWeight(1);
      p.textSize(t.size);
      p.fill(t.color[0], t.color[1], t.color[2]);
      p.text(`${t.id} : ${t.task}`, t.x, t.y);

      p.pop();

      t.x = t.x + t.speed;

      if (t.x > p.width) {
        t.reset();
      }
    });
  };

  p.mousePressed = (e) => {
    console.log(tasks);
  };

  p.mouseWheel = (e) => {};

  p.windowResized = () => {
    p.resizeCanvas(main.offsetWidth, main.offsetWidth * 0.65);
  };
}, "canvasArea");
