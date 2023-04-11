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
  var swiper = new Swiper(".baner__swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
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

  // scroll

  const banerBg = document.querySelector(".baner__swiper");
  const main = document.querySelector(".main");
  const baner = document.querySelector(".baner");

  window.addEventListener("scroll", () => {
    //   console.log(pageYOffset);
    banerBg.classList.add("baner__scroll");
    //  if (pageYOffset > baner.clientHeight) {
    //    main.classList.add("main__background");
    //  }
    //   banerBg.style.transition = "1s";
    //   banerBg.style.borderRadius = "40px";
    //   banerBg.style.maxWidth = "95%";
    //   banerBg.style.overflow = "hidden";
    //   banerBg.style.margin = "0px auto";
  });
});
