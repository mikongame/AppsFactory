import {holaLib, adiosLib} from "./lib/externo.js"
import * as calculator from "./lib/calculator.js"
holaLib()
adiosLib()
console.log(calculator.calcular("suma", 3, 4))

const resultados = [];

resultados.push(calculator.calcular("suma", 10, 5));
resultados.push(calculator.calcular("resta", 20, 8));
resultados.push(calculator.calcular("multiplicacion", 4, 6));
resultados.push(calculator.calcular("division", 12, 4));
resultados.push(calculator.calcular("potencia", 2, 3));

console.log("Resultados de las operaciones:");
console.log(resultados);