function alta() {
  consultaCategorias()

  document.querySelector('#btnalta').addEventListener('click', altaPelicula)
  document.querySelector('#portada').addEventListener('change', previsualizarImagen)
}
