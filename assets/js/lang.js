const lang = document.querySelector(".lang");
const langItem = document.querySelectorAll(".lang__item");
const first = document.querySelector(".lang__first");
const eng = document.querySelector(".lang-en");
const ar = document.querySelector(".lang-ar");
const rus = document.querySelector(".lang-ru");
let current = document.querySelector(".current-lang");
lang.addEventListener("click", () => {
  eng.classList.toggle("lang-visible");
  ar.classList.toggle("lang-visible");
  rus.classList.toggle("lang-visible");
  langItem.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("current-lang");
      if (e.classList.contains("current-lang")) {
        console.log("asds");
        first.style.display = "none";
      }
    });
  });
});
