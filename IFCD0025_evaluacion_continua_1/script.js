document.addEventListener("DOMContentLoaded", () => {
  const btnValidar = document.getElementById("validar")
  const inputTexto = document.getElementById("texto")
  const inputNumeros = document.getElementById("numeros")
  const checks = document.querySelectorAll('input[name="checks"]')
  const resultado = document.getElementById("resultado")

  btnValidar.addEventListener("click", () => {
    let valido = true

    if (!inputTexto.value.trim()) {
      alert("El campo 'texto' es obligatorio.")
      inputTexto.style.backgroundColor = "yellow"
      valido = false
    } else {
      inputTexto.style.backgroundColor = "white"
    }

    if (!inputNumeros.value || isNaN(inputNumeros.value)) {
      alert("El campo 'numeros' debe ser un número.")
      inputNumeros.style.backgroundColor = "yellow"
      valido = false
    } else {
      inputNumeros.style.backgroundColor = "white"
    }

    if (valido) {
      const nombre = inputTexto.value.trim()
      const numero = inputNumeros.value.trim()
      const seleccionados = []

      checks.forEach(check => {
        if (check.checked) {
          seleccionados.push(check.value)
        }
      })

      const mensaje = `${nombre} / ${numero} / ${seleccionados.join(" ")}`

      resultado.textContent = mensaje
    }
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const combo = document.getElementById("selector-color")
  const rightBox = document.querySelector(".right-box")

  combo.addEventListener("change", (e) => {
    const colorSeleccionado = e.target.value
    if (colorSeleccionado) {
      rightBox.style.backgroundColor = colorSeleccionado
    }
  })
})
