// card height
const load = document.querySelector(".load");
const cardArr = [];
card.forEach((e) => {
  cardArr.push(e);
  return cardArr;
});
cardArr.forEach((el) => {
  el.style.display = "none";
});
const newArr = cardArr.slice(0, 16);
newArr.forEach((e) => {
  e.style.display = "block";
});
load.addEventListener("click", () => {
  cardArr.forEach((elem) => {
    elem.style.display = "block";
  });
});
