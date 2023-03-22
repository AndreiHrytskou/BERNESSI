var swiper = new Swiper(".mySwiper4", {
  autoHeight: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  //   centeredSlides: false,
  //   initialSlide: 0,
  //   slidesPerColumn: 2,
  loop: true,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

const hideBlock = document.querySelectorAll(".sort-top");
hideBlock.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});
