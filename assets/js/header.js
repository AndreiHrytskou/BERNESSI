document.addEventListener("DOMContentLoaded", function () {
  //  burger menu

  const burger = document.querySelector(".burger-menu");
  const menuHide = document.querySelector(".menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-menu--opened");
    burger.classList.toggle("burger-menu--closed");
    menuHide.classList.toggle("menu-active");
  });
  if (window.innerWidth >= 1201) {
    const menuItem = document.querySelectorAll(".menu__item");
    const submenu = document.querySelectorAll(".submenu__wrapper");
    menuItem.forEach((e) => {
      e.addEventListener("click", () => {
        if (!e.classList.contains("menu__active")) {
          let cat = e.dataset.cat;
          for (let i = 0; i < submenu.length; i++) {
            if (submenu[i].dataset.cat != cat) {
              e.classList.remove("menu__active");
            } else {
              e.classList.toggle("menu__active");
            }
          }
        }
      });
    });
  }

  const menuItem = document.querySelectorAll(".menu__block-span");
  const submenuItem = document.querySelectorAll(".submenu__item-span");
  const arrowBack = document.querySelectorAll(".arrow-back");
  const arrowBack2 = document.querySelectorAll(".mobile2-arrow");
  if (window.innerWidth < 1200) {
    menuItem.forEach((e) => {
      e.addEventListener("click", () => {
        e.parentElement.classList.add("submenu-active");
        e.parentNode.childNodes[3].childNodes[1].addEventListener(
          "click",
          () => {
            e.parentElement.classList.remove("submenu-active");
          }
        );
      });
    });
    submenuItem.forEach((e) => {
      e.addEventListener("click", () => {
        e.parentElement.classList.add("submenu-item-active");
        e.parentNode.childNodes[3].childNodes[1].addEventListener(
          "click",
          () => {
            e.parentElement.classList.remove("submenu-item-active");
          }
        );
      });
    });
  }

  // lang

  if (window.document.dir == "rtl") {
    document.body.classList.add("rtl");
  }
});
