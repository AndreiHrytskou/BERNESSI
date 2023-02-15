const filterBtn = document.querySelector(".filter__btn");
const filter = document.querySelector(".filter");
const filterImg = document.querySelector(".filter__btn-img");

filterBtn.addEventListener("click", () => {
  filter.classList.toggle("filter-active");
  filterImg.classList.toggle("arrow-rotate");
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
