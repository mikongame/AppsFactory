let operacion = null;

document.getElementById("suma").addEventListener("click", () => operacion = "+");
document.getElementById("resta").addEventListener("click", () => operacion = "-");
document.getElementById("multiplicacion").addEventListener("click", () => operacion = "*");
document.getElementById("division").addEventListener("click", () => operacion = "/");

document.getElementById("calcular").addEventListener("click", () => {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  let resultado = "";

  if (isNaN(n1) || isNaN(n2)) {
    resultado = "Introduce números válidos";
  } else if (!operacion) {
    resultado = "Selecciona una operación";
  } else {
    switch (operacion) {
      case "+": resultado = n1 + n2; break;
      case "-": resultado = n1 - n2; break;
      case "*": resultado = n1 * n2; break;
      case "/": resultado = n2 !== 0 ? (n1 / n2).toFixed(2) : "Error: división por cero"; break;
    }
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});

