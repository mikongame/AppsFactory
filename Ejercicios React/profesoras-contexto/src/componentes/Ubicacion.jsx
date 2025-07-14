import React, { useContext } from 'react';
import Contexto from '../contexto/Contexto';

function Ubicacion() {
  const { profesora } = useContext(Contexto);

  return (
    <div className='ubicacion'>
      <h2>{profesora.boton2}:</h2>
      <div className='direccion'>
        {profesora.direccion}
      </div>
    </div>
  );
}

export default Ubicacion;
