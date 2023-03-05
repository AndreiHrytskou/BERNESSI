const icon = document.querySelector(".icon");
icon.forEach((e) => {
  e.addEventListener("click", (event) => {
    e.classList.toggle("open");
  });
});
