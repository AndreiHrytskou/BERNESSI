const tabs = document.querySelector(".returns-tabs");
const content = document.querySelectorAll(".return");

const changeClass = (el) => {
  //   for (let i = 0; i < tabs.children.length; i++) {
  //     tabs.children[i].classList.remove("tab-active");
  //   }
  //   el.classList.add("tab-active");
  console.log(tabs);
};

tabs.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab) {
      content[i].classList.add("active");
    }
  }
});
