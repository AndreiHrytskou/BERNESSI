const filterBtn = document.querySelector(".filter__btn");
const filter = document.querySelector(".filter");
const filterImg = document.querySelector(".filter__btn-img");
const card = document.querySelectorAll(".card");

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
const apply = document.querySelector(".apply");
const reset = document.querySelector(".reset");
const checkbox = document.querySelectorAll(".custom-checkbox");
const filterShow = document.querySelector(".filter__box");
const colorItem = document.querySelectorAll(".color__item");
const sizeItem = document.querySelectorAll(".filter__size__item");
const collectionItem = document.querySelectorAll(".filter__collection__item");
const categoryItem = document.querySelectorAll(".filter__category__item");
let color;
let label;
reset.addEventListener("click", (e) => {
  e.preventDefault();
  checkbox.forEach((el) => {
    el.checked = false;
  });
  filterShow.childNodes.forEach((e) => {
    e.remove();
  });
});

apply.addEventListener("click", (ap) => {
  ap.preventDefault();

  checkbox.forEach((el) => {
    if (el.checked) {
      label = el.nextElementSibling.innerText;
      createColor();
    }
  });
});

function createColor() {
  const span = document.createElement("span");
  const text = document.createElement("p");
  const close = document.createElement("button");
  span.className = "item__color";
  text.append(label);
  span.append(text);
  filterShow.append(span);
  close.className = "close";
  filterShow.append(span);
  close.append("x");
  span.append(close);
  span.className = "item__color";
  close.addEventListener("click", () => {
    checkbox.forEach((el) => {
      el.checked = false;
    });
    span.remove();
  });
}
