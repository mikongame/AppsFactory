import { useEffect, useState } from 'react';
import API from '../../../../entorno/api';
import IMG from '../../../../entorno/img';
import './Detallevino.css';

const Detallevino = ({ id }) => {
  const [vino, setVino] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then(resp => {
        if (resp.status === 404) throw new Error('Vino no existe');
        return resp.json();
      })
      .then(data => setVino(data))
      .catch(error => {
        console.error(error);
        setVino(null);
      });
  }, [id]);

  if (!vino) return null;

  return (
    <div className="detalle">
      <img src={`${IMG}/${vino.imagen}`} alt={vino.nombre} />
      <h5>{vino.nombre}</h5>
      <p><strong>Año:</strong> {vino.anyo}</p>
      <p><strong>Uvas:</strong> {vino.uvas}</p>
      <p><strong>Región:</strong> {vino.region}</p>
      <p><strong>País:</strong> {vino.pais}</p>
      <p><strong>Descripción:</strong> {vino.descripcion}</p>
    </div>
  );
};

export default Detallevino;
