const tabs = document.querySelectorAll(".returns-tab");
const content = document.querySelectorAll(".return");

tabs.forEach((e) => {
  e.addEventListener("click", () => {
    tabs.forEach((el) => {
      if (el.classList.contains("returns-tab")) {
        el.classList.remove("tab-active");
      }
    });
    e.classList.add("tab-active");
    const btn = e.dataset.btn;
    console.log(btn);
    content.forEach((c) => {
      c.classList.remove("return-active");
      if (c.dataset.content === btn) {
        c.classList.add("return-active");
      }
    });
  });
});
