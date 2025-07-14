const btnMultiplicar = document.getElementById('multiplicar')
const inputDenominador = document.getElementById('denominador')
const tablaResultado = document.getElementById('resultado')

// btnMultiplicar.addEventListener('click', () => {
//     const numero = parseInt(inputDenominador.value)
//     tablaResultado.innerHTML = ''

//     if (!isNaN(numero)) {
//         for (let i = 1; i <= 10; i++) {
//             const fila = document.createElement('tr')
//             fila.innerHTML = `<td>${numero} x ${i} = ${numero * i}</td>`
//             tablaResultado.appendChild(fila)
//         }
//     }
// })


// No me gustaba que se viera la caja de resultados vacía y he hecho una versión alternativa en que se muestra solo cuando contiene resultados
tablaResultado.classList.add('oculto')

btnMultiplicar.addEventListener('click', () => {
    const numero = parseInt(inputDenominador.value)
    tablaResultado.innerHTML = ''

    if (!isNaN(numero)) {
        tablaResultado.classList.remove('oculto')

        for (let i = 1; i <= 10; i++) {
            const fila = document.createElement('tr')
            fila.innerHTML = `<td>${numero} x ${i} = ${numero * i}</td>`
            tablaResultado.appendChild(fila)
        }
    } else {
        tablaResultado.classList.add('oculto')
    }
})



const btnCambioColor = document.getElementById('cambiocolor')
const inputColor = document.getElementById('color')
const articleJs2 = document.getElementById('js2')

btnCambioColor.addEventListener('click', () => {
    articleJs2.style.backgroundColor = inputColor.value
})

// Extra del ejercicio 2 para mejorar el contraste al usar fondos oscuros
const tituloJs2 = articleJs2.querySelector('h3')

btnCambioColor.addEventListener('click', () => {
    const color = inputColor.value
    articleJs2.style.backgroundColor = color

    const r = parseInt(color.substr(1, 2), 16)
    const g = parseInt(color.substr(3, 2), 16)
    const b = parseInt(color.substr(5, 2), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000

    tituloJs2.style.color = yiq < 128 ? 'white' : 'black'
})



const helices = document.querySelectorAll('#js3 img')

helices.forEach(helice => {
    helice.addEventListener('click', () => {
        helice.classList.remove('girar')

        void helice.offsetWidth

        helice.classList.add('girar')
    })
})



const btnValidar = document.getElementById('validar')

btnValidar.addEventListener('click', () => {
    const texto = document.getElementById('texto').value.trim()
    const numero = document.getElementById('numero').value.trim()
    const radioSeleccionado = document.querySelector('input[name="radio"]:checked').value
    const areaDatos = document.getElementById('datos')

    if (texto === '') {
        alert('El campo "texto" está vacío.')
        return
    }

    if (numero === '' || isNaN(numero)) {
        alert('El campo "número" está vacío o no es numérico.')
        return
    }

    areaDatos.value = `${texto} / ${numero} / ${radioSeleccionado}`
})




const btnEvaluar = document.getElementById('evaluar')

btnEvaluar.addEventListener('click', () => {
    const valorNota = document.getElementById('nota').value.trim()
    const campoResultado = document.getElementById('result')

    if (valorNota === '' || isNaN(valorNota)) {
        campoResultado.value = 'nota no numérica'
        return
    }

    const nota = parseFloat(valorNota)

    if (nota < 0 || nota > 10) {
        campoResultado.value = 'nota fuera de rango'
    } else if (nota === 10) {
        campoResultado.value = 'matricula'
    } else if (nota >= 9) {
        campoResultado.value = 'excelente'
    } else if (nota >= 7) {
        campoResultado.value = 'notable'
    } else if (nota >= 5) {
        campoResultado.value = 'aprobado'
    } else if (nota < 5) {
        campoResultado.value = 'suspendido'
    }
})