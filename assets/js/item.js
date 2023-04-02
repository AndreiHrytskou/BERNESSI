const title = document.querySelectorAll(".description__title");
const addProduct = document.querySelector(".add_to_cart");
title.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.toggle("visible");
  });
});

// image
if (window.innerWidth > 992) {
  const headImage = document.querySelector(".item__img");
  const previewImg = document.querySelectorAll(".preview__img");
  let img;
  previewImg.forEach((e) => {
    if (e.classList.contains("filter")) {
      headImage.src = e.src;
      img = e.dataset.img;
      headImage.dataset.output = img;
    }
    e.addEventListener("click", () => {
      headImage.src = e.src;
      img = e.dataset.img;
      headImage.dataset.output = img;
      if (e.classList.contains("preview__img")) {
        previewImg.forEach((el) => {
          el.classList.remove("filter");
          e.classList.add("filter");
        });
      }
    });
  });
  var swiper = new Swiper(".preview__list", {
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
  });
  var swiper2 = new Swiper(".pictures", {
    slidesPerView: 1,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const closePic = document.querySelector(".close__img");
  const picWrap = document.querySelector(".pictures");
  headImage.addEventListener("click", () => {
    picWrap.classList.toggle("pictures__show");
    closePic.classList.add("close-show");
  });
  closePic.addEventListener("click", () => {
    picWrap.classList.toggle("pictures__show");
    closePic.classList.remove("close-show");
  });
}
//

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
const spanError = document.createElement("span");
spanError.append("Выберите размер!");
const spanError2 = document.createElement("span");
spanError2.append("Выберите цвет!");
// addProduct.addEventListener("click", modalSuccess);
addProduct.addEventListener("click", () => {
  sizeInput.forEach((s) => {
    colorInput.forEach((c) => {
      if (c.checked == 1 && s.checked == 1) {
        spanError.remove();
        spanError2.remove();
        modalSuccess();
      } else if (c.checked == 0) {
        spanError.remove();
        createError2();
      } else if (s.checked == 0) {
        spanError2.remove();
        createError();
      } else if (c.checked == 0 && s.checked == 1) {
        spanError.remove();
      }
    });
  });
});
function createError() {
  sizeWrap.append(spanError);
  spanError.className = "error-text";
}
function createError2() {
  colorContainer.append(spanError2);
  spanError2.className = "error-text";
}
