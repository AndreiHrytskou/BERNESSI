function noDigits(event) {
  if ("1234567890-+/*(){}[].,<>?=`~!@#$%^_&".indexOf(event.key) != -1)
    event.preventDefault();
}

let inputPhone = document.getElementById("phone");
inputPhone.oninput = () => phoneMask(inputPhone);
function phoneMask(inputEl) {
  let patStringArr = "+_(___)___-__-__".split("");
  let arrPush = [1, 3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
  let val = inputEl.value;
  let arr = val.replace(/\D+/g, "").split("").splice(0);
  let n;
  let ni;
  arr.forEach((s, i) => {
    n = arrPush[i];
    patStringArr[n] = s;
    ni = i;
  });
  arr.length < 10
    ? (inputEl.style.color = "red")
    : (inputEl.style.color = "black");
  inputEl.value = patStringArr.join("");
  n
    ? inputEl.setSelectionRange(n + 1, n + 1)
    : inputEl.setSelectionRange(17, 17);
}
