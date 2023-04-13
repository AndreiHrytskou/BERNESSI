// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
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
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
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
  var swiper = new Swiper(".swiper-noname", {
    slidesPerView: 3,
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

  //  my slider

  let offset = 0;
  const sliderLine = document.querySelector(".section__wrapper");

  if (window.innerWidth < 415) {
    document.querySelector(".next").addEventListener("click", () => {
      offset += 299;
      if (offset > 299) {
        offset = 0;
      }
      sliderLine.style.left = -offset + "px";
    });
    document.querySelector(".prev").addEventListener("click", () => {
      offset -= 299;
      if (offset < 0) {
        offset = 299;
      }
      sliderLine.style.left = -offset + "px";
    });
  }
  if (window.innerWidth > 414) {
    document.querySelector(".next").addEventListener("click", () => {
      offset += 250;
      if (offset > 250) {
        offset = 0;
      }
      sliderLine.style.left = -offset + "px";
    });
    document.querySelector(".prev").addEventListener("click", () => {
      offset -= 250;
      if (offset < 0) {
        offset = 250;
      }
      sliderLine.style.left = -offset + "px";
    });
  }

  // scroll

  const header = document.querySelector(".header");
  const baner = document.querySelector(".baner");
  const banerImg = document.querySelector(".baner__img");
  if (window.outerWidth > 992) {
    banerImg.style.height = `calc(100vh - ${header.clientHeight}px)`;
    baner.style.height = `calc(100vh - ${header.clientHeight}px)`;
    //  baner.style.marginTop = `${header.clientHeight}px`;
    window.addEventListener("scroll", () => {
      baner.classList.add("baner__scroll");
      if (pageYOffset < 600) {
        baner.style.height = banerImg.clientHeight + "px";
        banerImg.style.height = `100%`;
        //   let r = pageYOffset + 50 + "px";
        //   baner.style.maxWidth = "95%";
        //   baner.style.transform = `translateX(-50%)`;
        //   baner.style.position = "fixed";
        baner.style.top = header.clientHeight + "px";
        //   baner.style.left = "50%";
        baner.style.marginTop = 0;
      }

      //   background
      const background = document.querySelector(".main__background");
      let elem = background.getBoundingClientRect();
      let top = elem.top - document.documentElement.scrollTop;
      let middle = top + background.clientHeight;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scroll = scrollTop + background.clientHeight - 100;
      let topBlock = elem.top + scrollTop;
      let bottomBlock = elem.bottom + scrollTop;

      // console.log(middle);

      if (scroll > topBlock) {
        let i = pageYOffset * 0.001;
        //   baner.style.position = "relative";
        background.style.opacity = i;
      }
      if (middle < 0) {
        let b = elem.bottom * 0.0014;
        background.style.opacity = b;
      }
      // background.style.marginTop =
      //   header.clientHeight + banerImg.clientHeight + 600 + "px";
      const catalog = document.querySelector(".catalog1");
      const category = document.querySelector(".category");
      const banner = document.querySelector(".banner");
      let el = catalog.getBoundingClientRect();
      let cat = category.getBoundingClientRect();
      let bann = banner.getBoundingClientRect();
      // let elTop = el.top + scrollTop - 200;
      // let elTopCat = cat.top + scrollTop - 200;
      let elScroll = scrollTop + catalog.clientHeight - 100;
      let elScrollCat = scrollTop + category.clientHeight - 100;
      let elScrollBan = scrollTop + banner.clientHeight - 100;
      if (elScroll > bottomBlock + 200) {
        catalog.style.transform = "translateY(0)";
      }
      if (elScrollCat > el.bottom + scrollTop + 100) {
        category.style.transform = "translateY(0)";
      }
      if (elScrollBan > cat.bottom + scrollTop + 100) {
        banner.style.transform = "translateY(0)";
      }
    });
  }
});
