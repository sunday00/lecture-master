window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#photo-id");
  const submit = document.querySelector(".create-box .submit input");

  function handleImage() {
    let files = input.files;
    let reader = new FileReader();
    let cvs = document.querySelector("#imageCanvas");
    let ctx = cvs.getContext("2d");

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      let img = new Image();
      img.onload = () => {
        cvs.width = 100;
        cvs.height = 100;

        ctx.drawImage(img, 0, 0, 100, 100);
      };

      img.src = e.target.result;

      submit.disabled = false;
    };
  }

  input.addEventListener("change", handleImage);
});
