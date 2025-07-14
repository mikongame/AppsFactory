// Cargar componente o sección de inicio
cargarSeccion('inicio')

// Activar enlaces estáticos (barra de navegación)
let enlaces = document.querySelectorAll('.navbar-brand, .nav-link')

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(ev) {
        let seccion = ev.target.getAttribute('data-seccion')
        if (seccion) { // solo si tiene un data-seccion definido
            cargarSeccion(seccion)
        }
    })
})

// Función para cargar cada uno de los componentes de la aplicación SPA
function cargarSeccion(seccion, id = null) {
    fetch(`html/${seccion}.html`)
    .then(response => response.text())
    .then(seccionhtml => {
        document.querySelector('#contenido').innerHTML = seccionhtml
        iniciarComponente(seccion, id)
    })
}

// Función para iniciar el comportamiento de cada componente
function iniciarComponente(seccion, id = null) {
    switch (seccion) {
        case 'consulta':
            consulta()
            break

        case 'alta':
            alta()
            break

        case 'detalle':
            detalle(id)
            break

        case 'mantenimiento':
            mantenimiento(id)
            break

        default:
            break
    }
}
