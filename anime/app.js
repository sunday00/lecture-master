// let grids = document.querySelectorAll("main section div");
// let num = 0;

// const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// grids.forEach((g) => {
//   delay(0).then(() => {
//     setTimeout(() => {
//       g.style.backgroundColor = "lightBlue";
//     }, (num += 100));
//   });

//   delay(500).then(() => {
//     setTimeout(() => {
//       g.style.backgroundColor = "indigo";
//       g.style.width = "90%";
//     }, (num += 100));
//   });
// });

let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});

tl.add({
  targets: "main section div",
  width: "100%",
  backgroundColor: "#3f51b5",
  delay: anime.stagger(100),
});

tl.add({
  targets: "main section div",
  width: "90%",
  backgroundColor: "#ff5722",
});

tl.add(
  {
    targets: "main h1",
    top: "20%",
    opacity: 1,
    duration: 4000,
  },
  "-=1600"
);

let rotateMe = anime({
  targets: "section",
  scaleY: "2",
  scaleX: "2",
  translateX: "40%",
  rotate: "45deg",
  duration: 5000,
  autoplay: false,
});

document.querySelector("main h1").addEventListener("mouseover", () => {
  rotateMe.play();
});
