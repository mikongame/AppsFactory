import { useEffect, useState } from 'react';
import Contexto from '../contexto/Contexto';
import profesoras from '../componentes/Profesoras';

const Provider = ({ children }) => {
  const [idioma, setIdioma] = useState(0);
  const [profesora, setProfesora] = useState(profesoras[0]);

  useEffect(() => {
    setProfesora(profesoras[idioma]);
  }, [idioma]);

  return (
    <Contexto.Provider value={{ setIdioma, profesora }}>
      {children}
    </Contexto.Provider>
  );
};

export default Provider;
