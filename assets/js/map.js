const cart__btn = document.querySelector(".cart__btn");
cart__btn.addEventListener("click", () => {
  div.className = "background";
  document.body.append(div);
  cartWrapper.classList.toggle("cart-visible");
});
close.addEventListener("click", () => {
  div.remove();
  cartWrapper.classList.remove("cart-visible");
});
