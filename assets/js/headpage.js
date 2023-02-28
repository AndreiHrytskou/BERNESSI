// swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  //   spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".mySwiper1", {
  loop: true,
  slidesPerView: 4,
  //   spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
// const card = document.querySelectorAll(".card");
card.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
  });
});
