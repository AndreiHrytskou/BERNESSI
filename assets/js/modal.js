const span = document.createElement("div");
function modalAttention() {
  span.classList = "div-hide";
  document.body.append(span);
  const modal = document.createElement("div");
  const title = document.createElement("h2");
  const text = document.createElement("p");
  const textBold = document.createElement("p");
  const link = document.createElement("a");
  const textBtn = document.createElement("span");
  const imgBtn = document.createElement("img");
  const regText = document.createElement("p");
  const regLink = document.createElement("a");
  span.append(modal);
  modal.append(title);
  modal.append(text);
  modal.append(link);
  modal.append(regText);
  title.append("Attention");
  text.append("For use a wishlist you need");
  text.append(textBold);
  link.append(textBtn);
  link.append(imgBtn);
  textBold.append("login on site");
  textBtn.append("login");
  regText.append("Don’t have an account?");
  regText.append(regLink);
  regLink.append("Register now!");
  modal.className = "modal__wrapper";
  title.className = "modal__title";
  text.className = "modal__text";
  textBold.className = "modal__text__bold";
  textBtn.className = "btn-text";
  imgBtn.className = "arrow";
  regText.className = "register__text";
  regLink.className = "register__link";
  link.className = "modal__link";
  link.href = "./login.html";
  imgBtn.src = "./assets/img/arrow-right-grey.webp";
  regLink.href = "./register.html";

  span.addEventListener("click", (e) => {
    let target = e.target;
    let its_day = target == modal;
    let its_title = target == title;
    let its_text = target == text;
    let its_link = target == link;
    let its_regText = target == regText;
    if (!its_day && !its_title && !its_text && !its_regText && !its_link) {
      span.classList.toggle("div-hide");
      modal.remove();
    }
  });
}

function modalDone() {
  span.classList = "div-hide";
  document.body.append(span);
  const modal = document.createElement("div");
  const title = document.createElement("h2");
  const text = document.createElement("p");
  const link = document.createElement("button");
  const textBtn = document.createElement("span");
  const imgBtn = document.createElement("img");
  const regText = document.createElement("p");
  span.append(modal);
  modal.append(title);
  modal.append(text);
  modal.append(link);
  modal.append(regText);
  title.append("Done");
  text.append("Your message has been sent successfully!");
  link.append(textBtn);
  link.append(imgBtn);
  textBtn.append("Close");
  modal.className = "modal__wrapper";
  title.className = "modal__title";
  text.className = "modal__text";
  textBtn.className = "btn-text";
  imgBtn.className = "arrow";
  link.className = "modal__link close__modal";
  imgBtn.src = "./assets/img/arrow-right-grey.webp";

  link.addEventListener("click", () => {
    span.remove();
  });
  span.addEventListener("click", (e) => {
    let target = e.target;
    let its_day = target == modal;
    let its_title = target == title;
    let its_text = target == text;
    if (!its_day && !its_title && !its_text) {
      span.classList.toggle("div-hide");
      modal.remove();
    }
  });
}
function modalReload() {
  span.classList = "div-hide";
  document.body.append(span);
  const modal = document.createElement("div");
  const title = document.createElement("h2");
  const text = document.createElement("p");
  const link = document.createElement("button");
  const textBtn = document.createElement("span");
  const imgBtn = document.createElement("img");
  const regText = document.createElement("p");
  span.append(modal);
  modal.append(title);
  modal.append(text);
  modal.append(link);
  modal.append(regText);
  title.append("Sorry ;(");
  text.append("Something went wrong... Try again please");
  link.append(textBtn);
  link.append(imgBtn);
  textBtn.append("Reload");
  modal.className = "modal__wrapper";
  title.className = "modal__title";
  text.className = "modal__text";
  textBtn.className = "btn-text";
  imgBtn.className = "arrow";
  link.className = "modal__link reload__modal";
  imgBtn.src = "./assets/img/arrow-right-grey.webp";

  link.addEventListener("click", () => {
    location.reload();
  });
  span.addEventListener("click", (e) => {
    let target = e.target;
    let its_day = target == modal;
    let its_title = target == title;
    let its_text = target == text;
    if (!its_day && !its_title && !its_text) {
      span.classList.toggle("div-hide");
      modal.remove();
    }
  });
}
