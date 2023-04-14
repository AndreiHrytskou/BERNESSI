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
  //   var lastScrollTop = 0;

  //   // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  //   window.addEventListener(
  //     "scroll",
  //     function () {
  //       // or window.addEventListener("scroll"....
  //       var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //       if (st > lastScrollTop) {
  //         console.log("down");
  //       } else if (st < lastScrollTop) {
  //         console.log("up");
  //         // upscroll code
  //       } // else was horizontal scroll
  //       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  //     },
  //     false
  //   );
  // scroll

  const header = document.querySelector(".header");
  const baner = document.querySelector(".baner");
  const banerImg = document.querySelector(".baner__img");
  //   const body = document.querySelector("body");
  //   //   const html = document.querySelector("html");
  //   //   body.style.height = "100vh";
  //   //   body.style.overflow = "hidden";
  //   //   //   html.style.height = "100vh";
  //   //   //   html.style.overflow = "hidden";
  //   window.addEventListener("scroll", () => {
  //     body.style.overflowY = "visible";
  //     //  html.style.overflow = "auto";
  //     //  html.style.height = "auto";
  //     body.style.height = "auto";
  //   });
  //   document.onscroll = () => {
  //     body.style.height = "auto";
  //   };

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
        //   baner.style.marginTop = 0;
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
      const catalog2 = document.querySelector(".catalog2");
      const catalog3 = document.querySelector(".catalog3");
      const category = document.querySelector(".category");
      const section = document.querySelector(".section");
      const banner = document.querySelector(".banner");
      const headlink = document.querySelector(".headlink");
      const regular = document.querySelector(".regular");
      const bright = document.querySelector(".bright");
      let el = catalog.getBoundingClientRect();
      let link = headlink.getBoundingClientRect();
      let sec = section.getBoundingClientRect();
      let el2 = catalog2.getBoundingClientRect();
      let el3 = catalog3.getBoundingClientRect();
      let cat = category.getBoundingClientRect();
      let bann = banner.getBoundingClientRect();
      // let elTop = el.top + scrollTop - 200;
      // let elTopCat = cat.top + scrollTop - 200;
      let elScroll = scrollTop + catalog.clientHeight - 100;
      let linkScroll = scrollTop + headlink.clientHeight - 100;
      let sectionScroll = scrollTop + section.clientHeight - 100;
      let elScroll2 = scrollTop + catalog2.clientHeight - 100;
      let elScroll3 = scrollTop + catalog3.clientHeight - 100;
      let elScrollCat = scrollTop + category.clientHeight - 100;
      let elScrollBan = scrollTop + banner.clientHeight - 100;
      if (elScroll > bottomBlock + 300) {
        catalog.style.transform = "translateY(0)";
      }
      if (elScrollCat > el.bottom + scrollTop) {
        category.style.transform = "translateY(0)";
      }
      if (elScrollBan > cat.bottom + scrollTop + 100) {
        banner.style.transform = "translateY(0)";
      }
      if (elScroll2 > bann.bottom + scrollTop + 300) {
        catalog2.style.transform = "translateY(0)";
      }
      if (sectionScroll > el2.bottom + scrollTop + 100) {
        regular.style.transform = "translateX(0)";
        bright.style.transform = "translateX(0)";
      }
      if (elScroll3 > sec.bottom + scrollTop + 100) {
        catalog3.style.transform = "translateY(0)";
      }
      if (linkScroll > el3.bottom + scrollTop) {
        headlink.style.transform = "translateY(0)";
      }
    });
  }
});
