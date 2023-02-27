const filterBtn = document.querySelector(".filter__btn");
const filterInner = document.querySelector(".filter__inner");
const filter = document.querySelector(".filter");
const filterImg = document.querySelector(".filter__btn-img");
const card = document.querySelectorAll(".card");

filterBtn.addEventListener("click", () => {
  filterInner.classList.toggle("inner-active");
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
const filterShow = document.querySelector(".filter__box");
const reset = document.querySelector(".reset");
apply.addEventListener("click", (ap) => {
  ap.preventDefault();
  const filterBlock = [
    ...filter.querySelectorAll(".filter__block input:checked"),
  ].map((n) => n.value);
  if (filterBlock != "") {
    filterShow.innerHTML = `<span class="item__color"><p>${filterBlock.join(
      "</p><button class='close'>x</button></span><span class='item__color'><p>"
    )}</p><button class='close'>x</button></span>`;
  }
  const close = document.querySelectorAll(".close");
  close.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
      const input = document.querySelectorAll(".filter__block input:checked");
      input.forEach((i) => {
        if (e.previousElementSibling.innerHTML == i.value) {
          i.checked = false;
        }
      });
    });
  });
});
reset.addEventListener("click", (r) => {
  r.preventDefault();
  const input = document.querySelectorAll(".filter__block input:checked");
  input.forEach((l) => {
    l.checked = false;
  });
  filterShow.innerHTML = null;
});
if (window.innerWidth < 400) {
  apply.addEventListener("click", () => {
    filterInner.classList.toggle("inner-active");
    filter.classList.toggle("filter-active");
    filterImg.classList.toggle("arrow-rotate");
  });
}
