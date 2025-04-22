// Array de la fototeca (simulamos las imágenes que tendrías en la carpeta 'img')
let arrayFototeca = ['casa1.jpg', 'casa2.jpg', 'casa3.jpg', 'casa4.jpg', 'casa5.jpg', 'casa6.jpg', 'casa7.jpg','casa8.jpg'];
let arrayGaleria = []; 
let indiceFotoActual = 0;

// Función para cargar la fototeca
function cargarFototeca() {
    for (let i = 0; i < arrayFototeca.length; i++) {
        let img = document.createElement('img');
        img.setAttribute('src', 'img/' + arrayFototeca[i]);
        img.setAttribute('alt', arrayFototeca[i]);
        img.ondblclick = function() {
            anyadirGaleria(arrayFototeca[i]);
        };
        document.querySelector('#fotos').appendChild(img);
    }
}

// Función para añadir fotos a la galería
function anyadirGaleria(nombreFoto) {
    if (arrayGaleria.includes(nombreFoto)) {
        alert('Esta foto ya está en la galería');
        return;
    }
    arrayGaleria.push(nombreFoto);
    guardarGaleriaStorage();
    crearGaleria();
}

// Función para crear la galería (con nodos)
function crearGaleria() {
    let galeria = document.querySelector('#galeria');
    galeria.innerHTML = '';

    for (let i = 0; i < arrayGaleria.length; i++) {
        let contenedor = document.createElement('div');
        contenedor.classList.add('imagenesGaleria');
        contenedor.style.position = 'relative';
        contenedor.style.display = 'inline-block';

        // Imagen principal
        let imagen = document.createElement('img');
        imagen.setAttribute('src', 'img/' + arrayGaleria[i]);
        imagen.classList.add('imagenGaleria');
        imagen.onclick = function() {
            abrirLightbox(i);
        };

        // Cruz para borrar
        let borrar = document.createElement('img');
        borrar.setAttribute('src', 'img/borrar.png');
        borrar.classList.add('borrar');
        borrar.style.width = '20px';
        borrar.style.height = '20px';
        borrar.style.position = 'absolute';
        borrar.style.top = '5px';
        borrar.style.right = '5px';
        borrar.style.cursor = 'pointer';
        borrar.onclick = function() {
            borrarFotoGaleria(i);
        };

        contenedor.appendChild(imagen);
        contenedor.appendChild(borrar);
        galeria.appendChild(contenedor);
    }
}

// Función para borrar fotos de la galería
function borrarFotoGaleria(indice) {
    arrayGaleria.splice(indice, 1);
    guardarGaleriaStorage();
    crearGaleria();
}

// Función para guardar la galería en localStorage
function guardarGaleriaStorage() {
    if (arrayGaleria.length > 0) {
        let texto = arrayGaleria.join('//');
        localStorage.setItem('galeria', texto);
    } else {
        localStorage.removeItem('galeria');
    }
}

// Función para recuperar la galería desde el localStorage
function recuperarGaleriaStorage() {
    let texto = localStorage.getItem('galeria');
    if (texto !== null) {
        arrayGaleria = texto.split('//');
        crearGaleria();
    }
}

// LIGHTBOX: abrir, cerrar, siguiente, anterior
function abrirLightbox(indice) {
    indiceFotoActual = indice;
    document.querySelector('#fotoLightbox').setAttribute('src', 'img/' + arrayGaleria[indiceFotoActual]);
    document.querySelector('#lightbox').style.display = 'flex';
}

function cerrarLightbox() {
    document.querySelector('#lightbox').style.display = 'none';
}

function siguienteFoto(event) {
    event.stopPropagation();
    indiceFotoActual = (indiceFotoActual + 1) % arrayGaleria.length;
    document.querySelector('#fotoLightbox').setAttribute('src', 'img/' + arrayGaleria[indiceFotoActual]);
}

function anteriorFoto(event) {
    event.stopPropagation();
    indiceFotoActual = (indiceFotoActual - 1 + arrayGaleria.length) % arrayGaleria.length;
    document.querySelector('#fotoLightbox').setAttribute('src', 'img/' + arrayGaleria[indiceFotoActual]);
}

// Función para vaciar toda la galería
function vaciarGaleria() {
  arrayGaleria = [];
  localStorage.removeItem('galeria');
  crearGaleria();
}

// EVENTOS de las flechas y el cierre del lightbox
document.addEventListener('DOMContentLoaded', function() {
    cargarFototeca();
    recuperarGaleriaStorage();

    document.querySelector('#lightbox').onclick = cerrarLightbox;
    document.querySelector('#siguiente').onclick = siguienteFoto;
    document.querySelector('#anterior').onclick = anteriorFoto;
    document.querySelector('#boton-vaciar').onclick = vaciarGaleria;
});
