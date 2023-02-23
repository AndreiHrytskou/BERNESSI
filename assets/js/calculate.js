const unitInput = document.querySelectorAll(".unit-input");
const type = document.querySelector(".type");
unitInput.forEach((e) => {
  e.addEventListener("input", () => {
    if (e.checked) {
      type.innerHTML = e.nextElementSibling.innerHTML;
    }
  });
});
const weightInput = document.querySelectorAll(".weight-input");
const type2 = document.querySelector(".type2");
weightInput.forEach((e) => {
  e.addEventListener("input", () => {
    if (e.checked) {
      type2.innerHTML = e.nextElementSibling.innerHTML;
    }
  });
});

const recommendItem = document.querySelector(".recommend__item");
const sizeOutput = document.querySelector(".size-output");
sizeOutput.innerHTML = "87%";
recommendItem.style.width = sizeOutput.innerHTML;
const recommendItem2 = document.querySelector(".recommend2__item");
const sizeOutput2 = document.querySelector(".size2-output");
sizeOutput2.innerHTML = "8%";
recommendItem2.style.width = sizeOutput2.innerHTML;

const stepBtn = document.querySelectorAll(".next__btn");
const prevBtn = document.querySelectorAll(".prev__btn ");

stepBtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.classList.add("step-hide");
    e.parentElement.parentElement.nextElementSibling.classList.add(
      "step-visible"
    );
  });
});
prevBtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.previousElementSibling.classList.add(
      "step-visible"
    );
    e.parentElement.parentElement.previousElementSibling.classList.remove(
      "step-hide"
    );
    e.parentElement.parentElement.classList.remove("step-visible");
  });
});
