import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [chiste, setChiste] = useState('')

  // Función para cargar usuarios aleatorios
  useEffect(() => {
    const apiUsuarios = "https://randomuser.me/api/?results=3";

    fetch(apiUsuarios)
      .then((resp) => resp.json())
      .then((data) => {
        setUsuarios(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // Función para obtener chiste
  const obtenerChiste = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((data) => setChiste(data.value))
      .catch((error) => console.log(error));
  }

  // Mostrar primer chiste al cargar
  useEffect(() => {
    obtenerChiste()
  }, [])

  return (
    <div className="App">
      <h3>Empleados del mes:</h3>
      {usuarios.length > 0 ? (
        usuarios.map((usuario) => (
          <div key={usuario.email}>
            <p>Nombre: {usuario.name.first} {usuario.name.last}</p>
            <img src={usuario.picture.large} alt={`${usuario.name.first} ${usuario.name.last}`} />
          </div>
        ))
      ) : (
        <p>Cargando usuarios...</p>
      )}

      <hr />

      <h3>Chistecillo malo de Chuck:</h3>
      <span>{chiste}</span>
      <br />
      <button onClick={obtenerChiste}>Otro chiste</button>
    </div>
  )
}

export default App
