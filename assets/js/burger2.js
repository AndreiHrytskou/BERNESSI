const icon = document.querySelector(".icon");
const side = document.querySelector(".sidebar-account");
icon.addEventListener("click", (event) => {
  icon.classList.toggle("open");
  side.classList.toggle("side-open");
});
