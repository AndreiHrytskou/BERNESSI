function imageZoom() {
	let img = document.getElementById("myimage");
  var lens, cx, cy;
  let result = document.getElementById("myresult");
  /*создать линзу:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
	lens.addEventListener("mouseover",()=>{
		lens.classList.add("lens-visble")
	})
	lens.addEventListener("mouseout",()=>{
		lens.classList.remove("lens-visble")
	})
  /*вставить линзы:*/
  img.parentElement.insertBefore(lens, img);
  /*вычислите соотношение между результатом DIV и объективом:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*задайте свойства фона для результата DIV:*/
  img.addEventListener("load",()=>{
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  })
  /*выполните функцию, когда кто-то перемещает курсор на изображение или объектив:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*а также для сенсорных экранов:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*предотвратите любые другие действия, которые могут произойти при перемещении по изображению:*/
    e.preventDefault();
    /*получить позиции курсора x и y:*/
    pos = getCursorPos(e);
    /*рассчитайте положение объектива:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /*не допускайте расположения объектива вне изображения:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*установите положение объектива:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*покажите что такое объектив:*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*получить x и y позиции изображения:*/
    a = img.getBoundingClientRect();
    /*вычислите координаты курсора x и y относительно изображения:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*рассмотрим любую прокрутку страницы:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}


imageZoom()
const itemImg = document.querySelector(".img-zoom-lens")
const itemResult = document.querySelector(".img-zoom-result")
itemImg.addEventListener("mouseover", ()=>{
	itemResult.classList.add("result-active");
})
itemImg.addEventListener("mouseout", ()=>{
	itemResult.classList.remove("result-active")
})