const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search__btn");
searchBtn.addEventListener("click", () => {
  search.classList.add("search-focus");
});
document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == search || search.contains(target);
  let its_water = target == searchBtn;
  let menu_is_active = search.classList.contains("search-focus");

  if (!its_menu && !its_water && menu_is_active) {
    search.classList.remove("search-focus");
  }
});

// menu

const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__item");

menuItem.forEach((e) => {
  e.addEventListener("click", () => {
    if (!e.classList.contains("item-active")) {
      e.classList.toggle("item-active");
    }
  });
});
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
