const sidebar = document.querySelector(".sidebar-account");
filterBtn.addEventListener("click", () => {
  if (filter.classList.contains("filter-active")) {
    sidebar.classList.add("sidebar-hide");
  } else {
    sidebar.classList.remove("sidebar-hide");
  }
});
