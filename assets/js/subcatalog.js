card.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
  });
});
const like = document.querySelectorAll(".like");
like.forEach((l) => {
  l.addEventListener("click", () => {
    l.classList.toggle("likeActive");
  });
});
