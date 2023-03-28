function showForm() {
  const div = document.createElement("div");
  document.body.append(div);
  div.className = "div-hide show";
  let divForm = document.createElement("div");
  divForm.className = "div__form";
  document.body.append(divForm);
  divForm.innerHTML = `<form class="form__return grey">
		<h4 class="h4">Please process your free return here:</h4>
		<div class="login__list">
			<label class="login__item" for="">
				<input type="text" class="form__name" name="" id="" placeholder="Name" required>
			</label>
			<label class="login__item" for="">
				<input type="email" class="form__email" name="" id="" placeholder="E-mail" required>
			</label>
			<label class="login__item" for="">
				<input oninput="phoneMask(this)" class="form__phone" type="text" name="" id="" placeholder="Phone..." required>
			</label>
		</div>
		<button class="register__btn">
			<span class="checkout__text">Send</span>
			<img src="./assets/img/arrow-right-grey.webp" alt="arrow" class="checkout__img">
		</button>
		<img class="cross" src="./assets/img/cross.webp" alt="close">
	</form>`;
  const formReturn = document.querySelector(".form__return");
  const loginItem = document.querySelectorAll(".login__item");
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
  document.querySelector(".cross").addEventListener("click", () => {
    divForm.remove();
    div.remove();
  });
  div.addEventListener("click", () => {
    divForm.remove();
    div.remove();
  });
}
