const remove = document.querySelectorAll(".remove-product");
remove.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.parentElement.remove();
  });
});

const hideBlock = document.querySelectorAll(".sort-top");
hideBlock.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});

//  sum
const priceItems = document.querySelectorAll(
  ".price-product > .item-price > .price"
);
const total = document.querySelector(".total-sum > .sum");
const tax = document.querySelector(".tax-price > .price");
const subtotal = document.querySelector(".subtotal-price > .price");
let arrProduct = [];
priceItems.forEach((e) => {
  arrProduct.push(+e.innerText);
  const reducer = (acc, currentValue) => acc + currentValue;
  subtotal.innerText = arrProduct.reduce(reducer);
});
let summ = Number(subtotal.innerText) + Number(tax.innerText);
total.innerText = summ.toFixed(2);
