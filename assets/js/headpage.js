// // swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".swiper-noname", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });

  //  my slider
  window.addEventListener(
    "resize",
    function () {
      if (window.outerWidth < 577) {
        var swiper120 = new Swiper(".section__wrapper", {
          slidesPerView: 1,
          navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        });
      }
    },
    false
  );
  // scroll
  const header = document.querySelector(".header");
  const baner = document.querySelector("#baner");
  const banerImg = document.querySelector(".baner__img");

  if (window.outerWidth > 992) {
    baner.style.height = `calc(101vh - ${header.clientHeight}px)`;
    //  baner.style.transform = `translateY(${header.clientHeight}px)`;
    banerImg.style.height = `calc(101vh - ${header.clientHeight}px)`;
    document.querySelector("html").style.overflow = "hidden";
    document.querySelector("html").style.height = window.outerHeight + "px";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.height = window.outerHeight + "px";
    $("html").on("mousewheel", function () {
      baner.classList.add("baner__scroll");
      // baner.style.height = `60vh`;
      banerImg.style.height = `75vh`;
      setTimeout(s, 1500);

      //   background
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let bottomBlock = baner.getBoundingClientRect().bottom + scrollTop;

      const catalog = document.querySelector(".catalog1");
      let el = catalog.getBoundingClientRect();

      const scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop;

      const catalog2 = document.querySelector(".catalog2");
      const catalog3 = document.querySelector(".catalog3");
      const category = document.querySelector("#category__media");
      const section = document.querySelector(".section");
      const banner = document.querySelector("#banner");
      const headlink = document.querySelector(".headlink");
      const regular = document.querySelector("#regular");
      const bright = document.querySelector("#bright");
      let sec = section.getBoundingClientRect();
      let el2 = catalog2.getBoundingClientRect();
      let el3 = catalog3.getBoundingClientRect();
      let cat = category.getBoundingClientRect();
      let bann = banner.getBoundingClientRect();
      let elScroll = scrollTop + catalog.clientHeight - 100;
      let linkScroll = scrollTop + headlink.clientHeight - 100;
      let sectionScroll = scrollTop + section.clientHeight - 100;
      let elScroll2 = scrollTop + catalog2.clientHeight - 100;
      let elScroll3 = scrollTop + catalog3.clientHeight - 100;
      let elScrollCat = scrollTop + category.clientHeight - 100;
      let elScrollBan = scrollTop + banner.clientHeight - 100;
      if (elScroll > bottomBlock) {
        catalog.style.transform = "translateY(0)";
      }
      if (elScrollCat > el.bottom + scrollTop - 200) {
        category.style.transform = "translateY(0)";
      }
      if (elScrollBan > cat.bottom + scrollTop - 200) {
        banner.style.transform = "translateY(0)";
      }
      if (elScroll2 > bann.bottom + scrollTop + 200) {
        catalog2.style.transform = "translateY(0)";
      }
      if (sectionScroll > el2.bottom + scrollTop - 200) {
        regular.style.transform = "translateX(0)";
        bright.style.transform = "translateX(0)";
      }
      if (elScroll3 > sec.bottom + scrollTop + 200) {
        catalog3.style.transform = "translateY(0)";
      }
      if (linkScroll > el3.bottom + scrollTop - catalog3.clientHeight) {
        headlink.style.transform = "translateY(0)";
      }
    });
  }
});

function s() {
  document.querySelector("html").removeAttribute("style");
  document.querySelector("body").removeAttribute("style");
}

window.addEventListener("scroll", () => {
  const background = document.querySelector(".main__background");
  background.style.top = 0;
  const catalog = document.querySelector(".catalog.catalog1");
  catalog.style.marginTop = background.clientHeight + "px";
  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition() < background.clientHeight / 1.5) {
    background.style.opacity = scrollPosition() * 0.002;
  } else if (scrollPosition() > background.clientHeight / 1.5) {
    background.style.opacity =
      background.clientHeight * 0.003 - scrollPosition() * 0.002;
    console.log(background.clientHeight * 0.003);
  }
});
