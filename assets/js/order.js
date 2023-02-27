const hideBlock = document.querySelectorAll(".sort-top");
hideBlock.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});
const price = document.querySelectorAll(".price");
const summ = document.querySelector(".subtotal-price > .price");
const total = document.querySelector(".total-sum > .sum");
const tax = document.querySelector(".tax-price > .price");
let arrPr = [];
price.forEach((e) => {
  arrPr.push(+e.innerText);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  summ.innerText = arr.reduce(reducer);
});
let totalItem = +summ.innerHTML + +tax.innerHTML;

total.innerHTML = totalItem.toFixed(2);
