// const pass = document.querySelector(".password__item input");
// const passBtn = document.querySelector(".password__btn");
// const passImg = document.querySelector(".password__btn-img");
// passBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   pass.classList.toggle("password__input-text");
//   if (pass.classList.contains("password__input-text")) {
//     pass.type = "text";
//     passImg.classList.add("path-current");
//   } else {
//     pass.type = "password";
//     passImg.classList.remove("path-current");
//   }
// });

function passwordShow(btn) {
  let prev = btn.previousElementSibling;
  let child = btn.childNodes[1];
  prev.classList.toggle("password__input-text");
  if (prev.classList.contains("password__input-text")) {
    prev.type = "text";
    child.classList.add("path-current");
  } else {
    prev.type = "password";
    child.classList.remove("path-current");
  }
}
