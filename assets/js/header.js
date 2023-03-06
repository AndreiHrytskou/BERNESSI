const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search__btn");
searchBtn.addEventListener("click", () => {
  search.classList.toggle("search-focus");
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

//  burger menu

const burger = document.querySelector(".burger-menu");
const menuHide = document.querySelector(".menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger-menu--opened");
  burger.classList.toggle("burger-menu--closed");
  menuHide.classList.toggle("menu-active");
});

const menuItem = document.querySelectorAll(".menu__block-span");
const submenuItem = document.querySelectorAll(".submenu__item-span");
const arrowBack = document.querySelectorAll(".arrow-back");
const arrowBack2 = document.querySelectorAll(".mobile2-arrow");
if (window.innerWidth < 1200) {
  menuItem.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.add("submenu-active");
      e.parentNode.childNodes[3].childNodes[1].addEventListener("click", () => {
        e.parentElement.classList.remove("submenu-active");
      });
    });
  });
  submenuItem.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.add("submenu-item-active");
      e.parentNode.childNodes[3].childNodes[1].addEventListener("click", () => {
        e.parentElement.classList.remove("submenu-item-active");
      });
    });
  });
}
if (window.innerWidth > 1200) {
  menuItem.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.parentElement.childNodes[3].setAttribute("style", "display: block");
    });
    e.parentElement.childNodes[3].addEventListener("mouseover", () => {
      e.parentElement.childNodes[3].setAttribute("style", "display: block");
    });
  });
  menuItem.forEach((e) => {
    e.addEventListener("mouseout", () => {
      e.parentElement.childNodes[3].setAttribute("style", "display: none");
    });
    e.parentElement.childNodes[3].addEventListener("mouseout", () => {
      e.parentElement.childNodes[3].setAttribute("style", "display: none");
    });
  });
}

// lang

if (window.document.dir == "rtl") {
  document.body.classList.add("rtl");
}
