const selectOutput = document.querySelector(".select-output");
const outputsize = document.querySelector(".outputsize");
const selectTitle = document.querySelector(".select-title");
const selectOption = document.querySelectorAll(".select__option");
const selectArrow = document.querySelector(".select-arrow");
selectOutput.addEventListener("click", () => {
  selectTitle.classList.toggle("select-active");
  selectArrow.classList.toggle("rotate");
  selectOption.forEach((e) => {
    e.addEventListener("click", () => {
      outputsize.innerHTML = e.value;
      selectTitle.classList.remove("select-active");
      selectArrow.classList.toggle("rotate");
    });
  });
});
const d = document.querySelector(".contact-input");
console.log(d);
