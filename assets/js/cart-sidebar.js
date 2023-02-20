const remove = document.querySelectorAll(".remove-product");
remove.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.parentElement.remove();
  });
});

const hideBlock = document.querySelectorAll(".sort-top");
hideBlock.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});
