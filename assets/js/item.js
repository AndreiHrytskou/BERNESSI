const title = document.querySelectorAll(".description__title");
const addProduct = document.querySelector(".add_to_cart");
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
//
const colorContainer = document.querySelectorAll(".color__container");

let colorInput = document.querySelectorAll(".color__input");
let colorLabel = document.querySelectorAll(".color__label");
let inputCheck;
let labelCheck;
colorInput.forEach((e) => {
  e.addEventListener("click", () => {
    inputCheck = e.dataset.input;
  });
});
colorLabel.forEach((e) => {
  e.addEventListener("click", () => {
    labelCheck = e.dataset.label;
    console.log(labelCheck);
  });
});
//
addProduct.addEventListener("click", modalSuccess);
