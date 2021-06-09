// DEV:
const noticeUl = document.querySelector(".notice ul");
const noticeLi = document.querySelector(".notice li");

for (let i = 0; i < 10; i++) {
  let li = noticeLi.cloneNode(true);
  noticeUl.append(li);
}

const commentContainer = document.querySelector(
  "#contents-container .comment-section"
);
const comment = document.querySelector(
  "#contents-container .comment-section .id"
);
const commentLengths = [Math.ceil(Math.random() * 3)];

for (let i = 0; i < commentLengths; i++) {
  let cm = comment.cloneNode(true);
  commentContainer.append(cm);
}

window.addEventListener("DOMContentLoaded", () => {
  //INFO: init.
  resizeHandler();

  // FUNC: notification
  const bell = document.querySelector(".bell");

  const notification = function () {
    this.classList.toggle("active");
  };

  bell.addEventListener("click", notification);

  // FUNC: feed.addEvent delegation
  function delegation(e) {
    let t = e.target;
    console.log(t);

    while (!t.dataset.name) {
      t = t.parentNode;

      if (t.nodeName === "BODY") {
        t = null;
        return;
      }
    }

    //METHOD: like button
    if (t.dataset.name === "like") {
      let active;

      if (t.querySelector("i").classList.contains("icon--like-line")) {
        t.querySelector("i").classList.remove("icon--like-line");
        t.querySelector("i").classList.add("icon--like-fill");
        active = true;
      } else {
        t.querySelector("i").classList.remove("icon--like-fill");
        t.querySelector("i").classList.add("icon--like-line");
        active = false;
      }

      // axios
      //   .post("/data/like.json", {
      //     dataType: "application/json",
      //     id: t.getAttribute("data-name"),
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });

      axios
        .get("/data/like.json")
        .then(({ data }) => {
          let count = active ? data.data.count : 1;
          document.querySelector(
            ".ajax-section .like .like-count"
          ).textContent = count;
        })
        .catch((err) => {
          alert("logged please");
          location.href = "http://grayfield.net";
        });

      // METHOD: more button
    } else if (t.dataset.name === "more") {
      t.querySelector(".hidden-menu").classList.toggle("active");
    }
  }

  const feeds = document.querySelector("#contents-container");

  feeds.addEventListener("click", delegation);
});

//FUNC: scroll event
function scrollFunc() {
  let bodyH = document.body.scrollHeight;
  let currentY = window.pageYOffset;

  if (bodyH <= currentY + window.innerHeight) {
    // TODO: load ajax
  }
}

window.addEventListener("scroll", scrollFunc);

//FUNC: resize window
function resizeHandler() {
  const leftBox = document.querySelector(".left-box");
  const middleBox = document.querySelector(".middle-box");
  const rightBox = document.querySelector(".right-box");

  const follow = document.querySelector("#header .inner");

  leftBox.style.left = follow.style.left;
  middleBox.style.left = leftBox.offsetWidth + 20 + "px";
  rightBox.style.left =
    leftBox.offsetLeft +
    leftBox.offsetWidth +
    20 +
    middleBox.offsetWidth +
    20 +
    "px";
}

window.addEventListener("resize", resizeHandler);
