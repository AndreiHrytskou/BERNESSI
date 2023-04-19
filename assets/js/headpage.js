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

  let offset = 0;
  const sliderLine = document.querySelector(".section__wrapper");

  if (window.outerWidth < 414) {
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
  if (window.outerWidth >= 414) {
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
  // scroll
  const header = document.querySelector(".header");
  const baner = document.querySelector(".baner");
  const banerImg = document.querySelector(".baner__img");
  let lastScroll = 0;
  const defaultOffset = 200;

  if (window.outerWidth > 992) {
    baner.style.height = `calc(100vh - ${header.clientHeight}px)`;
    baner.style.transform = `translateY(${header.clientHeight}px)`;
    banerImg.style.height = `calc(100vh - ${header.clientHeight}px)`;
    document.querySelector("html").style.overflow = "hidden";
    document.querySelector("html").style.height = window.outerHeight + "px";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.height = window.outerHeight + "px";
    $("html").on("mousewheel", function () {
      baner.classList.add("baner__scroll");
      // baner.style.height = `60vh`;
      banerImg.style.height = `75vh`;
      setTimeout(s, 1500);

      //       //   background
      const background = document.querySelector(".main__background");
      let elem = background.getBoundingClientRect();
      let top = elem.top - document.documentElement.scrollTop;
      let middle = top + background.clientHeight;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scroll = scrollTop + background.clientHeight;
      let topBlock = elem.top + scrollTop;
      let bottomBlock = baner.getBoundingClientRect().bottom + scrollTop;

      const catalog = document.querySelector(".catalog1");
      let el = catalog.getBoundingClientRect();

      const scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop;

      window.addEventListener("scroll", () => {
        if (
          scrollPosition() > lastScroll &&
          // !containHide() &&
          scrollPosition() > defaultOffset
        ) {
          //  console.log("down");
          //  console.log(scrollPosition() + banerImg.clientHeight);
          //  console.log(bottomBlock);
          let topBlock = scrollPosition() + elem.top;
          //  console.log(topBlock - header.clientHeight);
          //  background.style.opacity = scrollPosition() * 0.0005;
          //  $(window).scroll(function () {
          var scrollTop = $(this).scrollTop();

          $(".main__background").css({
            opacity: function () {
              var elementHeight = $(this).height();
              return 1 - (elementHeight - scrollTop) / elementHeight;
            },
          });
          //  });
          //
          background.style.top = header.clientHeight + "px";
          //  background.style.marginTop =
          //    header.clientHeight + banerImg.clientHeight + "px";
          //  console.log(topBlock - header.clientHeight - 200);
          //  console.log(elem.top + background.clientHeight / 2);
          if (
            topBlock - header.clientHeight - 200 >
            elem.top + background.clientHeight / 2
          ) {
            var scrollTop = $(this).scrollTop();

            $(".main__background").css({
              opacity: function () {
                var elementHeight = $(this).height(),
                  opacity = (elementHeight - scrollTop) / elementHeight + 0.8;
                return opacity;
              },
            });
          }
        } else if (scrollPosition() < lastScroll) {
          //scroll up
          //  console.log("up");
          background.style.top = header.clientHeight + "px";
          //  console.log(elem.top + background.clientHeight / 2);
          var scrollTop = $(this).scrollTop();
          $(".main__background").css({
            opacity: function () {
              var elementHeight = $(this).height(),
                opacity = (elementHeight - scrollTop) / elementHeight + 0.8;
              //   console.log(background.clientHeight / 2);
              return opacity;
            },
          });

          if (background.style.opacity >= 0.95) {
            $(".main__background").css({
              opacity: function () {
                var elementHeight = $(this).height();
                console.log(1 - (elementHeight - scrollTop) / elementHeight);
                return 1 - (elementHeight - scrollTop) / elementHeight;
              },
            });
          }
          //  } else {
          //
          //  }
        }

        lastScroll = scrollPosition();
      });
      // if (scrollTop > baner.getBoundingClientRect().bottom) {
      //   console.log("asd");
      //   background.style.top = header.clientHeight + baner.clientHeight + "px";
      //   let i = pageYOffset * 0.0008;
      //   let trans =
      //     window.pageYOffset -
      //     header.clientHeight +
      //     baner.clientHeight / 2 +
      //     "px";
      //   background.style.transform = `translateY(-${trans} )`;
      //   background.style.opacity = i;
      // }
      // if (
      //   scrollTop >
      //   baner.getBoundingClientRect().bottom + background.clientHeight / 2
      // ) {
      //   let b = elem.bottom * 0.0014;
      //   background.style.opacity = b;
      // }

      const catalog2 = document.querySelector(".catalog2");
      const catalog3 = document.querySelector(".catalog3");
      const category = document.querySelector(".category");
      const section = document.querySelector(".section");
      const banner = document.querySelector(".banner");
      const headlink = document.querySelector(".headlink");
      const regular = document.querySelector(".regular");
      const bright = document.querySelector(".bright");
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
      if (elScroll > bottomBlock) {
        catalog.style.transform = "translateY(0)";
      }
      if (elScrollCat > el.bottom + scrollTop - 200) {
        category.style.transform = "translateY(0)";
      }
      if (elScrollBan > cat.bottom + scrollTop) {
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
//       //   background
//     const background = document.querySelector(".main__background");
//     let elem = background.getBoundingClientRect();
//     let top = elem.top - document.documentElement.scrollTop;
//     let middle = top + background.clientHeight;
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     let scroll = scrollTop + background.clientHeight;
//     let topBlock = elem.top + scrollTop;
//     let bottomBlock = elem.bottom + scrollTop;
//     if (scroll - 100 > topBlock) {
//       let i = pageYOffset * 0.00065;
//       background.style.opacity = i;
//     }
//     if (middle < 0) {
//       let b = elem.bottom * 0.0014;
//       background.style.opacity = b;
//     }
//   });
