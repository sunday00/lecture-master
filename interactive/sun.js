import { Lib } from "/interactive/lib.js";

export class Sun {
  constructor() {
    this.radius = 180;
    this.total = 60;
    this.gap = 1 / this.total;
    this.originalPos = [];
    this.pos = [];
    for (let i = 0; i < this.total; i++) {
      const pos = Lib.getCirclePoint(this.radius, this.gap * i);
      this.originalPos[i] = pos;
      this.pos[i] = pos;
    }

    this.fps = 30;
    this.fpsTime = 1000 / this.fps;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.x = this.stageWidth - this.radius - 140;
    this.y = this.radius + 100;
  }

  draw(ctx, t) {
    const now = t - this.fpsTime;
    if (now > this.fpsTime) {
      this.time = t;
      this.animate();
    }

    ctx.fillStyle = "#ffb200";
    ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    let pos = this.pos[0];
    ctx.moveTo(pos.x + this.x, pos.y + this.y);
    for (let i = 1; i < this.total; i++) {
      const pos = this.pos[i];
      ctx.lineTo(pos.x + this.x, pos.y + this.y);
    }
    ctx.fill();
  }

  ranInt(max) {
    return Math.random() * max;
  }

  animate() {
    for (let i = 1; i < this.total; i++) {
      const pos = this.originalPos[i];
      this.pos[i] = {
        x: pos.x + this.ranInt(5),
        y: pos.y + this.ranInt(5),
      };
    }
  }
}
