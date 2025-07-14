import './Listavinos.css';
import { useEffect, useState, useContext } from 'react';
import API from '../../../../entorno/api';
import IMG from '../../../../entorno/img';
import { Contexto } from '../../../../context/Contexto';
import Vino from '../vino/Vino';
import Detallevino from '../detallevino/Detallevino';

const Listavinos = () => {
  const [vinos, setVinos] = useState([]);
  const { detalle, id } = useContext(Contexto);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setVinos(data));
  }, []);

  return (
    <div className="row">
      <div className="col-8 d-flex flex-wrap justify-content-center">
        {vinos.map(vino => (
          <Vino vino={vino} key={vino.id} />
        ))}
      </div>
      <div className="col-4">
        {detalle && <Detallevino id={id} />}
      </div>
    </div>
  );
};

export default Listavinos;

