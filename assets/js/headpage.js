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
  banerImg.style.height = `calc(100vh - ${header.clientHeight}px)`;
  baner.style.height = `calc(100vh - ${header.clientHeight}px)`;
  baner.style.marginTop = `${header.clientHeight}px`;
  //   banerImg.style.height = `100vh`;
  var scrollCoef = 0.001;
  window.addEventListener("scroll", () => {
    baner.classList.add("baner__scroll");

    if (pageYOffset < 600) {
      baner.style.height = banerImg.clientHeight + "px";
      banerImg.style.height = `100%`;
      let r = pageYOffset + 50 + "px";
      baner.style.maxWidth = "95%";
      baner.style.transform = `translateX(-50%)`;
      baner.style.position = "fixed";
      baner.style.top = header.clientHeight + "px";
      baner.style.left = "50%";
      baner.style.marginTop = 0;

      // baner.style.marginBottom = "900px";
    }
    //   background
    const background = document.querySelector(".main__background");
    let elem = background.getBoundingClientRect();
    let top = elem.top - window.pageYOffset;
    console.log(top);

    if (pageYOffset > 600) {
      let i = pageYOffset * 0.001;
      baner.style.top = elem.top - banerImg.clientHeight - 27 + "px";
      background.style.opacity = i;
    }

    //  if (pageYOffset > 1100) {
    //    // background.style.opacity = i--;var scrollCoef = 0.0035;
    //    let win = document.querySelector("window");
    //    background.style.opacity = 1 - window.scrollY * scrollCoef;
    //  }
    background.style.marginTop =
      header.clientHeight + banerImg.clientHeight + 600 + "px";
    //  if (top >= 0) {
    //    console.log(top);
    //  }
  });
});
