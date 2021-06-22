let cvs = document.querySelector("#canvas");
let ctx = cvs.getContext("2d");

cvs.style.width = "90vw";
cvs.style.height = "90vh";
cvs.style.backgroundColor = "#fff";
cvs.style.border = "1px solid #000";

document.body.style.backgroundColor = "#fff";

ctx.beginPath();

ctx.ellipse(90, 90, 25, 25, 0, 0, 2 * Math.PI);
ctx.stroke();

let font = 8;
function draw() {
  font++;
  ctx.globalCompositeOperation = "source-out";
  ctx.font = `${font}px sans-serif`;
  ctx.fillText("Hello World!", 0, cvs.height, 30000);

  requestAnimationFrame(draw);
}

draw();
