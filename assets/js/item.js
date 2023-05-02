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
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
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
    const counter = document.querySelector(".size__modal");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let top = counter.getBoundingClientRect().bottom;
    console.log(`position - (${top + scrollTop})`);
    if (scrollTop + 470 > top + scrollTop) {
      buttonAdd.classList.remove("button__fixed");
    }
  });
});
