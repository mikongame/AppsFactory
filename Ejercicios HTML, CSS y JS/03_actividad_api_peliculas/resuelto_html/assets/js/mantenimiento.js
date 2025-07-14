async function mantenimiento(id) {
    const alerta = document.querySelector('.alert-warning')

    try {
        const respuesta = await fetch(`${API_PELICULAS}/${id}`)
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)

        const pelicula = await respuesta.json()
        console.log('Película recibida:', pelicula)

        if (!pelicula.id) {
            alerta.classList.remove('d-none')
            return
        } else {
            alerta.classList.add('d-none')
        }

        await consultaCategorias()

        document.querySelector('#titulo').value = pelicula.titulo
        document.querySelector('#idcategoria').value = pelicula.idcategoria
        document.querySelector('#direccion').value = pelicula.direccion
        document.querySelector('#anio').value = pelicula.anio
        document.querySelector('#sinopsis').value = pelicula.sinopsis
        document.querySelector('#previsualizar').src = pelicula.img

        // Limpiar y volver a activar eventos de botones
        const btnModificar = document.querySelector('.btn-warning')
        const btnBorrar = document.querySelector('.btn-danger')
        const nuevoBtnModificar = btnModificar.cloneNode(true)
        const nuevoBtnBorrar = btnBorrar.cloneNode(true)
        btnModificar.replaceWith(nuevoBtnModificar)
        btnBorrar.replaceWith(nuevoBtnBorrar)

        nuevoBtnModificar.addEventListener('click', ev => {
            ev.preventDefault()
            modificarPelicula(id)
        })

        nuevoBtnBorrar.addEventListener('click', ev => {
            ev.preventDefault()
            borrarPelicula(id)
        })

    } catch (error) {
        console.error('Error en mantenimiento():', error)
        window.alert('No se pudo cargar la película.')
    }
}

/* ----------------------------------------------------------- */

async function modificarPelicula(id) {
    const titulo = document.querySelector('#titulo').value.trim()
    const idcategoria = document.querySelector('#idcategoria').value
    const direccion = document.querySelector('#direccion').value.trim()
    const anio = document.querySelector('#anio').value.trim()
    const sinopsis = document.querySelector('#sinopsis').value.trim()
    const portada = document.querySelector('#portada').files[0]

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
        if (portada.size > 300000) {
            errores.push('La imagen no debe superar los 300Kb.')
        }
    }

    if (errores.length > 0) {
        window.alert(errores.join('\n'))
        return
    }

    const datos = new FormData()
    datos.append('titulo', titulo)
    datos.append('idcategoria', idcategoria)
    datos.append('direccion', direccion)
    datos.append('anio', anio)
    datos.append('sinopsis', sinopsis)
    if (portada) datos.append('img', portada)

    try {
        const respuesta = await fetch(`${API_PELICULAS}/${id}`, { method: 'PUT', body: datos })
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)

        window.alert('Película modificada correctamente')
        cargarSeccion('consulta')

    } catch (error) {
        console.error('Error al modificar película:', error)
        window.alert('No se pudo modificar la película.')
    }
}

/* ----------------------------------------------------------- */

async function borrarPelicula(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta película?')) {
        return
    }

    try {
        const respuesta = await fetch(`${API_PELICULAS}/${id}`, { method: 'DELETE' })
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)

        window.alert('Película eliminada correctamente')
        cargarSeccion('consulta')

    } catch (error) {
        console.error('Error al eliminar película:', error)
        window.alert('No se pudo eliminar la película.')
    }
}
