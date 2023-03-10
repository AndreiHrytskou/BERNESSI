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
const colorContainer = document.querySelector(".color__wrap");
const sizeWrap = document.querySelector(".size__wrap");

let colorInput = document.querySelectorAll(".color__input");
let colorLabel = document.querySelectorAll(".color__label");
colorInput.forEach((e) => {
  e.addEventListener("click", () => {
    inputCheck = e.dataset.input;
    colorLabel.forEach((el) => {
      labelCheck = el.dataset.label;
      if (inputCheck == labelCheck) {
        el.classList.add("label-active");
      } else {
        el.classList.remove("label-active");
      }
    });
  });
});

//
let sizeInput = document.querySelectorAll(".size__input");
let sizeLabel = document.querySelectorAll(".size__label");
sizeInput.forEach((e) => {
  e.addEventListener("click", () => {
    inputCheck = e.dataset.insize;
    sizeLabel.forEach((el) => {
      labelCheck = el.dataset.size;
      if (inputCheck == labelCheck) {
        el.classList.add("label-active");
      } else {
        el.classList.remove("label-active");
      }
    });
  });
});
//
// const spanError = document.createElement("span");
// spanError.append("Выберите размер!");
// const spanError2 = document.createElement("span");
// spanError2.append("Выберите цвет!");
addProduct.addEventListener("click", modalSuccess);
// addProduct.addEventListener("click", () => {
//   sizeInput.forEach((s) => {
//     colorInput.forEach((c) => {
//       if (s.checked && c.checked) {
//         modalSuccess();
//       } else {
//         console.log("nope");
//       }
//     });
//   });
// });
// function createError() {
//   sizeWrap.append(spanError);
//   spanError.className = "error-text";
// }
// function createError2() {
//   colorContainer.append(spanError2);
//   spanError2.className = "error-text";
// }
