let nombre = "Miguel"
const apellido = "García"
console.log(nombre, apellido);


nombre = "Alejandro"
// const apellido = "Melgar"
console.log(nombre, apellido);

let cifra1 = 7;
let cifra2 = 13;

function suma(cifra1, cifra2) {
  let resultado = cifra1 + cifra2;
  return resultado;
}

function resta(cifra1, cifra2) {
  let resultado = cifra1 - cifra2; 
  return resultado;
}

function multiplicacion(cifra1, cifra2) {
  let resultado = cifra1 * cifra2; 
  return resultado;
}

function division(cifra1, cifra2) {
  let resultado = cifra1 / cifra2; 
  return resultado;
}

function potencia(cifra1, cifra2) {
  let resultado = cifra1 ** cifra2; 
  return resultado;
}

function raiz(cifra1, cifra2) {
  let resultado = cifra1 ** (1/cifra2); 
  return resultado;
}

function dobleOperacion(cifra1, cifra2) {
  return suma(cifra1, cifra2) - 2;
}

console.log(suma(cifra1, cifra2));
console.log(resta(cifra1, cifra2))
console.log(multiplicacion(cifra1, cifra2));
console.log(division(cifra1, cifra2))
console.log(potencia(cifra1, cifra2))
console.log(raiz(cifra1, cifra2))
console.log(dobleOperacion(cifra1, cifra2))

function calcular(operacion, cifra1, cifra2) {
  if (operacion === suma)
    return suma(cifra1, cifra2);
  if (operacion === resta)
    return resta(cifra1, cifra2);
  if (operacion === multiplicacion)
    return multiplicacion(cifra1, cifra2);
  if (operacion === division)
    return division(cifra1, cifra2);
  if (operacion === potencia)
    return potencia(cifra1, cifra2);
  if (operacion === raiz)
    return raiz(cifra1, cifra2);
}

console.log(calcular(suma, cifra1, cifra2))
console.log(calcular(resta, cifra1, cifra2))
console.log(calcular(multiplicacion, cifra1, cifra2))
console.log(calcular(division, cifra1, cifra2))
console.log(calcular(potencia, cifra1, cifra2))
console.log(calcular(raiz, cifra1, cifra2))


function calcular(operacion, cifra1, cifra2) {
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

console.log(calcular("suma", cifra1, cifra2));
console.log(calcular("resta", cifra1, cifra2));
console.log(calcular("multiplicacion", cifra1, cifra2));
console.log(calcular("division", cifra1, cifra2));
console.log(calcular("potencia", cifra1, cifra2));
console.log(calcular("raiz", cifra1, cifra2));
console.log(calcular("modulo", cifra1, cifra2));

for (let i = 1; i <= 5; i++) {
  console.log("Número con for:", i);
}

let j = 1;
while (j <= 5) {
  console.log("Número con while:", j);
  j++;
}

let k = 1;
do {
  console.log("Número con do while:", k);
  k++;
} while (k <= 5);



const array = ["Manzana", "Banana", "Cereza", "Melocoton", "Pera", "Sandia", "Melon", "Frambuesa", "Arandano", "Piña"];

for (let i = 0; i < array.length; i++) {
  console.log("Con for:", array[i]);
}

let x = 0;
while (x < array.length) {
  console.log("Con while:", array[x]);
  x++;
}

let y = 0;
do {
  console.log("Con do while:", array[y]);
  y++;
} while (y < array.length);

for (const fruta of array) {
  console.log("Con for of:", fruta);
}

array.push("Fresa")
console.log(array);

array.pop()
console.log(array);

array.shift()
console.log(array);

array.unshift("Manzana")
console.log(array);

console.log(array.length);

console.log(array.indexOf("Cereza"));


let elementToDuplicate = array[7];

array.push(elementToDuplicate);

let positions = [];
array.forEach((value, index) => {
    if (value === elementToDuplicate) {
        positions.push(index);
    }
});

console.log(array);
console.log(`Elemento duplicado: ${elementToDuplicate}, Posiciones: ${positions.join(", ")}`);

array.unshift(elementToDuplicate)

let positions2 = [];
array.forEach((value, index) => {
    if (value === elementToDuplicate) {
        positions2.push(index);
    }
});

console.log(array);
console.log(`Elemento duplicado: ${elementToDuplicate}, Posiciones: ${positions2.join(", ")}`);



let persona = {
  nombre: "Miguel",
  apellido: "García",
  edad: 29,
  altura: 1.83,
  direccion: {
      calle: "Passatge del Mas Pico",
      numero: 123,
      ciudad: "Sant Vicenç dels Horts",
      provincia: "Barcelona",
      pais: "España",
      codigoPostal: "08620"
  }
};

console.log(persona);
