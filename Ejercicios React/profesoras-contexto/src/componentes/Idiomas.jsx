import React, { useContext } from 'react';
import Contexto from '../contexto/Contexto';

import banderaEs from '../assets/img/spain.jpg';
import banderaFr from '../assets/img/francia.png';
import banderaUk from '../assets/img/uk.png';

function Idiomas() {
  const { setIdioma, profesora } = useContext(Contexto);

  // Detectar el idioma activo según el nombre de la profesora
  const idiomaActual = profesora.nombre === "Marta Ríos" ? 0 :
                       profesora.nombre === "Grace Trembley" ? 1 : 2;

  return (
    <div className='idiomas'>
      <div
        className={`bandera ${idiomaActual === 0 ? 'activo' : ''}`}
        onClick={() => setIdioma(0)}
      >
        <img src={banderaEs} alt="Español" />
      </div>
      <div
        className={`bandera ${idiomaActual === 1 ? 'activo' : ''}`}
        onClick={() => setIdioma(1)}
      >
        <img src={banderaUk} alt="Inglés" />
      </div>
      <div
        className={`bandera ${idiomaActual === 2 ? 'activo' : ''}`}
        onClick={() => setIdioma(2)}
      >
        <img src={banderaFr} alt="Francés" />
      </div>
    </div>
  );
}

export default Idiomas;
