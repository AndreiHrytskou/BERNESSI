const lang = document.querySelectorAll(".lang");
const langItem = document.querySelectorAll(".lang__item");
const first = document.querySelector(".lang__first");
const eng = document.querySelectorAll(".lang-en");
const ar = document.querySelectorAll(".lang-ar");
const rus = document.querySelectorAll(".lang-ru");
let current = document.querySelector(".current-lang");
lang.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("lang-active");
    eng.forEach((en) => {
      en.classList.toggle("lang-visible");
    });
    ar.forEach((a) => {
      a.classList.toggle("lang-visible");
    });
    rus.forEach((ru) => {
      ru.classList.toggle("lang-visible");
    });
  });
});
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
