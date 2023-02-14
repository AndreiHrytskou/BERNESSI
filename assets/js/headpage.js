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

const menu = document.querySelector(".new__item");
const newItem = document.querySelector(".submenu__new");
menu.addEventListener("mouseover", () => {
  newItem.setAttribute("style", "display: block");
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
newItem.addEventListener("mouseover", () => {
  newItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
  deliveryItem.setAttribute("style", "display: none");
});
newItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
//
const menu2 = document.querySelector(".women__item");
const womenItem = document.querySelector(".submenu__women");
menu2.addEventListener("mouseover", () => {
  womenItem.setAttribute("style", "display: block");
  deliveryItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
womenItem.addEventListener("mouseover", () => {
  womenItem.setAttribute("style", "display: block");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
  deliveryItem.setAttribute("style", "display: none");
});
womenItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
//
const menu3 = document.querySelector(".men__item");
const menItem = document.querySelector(".submenu__men");
menu3.addEventListener("mouseover", () => {
  menItem.setAttribute("style", "display: block");
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
menItem.addEventListener("mouseover", () => {
  menItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
  deliveryItem.setAttribute("style", "display: none");
});
menItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
//
const menu4 = document.querySelector(".family__item");
const familyItem = document.querySelector(".submenu__family");
menu4.addEventListener("mouseover", () => {
  familyItem.setAttribute("style", "display: block");
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
familyItem.addEventListener("mouseover", () => {
  familyItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
  deliveryItem.setAttribute("style", "display: none");
});
familyItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
//
const menu5 = document.querySelector(".children__item");
const childrenItem = document.querySelector(".submenu__children");
menu5.addEventListener("mouseover", () => {
  childrenItem.setAttribute("style", "display: block");
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
childrenItem.addEventListener("mouseover", () => {
  childrenItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
  deliveryItem.setAttribute("style", "display: none");
});
childrenItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
//
const menu6 = document.querySelector(".accessories__item");
const accItem = document.querySelector(".submenu__accessories");
menu6.addEventListener("mouseover", () => {
  accItem.setAttribute("style", "display: block");
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
});
accItem.addEventListener("mouseover", () => {
  accItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  deliveryItem.setAttribute("style", "display: none");
});
accItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
//
const menu7 = document.querySelector(".delivery__item");
const deliveryItem = document.querySelector(".submenu__delivery");
menu7.addEventListener("mouseover", () => {
  deliveryItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
deliveryItem.addEventListener("mouseover", () => {
  deliveryItem.setAttribute("style", "display: block");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
});
deliveryItem.addEventListener("mouseout", () => {
  deliveryItem.setAttribute("style", "display: none");
  womenItem.setAttribute("style", "display: none");
  newItem.setAttribute("style", "display: none");
  menItem.setAttribute("style", "display: none");
  familyItem.setAttribute("style", "display: none");
  childrenItem.setAttribute("style", "display: none");
  accItem.setAttribute("style", "display: none");
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
