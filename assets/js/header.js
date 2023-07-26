document.addEventListener("DOMContentLoaded", function () {
  //  burger menu
  if (window.outerWidth > 1200) {
    const page = document.querySelector(".page");
    page.style.paddingTop =
      document.querySelector(".header").clientHeight + "px";

  }

  let lastScroll = 0;
  const defaultOffset = 200;
  const header = document.querySelector(".header");

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains("hide");

  if(window.outerWidth > 576){
	window.addEventListener("scroll", () => {
		if (
			scrollPosition() > lastScroll &&
			!containHide() &&
			scrollPosition() > defaultOffset
		) {
			//scroll down
			header.classList.add("hide");
			header.style.transform = `translateY(-${header.clientHeight}px)`;
		} else if (scrollPosition() < lastScroll && containHide()) {
			//scroll up
			header.classList.remove("hide");
			header.style.transform = `translateY(0)`;
		}

		lastScroll = scrollPosition();
	});
	
  }
 if(window.outerWidth < 576){
	const page = document.querySelector(".page");
    page.style.paddingTop =
      document.querySelector(".header").clientHeight + "px";
 }
  const burger = document.querySelector(".burger-menu");
  const menuHide = document.querySelector(".menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-menu--opened");
    burger.classList.toggle("burger-menu--closed");
    menuHide.classList.toggle("menu-active");
  });
  const item = document.querySelectorAll(".header .submenu__container");
  if (window.innerWidth >= 1201) {
    const menuItem = document.querySelectorAll(".header .menu__item");
    const submenu = document.querySelectorAll(".submenu__wrapper");
	 item.forEach((i)=>{
		if(i){
			let link = i.parentElement.childNodes[1];
			link.removeAttribute("href")
		}
	 })
    menuItem.forEach((e) => {
		// console.log(e.childNodes);
		if(e.childNodes.length > 3){
			e.childNodes[1].removeAttribute("href");
			e.addEventListener("click", () => {
				let category = e.dataset.cat;
				submenu.forEach((el) => {
					let subcategory = el.dataset.cat;
					if (category != subcategory) {
						el.classList.remove("submenu__active");
					} else {
						if (!e.classList.contains("menu__active")) {
							el.classList.toggle("submenu__active");				  
						} else {
							el.classList.remove("submenu__active");
						}
					}
				});
			});
		}
		document.addEventListener("click", (e)=>{
			let target = e.target;

			if(target != document.querySelector(".menu__block-title")){
				document.querySelector(".submenu__wrapper").classList.remove("submenu__active")
			}
		})
    });
	}
  const menuItem = document.querySelectorAll(".menu__block-span");
  const submenuItem = document.querySelectorAll(".submenu__item-span");
  if (window.innerWidth <= 1200) {
	 item.forEach((i)=>{
		if(i){
			let link = i.parentElement.childNodes[1];
			link.removeAttribute("href")
		}
	 })
    menuItem.forEach((e) => {
		console.log(e.parentNode.childNodes.length);
		if(e.parentNode.childNodes.length > 3){
			e.removeAttribute("href");
		
      e.addEventListener("click", () => {
        e.parentElement.classList.add("submenu-active");
        e.parentNode.childNodes[3].childNodes[1].addEventListener(
          "click",
          () => {
            e.parentElement.classList.remove("submenu-active");
          }
        );
      });
		}
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

     //   smooth scroll

     SmoothScroll({
       // Время скролла 400 = 0.4 секунды
       animationTime: 800,
       // Размер шага в пикселях
       stepSize: 50,

       // Дополнительные настройки:

       // Ускорение
       accelerationDelta: 30,
       // Максимальное ускорение
       accelerationMax: 2,

       // Поддержка клавиатуры
       keyboardSupport: true,
       // Шаг скролла стрелками на клавиатуре в пикселях
       arrowScroll: 50,

       // Pulse (less tweakable)
       // ratio of "tail" to "acceleration"
       pulseAlgorithm: true,
       pulseScale: 4,
       pulseNormalize: 1,

       // Поддержка тачпада
       touchpadSupport: true,
     });
});
