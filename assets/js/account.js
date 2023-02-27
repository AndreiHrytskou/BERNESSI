var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hideBlock = document.querySelectorAll(".sort-top");
hideBlock.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});
