export function suma(cifra1, cifra2) {
  let resultado = cifra1 + cifra2;
  return resultado;
}

export function resta(cifra1, cifra2) {
  let resultado = cifra1 - cifra2; 
  return resultado;
}

export function multiplicacion(cifra1, cifra2) {
  let resultado = cifra1 * cifra2; 
  return resultado;
}

export function division(cifra1, cifra2) {
  let resultado = cifra1 / cifra2; 
  return resultado;
}

export function potencia(cifra1, cifra2) {
  let resultado = cifra1 ** cifra2; 
  return resultado;
}

export function raiz(cifra1, cifra2) {
  let resultado = cifra1 ** (1/cifra2); 
  return resultado;
}

export function calcular(operacion, cifra1, cifra2) {
  switch (operacion) {
    case "suma":
      return suma(cifra1, cifra2);
    case "resta":
      return resta(cifra1, cifra2);
    case "multiplicacion":
      return multiplicacion(cifra1, cifra2);
    case "division":
      return division(cifra1, cifra2);
    case "potencia":
      return potencia(cifra1, cifra2);
    case "raiz":
      return raiz(cifra1, cifra2);
    default:
      return "Operación no válida";
  }
}