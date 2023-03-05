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

// const card = document.querySelectorAll(".card");
// if (card !== undefined) {
//   card.forEach((e) => {
//     e.addEventListener("click", () => {
//       const like = document.querySelector(".like");
// 		like.reventDefault();
//     });
//   });
// }
// const card2 = document.querySelectorAll(".card2");
// if (card2 !== undefined) {
//   card2.forEach((e) => {
//     e.addEventListener("click", (el) => {
//       el.preventDefault();
//     });
//   });
// }
