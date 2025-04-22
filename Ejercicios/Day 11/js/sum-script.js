
function calculation() {
  let o = document.getElementById("result");
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  o.value = parseFloat(num1.value) + parseFloat(num2.value);
}