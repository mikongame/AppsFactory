const datos = []
function anadeDatos(entrada) {
  datos.push(entrada)
}

anadeDatos("Joe Bananas")
anadeDatos("Crazy Gallo")
anadeDatos("John Gotti")
anadeDatos("Vincent Gigante")
console.log(datos)
datos.pop()
console.log(datos)

datos.forEach(function(dato) {
  console.log(dato)
})