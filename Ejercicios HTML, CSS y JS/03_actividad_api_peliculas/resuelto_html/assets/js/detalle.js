async function detalle(id) {
    try {
        const respuesta = await fetch(`${API_PELICULAS}/${id}`)
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)

        const pelicula = await respuesta.json()
        console.log('Película recibida:', pelicula)
        
        document.querySelector('.card-title').textContent = pelicula.titulo
        document.querySelector('#detalle-categoria').textContent = `Categoría: ${pelicula.categoria}`
        document.querySelector('#detalle-direccion').textContent = `Dirección: ${pelicula.direccion}`
        document.querySelector('#detalle-anio').textContent = `Año: ${pelicula.anio}`
        document.querySelector('#detalle-sinopsis').textContent = pelicula.sinopsis
        document.querySelector('#previsualizar').src = pelicula.img

    } catch (error) {
        console.error('Error al cargar detalle:', error)
        window.alert('No se pudo cargar la película.')
    }
}