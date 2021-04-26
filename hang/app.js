import { Point } from "./point.js";
import { Dialog } from "./dialog.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.mousePos = new Point();
    this.curItem = null;

    this.items = [];
    this.total = 1;

    /**
     * FIXME: code here
     */
    document.addEventListener(
      "pointerdown",
      this.handlePointerDown.bind(this),
      false
    );
    document.addEventListener(
      "pointermove",
      this.handlePointerMove.bind(this),
      false
    );
    document.addEventListener(
      "pointerup",
      this.handlePointerUp.bind(this),
      false
    );

    for (let i = 0; i < this.total; i++) {
      this.items[i] = new Dialog();
    }

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  //FIXME: methods
  handlePointerDown(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;

    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i].down(this.mousePos.clone());
      if (item) {
        this.curItem = item;
        const index = this.items.indexOf(item);
        this.items.push(this.items.splice(index, 1)[0]);
        break;
      }
    }
  }

  handlePointerMove(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].move(this.mousePos.clone());
    }
  }

  handlePointerUp(e) {
    this.curItem = null;
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].up();
    }
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);

    /**
     * FIXME: object resize
     */
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 3;
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = "#00000016";

    this.ctx.lineWidth = 2;

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].resize(this.stageWidth, this.stageHeight);
    }
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    /**
     * FIXME: object redraw
     */
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].animate(this.ctx);
    }
  }
}

new App();
