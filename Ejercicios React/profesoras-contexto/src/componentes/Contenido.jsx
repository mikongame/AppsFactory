import React, { useContext, useState } from 'react';
import Contexto from '../contexto/Contexto';
import Profesora from './Profesora';
import Ubicacion from './Ubicacion';

function Contenido() {
  const { profesora } = useContext(Contexto);
  const [mostrarProfesora, setMostrarProfesora] = useState(true);

  return (
    <>
      <h1>{profesora.titulo}</h1>
      <h2>{profesora.texto}</h2>
      
      <div className='botones'>
        <button
          onClick={() => setMostrarProfesora(true)}
          className={mostrarProfesora ? 'activo' : ''}
        >
          {profesora.boton1}
        </button>
        <button
          onClick={() => setMostrarProfesora(false)}
          className={!mostrarProfesora ? 'activo' : ''}
        >
          {profesora.boton2}
        </button>
      </div>
      {mostrarProfesora ? <Profesora /> : <Ubicacion />}
    </>
  );
}

export default Contenido;
