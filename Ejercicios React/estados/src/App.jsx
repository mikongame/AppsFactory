import React, { useState } from 'react'
import './App.css'

const App = () => {
  const peliculas = [
    { titulo: 'Apocalypto', direccion: 'Mel Gibson' },
    { titulo: 'La Milla Verde', direccion: 'Frank Darabont' },
    { titulo: 'El resplandor', direccion: 'Stanley Kubrick' }
  ]

  const [mensaje, setMensaje] = useState()
  const [contador, setContador] = useState(0)

  const datosPelicula = () => {
    let texto = (
      <h2>
        La dirección de la película <span className="titulo">{peliculas[contador].titulo}</span> corresponde a{' '}
        <span className="direccion">{peliculas[contador].direccion}</span>
      </h2>
    )
    setMensaje(texto)
    setContador((contador + 1) % peliculas.length) // forma más elegante
  }

  return (
    <div className="actividades peliculas">
      <button onClick={datosPelicula}>Ver Siguiente</button>
      <div>{mensaje}</div>
    </div>
  )
}

export default App
