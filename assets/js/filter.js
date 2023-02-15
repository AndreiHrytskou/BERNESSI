const sortArrow = document.querySelector(".sort-arrow");
const sortInput = document.querySelector(".sort-input");
sortArrow.addEventListener("click", () => {
  sortInput.classList.toggle("input-active");
  sortArrow.classList.toggle("arrow-rotate");
});
