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
const card = document.querySelectorAll(".card");
const card2 = document.querySelectorAll(".card2");
card.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
  });
});
const like = document.querySelectorAll(".like");
like.forEach((l) => {
  l.addEventListener("click", () => {
    l.classList.toggle("likeActive");
  });
});
const size = document.querySelectorAll(".size__item");
size.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("sizeActive");
  });
});
card2.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
  });
});
