const title = document.querySelector(".title");
const radio = document.querySelectorAll(".custom-radio");
const labelItem = document.querySelectorAll(".label");
labelItem.forEach((e) => {
  if (title.innerHTML == e.innerHTML || title.title == e.innerHTML) {
    e.previousElementSibling.checked = true;
  }
});
