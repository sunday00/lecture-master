function X(cvs, o = {}) {
  this.ww = window.innerWidth;
  this.wh = window.innerHeight;
  this.width;
  this.height;

  this.cvs = document.querySelector(cvs);
  this.letter = {
    text: o.letter,
  };
  this.keyframes = [
    { v: [1, 2], l: [] },
    { v: [2, 0.5], l: [] },
  ];

  this.ctx = this.cvs.getContext("2d");
  this.video = document.querySelector("#video");

  this.scene = 1;
  this.maxScrollHeight;
  this.sceneHeight;

  this.init = () => {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;

    this.resizeHandler();
  };

  this.resizeHandler = () => {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;

    this.sceneHeight = 0.5 * this.wh;
    this.maxScrollHeight = this.keyframes.length * this.sceneHeight + this.wh;

    document.body.style.height = this.maxScrollHeight + "px";
    this.cvs.width = this.width = this.ww * 2;
    this.cvs.height = this.height = this.wh * 2;
    this.cvs.style.width = this.ww + "px";
    this.cvs.style.height = this.wh + "px";

    this.render();
  };

  this.scrollHandler = () => {
    let currentY = window.scrollY;

    if (currentY < 0 || screenY > this.maxScrollHeight - this.wh) {
      return;
    }

    if (currentY > this.sceneHeight * this.scene) {
      this.scene++;
    } else if (currentY < this.sceneHeight * (this.scene - 1)) {
      this.scene--;
    }

    this.render();
  };

  this.render = () => {
    this.ctx.globalCompositeOperation = "source-out";
    this.ctx.font = `${this.height}px 'Righteous'`;
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.letter.text, this.width / 2, this.height * 0.7);
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.width, this.height);

    let videoScale;

    if (this.keyframes[this.scene - 1]) {
      videoScale = this.calcAnimationValue(this.keyframes[this.scene - 1].v);
    }

    this.video.style.transform = `scale(${videoScale})`;
  };

  this.calcAnimationValue = (v) => {
    let sceneScrollY = window.scrollY - this.sceneHeight * (this.scene - 1);
    return (sceneScrollY / this.sceneHeight) * (v[1] - v[0]) + v[0];
  };
}

window.addEventListener("load", () => {
  let x = new X("#canvas", {
    letter: "X",
  });

  x.init();

  window.addEventListener("resize", x.resizeHandler);
  window.addEventListener("scroll", x.scrollHandler);
});

// let font = new FontFace(
//   "Righteous",
//   "url(/interactive2/res/Righteous-Regular.ttf)"
// );

// font.load().then((font) => {
//   console.log(font);

// });
