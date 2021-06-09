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

document
  .querySelector(".middle-box")
  .append(document.querySelector(".contents").cloneNode(true));

//////

window.addEventListener("DOMContentLoaded", () => {
  //INFO: init.
  resizeHandler();
  document.querySelector("#page").value = 1;

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

    // METHOD: like button
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

      function increaseLikeCount(data) {
        let count = active ? data.data.count : 1;
        document.querySelector(".ajax-section .like .like-count").textContent =
          count;
      }

      axios
        .post("/data/like.json", {
          dataType: "application/json",
          id: t.getAttribute("data-name"),
        })
        .then(({ data }) => {
          increaseLikeCount(data);
        })
        .catch((err) => {
          //INFO: no server and dev,
          //DEV: run on dev browser-sync, not working with post method,
          // so, using get
          axios
            .get("/data/like.json")
            .then(({ data }) => {
              increaseLikeCount(data);
            })
            .catch((err) => {
              alert("logged please");
              location.href = "http://grayfield.net";
            });
        });
    }
    // METHOD: more button
    else if (t.dataset.name === "more") {
      t.querySelector(".hidden-menu").classList.toggle("active");
    }
    // METHOD: send reply comment
    else if (t.dataset.name === "send") {
      function addComment(data) {
        const cmt = t.closest(".input-container").querySelector("input");
        data = data.replace("{%COMMENT%}", cmt.value);

        document
          .querySelector(".comment-section")
          .insertAdjacentHTML("beforeend", data);

        cmt.value = "";
      }

      axios
        .post("/templates/comment.html", {
          dataType: "text/html",
          id: t.getAttribute("data-name"),
        })
        .then(({ data }) => {
          addComment(data);
        })
        .catch((err) => {
          //INFO: no server and dev,
          //DEV: run on dev browser-sync, not working with post method,
          // so, using get
          axios
            .get("/templates/comment.html")
            .then(({ data }) => {
              addComment(data);
            })
            .catch((err) => {
              alert("logged please");
              location.href = "http://grayfield.net";
            });
        });
    }
    // METHOD: delete comment
    else if (t.dataset.name === "delete") {
      let really = confirm("sure?", "y", "n");

      function deleteComment(data) {
        t.closest(".id").remove();
      }

      if (really) {
        axios
          .post("/data/comment.json", {
            dataType: "application/json",
            id: t.getAttribute("data-name"),
          })
          .then(({ data }) => {
            deleteComment(data);
          })
          .catch((err) => {
            //INFO: no server and dev,
            //DEV: run on dev browser-sync, not working with post method,
            // so, using get
            axios
              .get("/data/comment.json")
              .then(({ data }) => {
                deleteComment(data);
              })
              .catch((err) => {
                alert("logged please");
                location.href = "http://grayfield.net";
              });
          });
      }
    }
  }

  const feeds = document.querySelector("#contents-container");

  feeds.addEventListener("click", delegation);
});

//FUNC: scroll event
let currentY = window.pageYOffset;

function addPost(page) {
  if (page > 5) return;

  axios.get("/templates/content.html").then((res) => {
    document
      .querySelector(".middle-box")
      .insertAdjacentHTML("beforeEnd", res.data);
  });
}

function scrollFunc(e) {
  if (currentY > window.pageYOffset) return;

  let bodyH = document.body.scrollHeight;
  currentY = window.pageYOffset;

  if (bodyH <= currentY + window.innerHeight + 50) {
    const page = document.querySelector("#page");
    let pageVal = parseInt(page.value);

    page.value = pageVal + 1;

    addPost(page.value);
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
