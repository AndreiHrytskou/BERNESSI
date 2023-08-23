document.addEventListener("DOMContentLoaded", function () {
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

  const counter = document.querySelector("#item-count-product .counter__value");

  const minus = counter.previousElementSibling;
  const plus = counter.nextElementSibling;

  minus.addEventListener("click", () => {
    if (counter.value > 0) counter.value--;
  });
  plus.addEventListener("click", () => {
    counter.value++;
  });
  if (window.outerWidth < 769) {
    var swiper = new Swiper(".swiper__product", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
      },
    });
    const productCatalog = document.querySelector(".swiper__product");
    productCatalog.style.maxWidth = window.outerWidth + "px";
  }
  const buttonAdd = document.querySelector(".add_to_cart");
  buttonAdd.classList.add("button__fixed");
  document.addEventListener("scroll", () => {
    buttonAdd.classList.add("button__fixed");
    const counter = document.querySelector(".counter");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let top = counter.getBoundingClientRect().bottom;
    //  console.log(`top: ${top}`);
    //  console.log(`position - (${top + scrollTop})`);
    if (
      scrollTop + window.outerHeight >
      top + scrollTop + buttonAdd.clientHeight
    ) {
      buttonAdd.classList.remove("button__fixed");
    }
  });
  //   modal

  const save = document.querySelector(".save");
  const saveModal = document.querySelector(".save__modal");
  const closesaveModal = document.querySelector(".save__modal svg");
  const recycle = document.querySelector(".recycle");
  const recycleModal = document.querySelector(".recycle__modal");
  const closerecycleModal = document.querySelector(".recycle__modal svg");
  save.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "dark";
    document.body.append(div);
    saveModal.classList.add("visible");
    closesaveModal.addEventListener("click", () => {
      div.remove();
      saveModal.classList.remove("visible");
    });
    div.addEventListener("click", () => {
      div.remove();
      saveModal.classList.remove("visible");
    });
  });
  recycle.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "dark";
    document.body.append(div);
    recycleModal.classList.add("visible");
    closerecycleModal.addEventListener("click", () => {
      div.remove();
      recycleModal.classList.remove("visible");
    });
    div.addEventListener("click", () => {
      div.remove();
      recycleModal.classList.remove("visible");
    });
  });

  //   input

  const buy = document.querySelector("#buy");
  const popularList = document.querySelector(".popular__list");
  const withList = document.querySelector(".with__list");
  const recom = document.querySelector("#recom");
  buy.addEventListener("input", () => {
    if (buy.checked) {
      popularList.style.display = "block";
      withList.style.display = "none";
    }
  });
  recom.addEventListener("input", () => {
    if (recom.checked) {
      popularList.style.display = "none";
      withList.style.display = "block";
    }
  });
  buy.addEventListener("input", () => {
    if (buy.checked) {
      console.log("das");
    }
  });
});
