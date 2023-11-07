const boxs = document.querySelectorAll(".box"),
  img = document.querySelector(".img");

boxs.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    box.classList.add("active");
  });

  box.addEventListener("dragleave", (e) => {
    e.preventDefault();

    box.classList.remove("active");
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();

    box.appendChild(img);
    box.classList.remove("active");
  });
});
