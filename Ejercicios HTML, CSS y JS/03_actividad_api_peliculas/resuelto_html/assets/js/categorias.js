async function consultaCategorias() {
    try {
        const respuesta = await fetch(API_CATEGORIAS)
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)

        const categorias = await respuesta.json()

        const select = document.querySelector('#idcategoria')
        select.innerHTML = '<option value="0" disabled selected>Seleccione una categoría</option>'

        categorias.forEach(categoria => {
            select.insertAdjacentHTML('beforeend',
                `<option value="${categoria.id}">${categoria.nombre}</option>`)
        })
    } catch (error) {
        console.error('Error al cargar categorías:', error)
        window.alert('No se pudieron cargar las categorías.')
    }
}
