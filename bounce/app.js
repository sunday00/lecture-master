const line = document.querySelector("path");

let coords = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (e) => {
  const width = e.clientX / window.innerWidth;

  coords.x = width * 500;
  coords.y = e.clientY;

  // e.clientX <= window.innerWidth - 10 && e.clientX >= 10
  //   ? updateCoords(coords)
  //   : restore();

  updateCoords(coords);
});

document.addEventListener("mouseout", (e) => {
  restore();
});

function restore() {
  gsap.to(line, {
    ease: Elastic.easeOut.config(1, 0.3),
    attr: { d: "M250,0 Q250,250 250,500" },
  });
}

function updateCoords(coords) {
  line.setAttribute("d", `M250,0 Q ${coords.x},${coords.y} 250,500`);
}
