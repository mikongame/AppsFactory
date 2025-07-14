import { createContext, useState } from 'react';

export const Contexto = createContext();

export const Proveedor = ({ children }) => {
  const [detalle, setDetalle] = useState(false);
  const [id, setId] = useState(0);

  return (
    <Contexto.Provider value={{ detalle, setDetalle, id, setId }}>
      {children}
    </Contexto.Provider>
  );
};
