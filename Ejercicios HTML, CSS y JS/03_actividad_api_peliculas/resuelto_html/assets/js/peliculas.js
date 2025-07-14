function consultaPeliculas() {
    // recuperar los valores que puedan tener los filtros de busqueda (titulo y categoría)
    let filtro = document.querySelector('#filtro').value.trim()
    let categoria = document.querySelector('#idcategoria').value 

    let api = API_PELICULAS

    if (filtro || categoria > 0) {
        api += `?categoria=${categoria}&filtro=${filtro}`
    }

    // utilizar la API fetch para consultar todas las películas y para cada película confeccionar su correspondiente ficha
    fetch(api)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            throw (`Algo fue malamente: ${respuesta.status}`)
        } 
    })
    .then(peliculas => {
        let fichas = ''

        peliculas.map(pelicula => {
            fichas += `<div class="card m-2 mb-5">`
            fichas += `<img class="card-img-top" src="${pelicula.img}">`
            fichas += `<div class="card-body">`
            fichas += `<h4 class="card-title">${pelicula.titulo}</h4>`
            fichas += `<p class="card-text"></p>`
            fichas += `<p class="card-text">Dirección: ${pelicula.direccion}</p>`
            fichas += `<p class="card-text"><small class="text-muted">Año: ${pelicula.anio}</small></p>`
            fichas += `<span onclick="cargarSeccion('detalle', ${pelicula.id})" class="btn btn-outline-primary btn-block">Ver más...</span>;`
            fichas += `<span onclick="cargarSeccion('mantenimiento', ${pelicula.id})" class="btn btn-outline-primary btn-block">Mantenimiento</span>`
            fichas += `</div>`
            fichas += `</div>`
        })

        console.log('ID que se pasa a detalle:', pelicula.id)

        document.querySelector('.peliculas').innerHTML = fichas

        // mostrar la alerta si no hay películas
        const alerta = document.querySelector('.alert')
        if (peliculas.length === 0) {
            alerta.classList.remove('d-none')
        } else {
            alerta.classList.add('d-none')
        }

    })
    .catch(error => window.alert(error))
}

/* ----------------------------------------------------------- */

// FUNCION para alta de películas
function altaPelicula() {
    // 1. Recoger los datos del formulario
    const titulo = document.querySelector('#titulo').value.trim()
    const idcategoria = document.querySelector('#idcategoria').value
    const direccion = document.querySelector('#direccion').value.trim()
    const anio = document.querySelector('#anio').value.trim()
    const sinopsis = document.querySelector('#sinopsis').value.trim()
    const portada = document.querySelector('#portada').files[0]
    
    // 2. Validar los datos
    let errores = []

    if (!titulo) errores.push('El título es obligatorio.')
    if (idcategoria == 0) errores.push('Se debe seleccionar una categoría.')
    if (!direccion) errores.push('La dirección es obligatoria.')
    if (!anio || anio < 1930 || anio > 2100) errores.push('El año debe estar entre 1930 y 2100.')
    if (!sinopsis) errores.push('La sinopsis es obligatoria.')

    if (portada) {
        if (!['image/jpeg', 'image/png'].includes(portada.type)) {
            errores.push('La imagen debe ser JPG o PNG.')
        }
        if (portada.size > 300000) { // 300 KB
            errores.push('La imagen no debe superar los 300Kb.')
        }
    }

    const alerta = document.querySelector('#alerta')
    alerta.innerHTML = ''
    if (errores.length > 0) {
        errores.forEach(error => {
            alerta.innerHTML += `<div>${error}</div>`
        })
        alerta.classList.remove('d-none')
        return
    } else {
        alerta.classList.add('d-none')
    }

    // 3. Crear FormData
    const datos = new FormData()
    datos.append('titulo', titulo)
    datos.append('idcategoria', idcategoria)
    datos.append('direccion', direccion)
    datos.append('anio', anio)
    datos.append('sinopsis', sinopsis)
    if (portada) {
        datos.append('img', portada)
    }

    // 4. Enviar alta a la API
    const opciones = {
        method: 'POST',
        body: datos
    }

    fetch(API_PELICULAS, opciones)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            return respuesta.json().then(error => { throw error })
        }
    })
    .then(resultado => {
        window.alert('Película dada de alta correctamente')
        limpiarFormularioAlta()
    })
    .catch(error => {
        alerta.innerHTML = ''
        if (Array.isArray(error)) {
            error.forEach(err => {
                alerta.innerHTML += `<div>${err}</div>`
            })
        } else {
            alerta.innerHTML = `<div>Error desconocido: ${error}</div>`
        }
        alerta.classList.remove('d-none')
    })
}

/* ----------------------------------------------------------- */

// FUNCION para previsualizar la imagen seleccionada
function previsualizarImagen() {
    const archivo = document.querySelector('#portada').files[0]
    const previsualizar = document.querySelector('#previsualizar')

    if (archivo) {
        const lector = new FileReader()
        lector.onload = function(e) {
            previsualizar.src = e.target.result
        }
        lector.readAsDataURL(archivo)
    } else {
        previsualizar.src = 'assets/img/sinportada.jpg'
    }
}

/* ----------------------------------------------------------- */

// FUNCION extra para limpiar el formulario tras dar de alta
function limpiarFormularioAlta() {
    document.querySelector('#titulo').value = ''
    document.querySelector('#idcategoria').value = '0'
    document.querySelector('#direccion').value = ''
    document.querySelector('#anio').value = ''
    document.querySelector('#sinopsis').value = ''
    document.querySelector('#portada').value = ''
    document.querySelector('#previsualizar').src = 'assets/img/sinportada.jpg'
}
