const sortTop = document.querySelectorAll(".sort-top");
sortTop.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("data-visible");
    e.childNodes[3].classList.toggle("rotate");
  });
});

function noDigits(event) {
  if ("1234567890-+/*(){}[].,<>?=`~!@#$%^_&".indexOf(event.key) != -1)
    event.preventDefault();
}
