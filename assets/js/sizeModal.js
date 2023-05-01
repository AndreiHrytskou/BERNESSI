document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.querySelector(".size__modal");
  const sizeTable = document.querySelector(".size__table");
  const input = document.querySelectorAll(".size-input-modal");
  const table = document.querySelectorAll(".table__cm");
  const tableClose = document.querySelector(".table__close");

  const div = document.createElement("div");
  modalBtn.addEventListener("click", () => {
    document.body.append(div);
    div.className = "background";
    sizeTable.classList.add("table__show");
  });
  tableClose.addEventListener("click", () => {
    div.remove();
    sizeTable.classList.remove("table__show");
  });
  div.addEventListener("click", () => {
    div.remove();
    sizeTable.classList.remove("table__show");
  });
  input.forEach((e) => {
    input[0].checked = true;
    e.addEventListener("input", () => {
      if (e.checked == true) {
        table.forEach((t) => {
          if (e.dataset.input == t.dataset.table) {
            t.classList.add("table__visible");
          } else {
            t.classList.remove("table__visible");
          }
        });
      }
      //  table.forEach((t) => {
      //    if (e.checked.dataset.input == t.dataset.table) {
      //      t.classList.add("table__visible");
      //    }
      //  });
    });
  });
});
