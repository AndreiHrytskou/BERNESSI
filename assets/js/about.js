document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#element", {
    strings: ["an active lifestyle!", "an healthy lifestyle!"],
    typeSpeed: 200,
    loop: true,
  });

  // // video swiper

  var swiper = new Swiper(".video__list", {
    slidesPerView: 3,
    spaceBetween: 30,
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

  //  video

  function findVideos() {
    let videos = document.querySelectorAll(".video__item");

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    let link = video.querySelector(".video__link");
    let media = video.querySelector(".video__media");
    let button = video.querySelector(".video__button");
    let id = parseMediaURL(media);
    video.addEventListener("click", () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute("href");
    video.classList.add("video--enabled");
  }

  function parseMediaURL(media) {
    let regexp =
      /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
  }

  function createIframe(id) {
    let iframe = document.createElement("iframe");

    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("src", generateURL(id));
    iframe.classList.add("video__media");

    return iframe;
  }

  function generateURL(id) {
    let query = "?rel=0&showinfo=0&autoplay=1";

    return "https://www.youtube.com/embed/" + id + query;
  }

  findVideos();

  new Swiper(".news__box", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Swiper(".news__galery", {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
