const sortTop = document.querySelectorAll(".sort-top");
sortTop.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("data-visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});
