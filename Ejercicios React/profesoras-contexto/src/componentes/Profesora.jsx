import React, { useContext } from 'react';
import Contexto from '../contexto/Contexto';

import marta from '../assets/img/marta.PNG';
import grace from '../assets/img/grace.PNG';
import aimee from '../assets/img/aimee.PNG';

function Profesora() {
  const { profesora } = useContext(Contexto);

  const fotos = {
    'marta.PNG': marta,
    'grace.PNG': grace,
    'aimee.PNG': aimee
  };

  return (
    <div className='profesora'>
      <h2>{profesora.boton1}:</h2>
      <div className='foto'>
        <img src={fotos[profesora.foto]} alt={profesora.nombre} />
      </div>
      <div className='nombre'>
        {profesora.nombre}
      </div>
    </div>
  );
}

export default Profesora;
