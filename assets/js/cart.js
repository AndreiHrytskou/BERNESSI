const cart = document.querySelector(".cart");
const close = document.querySelector(".close");
const cartWrapper = document.querySelector(".cart-wrapper");
const div = document.createElement("div");
const resetCart = document.querySelector(".reset-cart");
const cartItem = document.querySelectorAll(".cart__item");

cart.addEventListener("click", () => {
  div.className = "background";
  document.body.append(div);
  cartWrapper.classList.toggle("cart-visible");
});
close.addEventListener("click", () => {
  div.remove();
  cartWrapper.classList.toggle("cart-visible");
});
div.addEventListener("click", () => {
  div.remove();
  cartWrapper.classList.toggle("cart-visible");
});
resetCart.addEventListener("click", () => {
  cartItem.forEach((e) => {
    e.remove();
  });
});
