const cart__btn = document.querySelector(".cart__btn");
const attention = document.querySelector(".attention");
const doneBtn = document.querySelector(".done__btn");
const reloadBtn = document.querySelector(".reload__btn");
cart__btn.addEventListener("click", () => {
  div.className = "background";
  document.body.append(div);
  cartWrapper.classList.toggle("cart-visible");
});
close.addEventListener("click", () => {
  div.remove();
  cartWrapper.classList.remove("cart-visible");
});
attention.addEventListener("click", modalAttention);
doneBtn.addEventListener("click", modalDone);
reloadBtn.addEventListener("click", modalReload);
