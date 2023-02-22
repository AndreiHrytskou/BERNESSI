const removeItem = document.querySelectorAll(".remove__btn");
removeItem.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.parentElement.remove();
  });
});

const addressItem = document.querySelectorAll(".address__item");
addressItem.forEach((e) => {
  e.addEventListener("click", () => {
    e.childNodes[3].childNodes[1].childNodes[1].checked = true;
  });
});
