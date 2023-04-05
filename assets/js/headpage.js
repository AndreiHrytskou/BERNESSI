// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    //   loop: true,
    slidesPerView: 3,
    //   spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".baner__swiper", {
    //   loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    loop: true,
    slidesPerView: 3,
    //   spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
});
