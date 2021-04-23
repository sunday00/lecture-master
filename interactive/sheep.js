import { Lib } from "/interactive/lib.js";

export class Sheep {
  constructor(img, stageWidth) {
    this.img = img;

    this.totalFrame = 8;
    this.curFrame = 0;

    this.imgWidth = 360;
    this.imgHeight = 300;

    this.sheepWidth = 180;
    this.sheepHeight = 150;

    this.sheepWidthHalf = this.sheepWidth / 2;
    this.x = stageWidth + this.sheepWidth;
    this.t = 0;
    this.speed = Math.random() * 2 + 1;

    this.fps = 24;
    this.fpsTime = 1000 / this.fps;
  }

  resize() {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  getY(x, dots) {
    for (let i = 1; i < dots.length; i++) {
      if (x >= dots[i].x1 && x <= dots[i].x3) {
        return this.getY2(x, dots[i]);
      }
    }

    return {
      y: 0,
      rotation: 0,
    };
  }

  getY2(x, dot) {
    const total = 200;
    let pt = Lib.getPointOnQuad(
      dot.x1,
      dot.y1,
      dot.x2,
      dot.y2,
      dot.x3,
      dot.y3,
      0
    );
    let prevX = pt.x;
    for (let i = 1; i < total; i++) {
      const t = i / total;
      pt = Lib.getPointOnQuad(
        dot.x1,
        dot.y1,
        dot.x2,
        dot.y2,
        dot.x3,
        dot.y3,
        t
      );

      if (x >= prevX && x <= pt.x) {
        return pt;
      }
      prevX = pt.x;
    }
    return pt;
  }

  draw(ctx, t, dots) {
    if (!this.time) {
      this.time = t;
    }

    const now = t - this.time;
    if (now > this.fpsTime) {
      this.time = t;
      this.curFrame += 1;

      this.curFrame += 1;
      if (this.curFrame == this.totalFrame) {
        this.curFrame = 0;
      }
    }

    this.animate(ctx, dots);
  }

  animate(ctx, dots) {
    this.x -= this.speed;
    this.y = this.getY(this.x, dots).y;

    // console.log(dots);

    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.rotate(this.getY(this.x, dots).rotation);

    ctx.fillStyle = "#000000";
    // ctx.fillRect(
    //   -this.sheepWidthHalf,
    //   -this.sheepHeight + 20,
    //   this.sheepWidth,
    //   this.sheepHeight
    // );

    ctx.drawImage(
      this.img,
      this.imgWidth * this.curFrame,
      0,
      this.imgWidth,
      this.imgHeight,
      -this.sheepWidthHalf,
      -this.sheepHeight + 20,
      this.sheepWidth,
      this.sheepHeight
    );

    ctx.restore();
  }
}
