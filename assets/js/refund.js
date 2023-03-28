const nameInput = document.querySelector(".form__name");
const email = document.querySelector(".form__email");
const phone = document.querySelector(".form__phone");
const btn = document.querySelector(".register__btn");
btn.addEventListener("click", (e) => {
  if (nameInput.value != "") {
    nameInput.parentElement.style.borderColor = "rgba(136, 140, 149, 0.35)";
  } else {
    nameInput.parentElement.style.borderColor = "#ff42c9";
  }
  if (email.value != "") {
    email.parentElement.style.borderColor = "rgba(136, 140, 149, 0.35)";
  } else {
    email.parentElement.style.borderColor = "#ff42c9";
  }
  if (phone.value != "") {
    phone.parentElement.style.borderColor = "rgba(136, 140, 149, 0.35)";
  } else {
    phone.parentElement.style.borderColor = "#ff42c9";
  }
});
