const title = document.querySelectorAll(".description__title");
title.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.toggle("visible");
  });
});

// image
const headImage = document.querySelector(".item__img");
const previewImg = document.querySelectorAll(".preview__img");
previewImg.forEach((e) => {
  if (e.classList.contains("filter")) {
    headImage.src = e.src;
  }
  e.addEventListener("click", () => {
    headImage.src = e.src;
    if (e.classList.contains("preview__img")) {
      previewImg.forEach((el) => {
        el.classList.remove("filter");
        e.classList.add("filter");
      });
    }
  });
});
