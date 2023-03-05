const like = document.querySelectorAll(".like");
like.forEach((l) => {
  l.addEventListener("click", () => {
    l.classList.toggle("likeActive");
  });
});

const size = document.querySelectorAll(".size__item");
size.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("sizeActive");
  });
});

const card = document.querySelectorAll(".card");
