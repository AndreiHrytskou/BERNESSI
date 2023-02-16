const filterBtn = document.querySelector(".filter__btn");
const filter = document.querySelector(".filter");
const filterImg = document.querySelector(".filter__btn-img");
const card = document.querySelectorAll(".card");
const load = document.querySelector(".load");
const cardArr = [];

filterBtn.addEventListener("click", () => {
  filter.classList.toggle("filter-active");
  filterImg.classList.toggle("arrow-rotate");
  card.forEach((e) => {
    if (filter.classList.contains("filter-active")) {
      e.style.minHeight = "492px";
    } else {
      e.style.minHeight = "580px";
    }
  });
});
card.forEach((e) => {
  cardArr.push(e);
  return cardArr;
});
cardArr.forEach((el) => {
  el.style.display = "none";
});
const newArr = cardArr.slice(0, 16);
newArr.forEach((e) => {
  e.style.display = "block";
});
load.addEventListener("click", () => {
  cardArr.forEach((elem) => {
    elem.style.display = "block";
  });
});

const sortArrow = document.querySelector(".sort-arrow");
const sortInput = document.querySelector(".sort-input");
const sortTop = document.querySelector(".sort-top");

const colorArrow = document.querySelector(".color-arrow");
const colorList = document.querySelector(".color__list");
const colorTop = document.querySelector(".color-top");

const sizeArrow = document.querySelector(".size-arrow");
const sizeList = document.querySelector(".filter__size__list");
const sizeTop = document.querySelector(".filter__size-top");

const collectionArrow = document.querySelector(".collection-arrow");
const collectionList = document.querySelector(".filter__collection__list");
const collectionTop = document.querySelector(".filter__collection-top");

const categoryArrow = document.querySelector(".category-arrow");
const categoryList = document.querySelector(".filter__category__list");
const categoryTop = document.querySelector(".filter__category-top");

sortTop.addEventListener("click", () => {
  sortInput.classList.toggle("input-active");
  sortArrow.classList.toggle("arrow-rotate");
});
colorTop.addEventListener("click", () => {
  colorList.classList.toggle("input-active");
  colorArrow.classList.toggle("arrow-rotate");
});
sizeTop.addEventListener("click", () => {
  sizeList.classList.toggle("input-active");
  sizeArrow.classList.toggle("arrow-rotate");
});
collectionTop.addEventListener("click", () => {
  collectionList.classList.toggle("input-active");
  collectionArrow.classList.toggle("arrow-rotate");
});
categoryTop.addEventListener("click", () => {
  categoryList.classList.toggle("input-active");
  categoryArrow.classList.toggle("arrow-rotate");
});

// filter items
const filterShow = document.querySelector(".filter__box");
const colorItem = document.querySelectorAll(".color__item");
// const itemColor = document.querySelectorAll(".item__color");
const sizeItem = document.querySelectorAll(".filter__size__item");
const collectionItem = document.querySelectorAll(".filter__collection__item");
const categoryItem = document.querySelectorAll(".filter__category__item");
let color;
let span;
colorItem.forEach((e) => {
  const input = e.childNodes[1];
  input.addEventListener("input", () => {
    if (input.checked) {
      color = input.nextElementSibling.innerText;
      let arrColor = filterShow.childNodes;
      createColor();
      arrColor.forEach((col) => {
        console.log(col);
      });
    } else if (!input.checked) {
    }
  });
});
sizeItem.forEach((e) => {
  const input = e.childNodes[1];
  input.addEventListener("input", () => {
    if (input.checked) {
      color = input.nextElementSibling.innerText;
      let arrColor = filterShow.childNodes;
      createColor();
      arrColor.forEach((col) => {
        console.log(col);
      });
    } else if (!input.checked) {
    }
  });
});
collectionItem.forEach((e) => {
  const input = e.childNodes[1];
  input.addEventListener("input", () => {
    if (input.checked) {
      color = input.nextElementSibling.innerText;
      let arrColor = filterShow.childNodes;
      createColor();
      arrColor.forEach((col) => {
        console.log(col);
      });
    } else if (!input.checked) {
    }
  });
});
categoryItem.forEach((e) => {
  const input = e.childNodes[1];
  input.addEventListener("input", () => {
    if (input.checked) {
      color = input.nextElementSibling.innerText;
      let arrColor = filterShow.childNodes;
      createColor();
      arrColor.forEach((col) => {
        console.log(col);
      });
    } else if (!input.checked) {
    }
  });
});
function createColor() {
  span = document.createElement("span");
  span.className = "item__color";
  filterShow.append(span);
  span.append(color);
}
