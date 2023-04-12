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

  const header = document.querySelector(".header");
  const baner = document.querySelector(".baner");
  const banerImg = document.querySelector(".baner__img");

  baner.style.translate = "none";
  baner.style.rotate = "none";
  baner.style.scale = "none";
  banerImg.style.height = `calc(100vh - ${header.clientHeight}px)`;
  //   banerImg.style.height = `100vh`;
  window.addEventListener("scroll", () => {
    baner.classList.add("baner__scroll");

    if (pageYOffset < 800) {
      baner.style.height = banerImg.clientHeight + "px";
      banerImg.style.height = `100%`;
      let r = pageYOffset + 50 + "px";
      baner.style.translate = "none";
      baner.style.rotate = "none";
      baner.style.scale = "none";
      baner.style.maxWidth = "95%";
      baner.style.transform = `translate(0px, ${r})`;
      // baner.style.marginBottom = "900px";
    }
    //  if (pageYOffset > 800) {
    //    baner.style.marginBottom = "50px";
    //    baner.style.transform = `translate(0px, 0px)`;
    //  }
  });
});
