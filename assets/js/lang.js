const lang = document.querySelector(".lang");
const langItem = document.querySelectorAll(".lang__item");
const first = document.querySelector(".lang__first");
const eng = document.querySelector(".lang-en");
const ar = document.querySelector(".lang-ar");
const rus = document.querySelector(".lang-ru");
let current = document.querySelector(".current-lang");
lang.addEventListener("click", () => {
  lang.classList.toggle("lang-active");
  eng.classList.toggle("lang-visible");
  ar.classList.toggle("lang-visible");
  rus.classList.toggle("lang-visible");
  langItem.forEach((e) => {
    e.addEventListener("click", () => {
      langItem.forEach((el) => {
        if (el.classList.contains("current-lang")) {
          el.classList.remove("current-lang");
        }
      });
      first.classList.remove("lang__first");
      e.classList.add("current-lang");
    });
  });
});
