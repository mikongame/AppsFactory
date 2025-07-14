import { useParams } from 'react-router-dom';
import micros from './Micros';

function Micro() {
  const { micro } = useParams();
  const datos = micros.find((item) => item.path === micro);

  return (
    <div className="ficha">
      <img src={`../img/${datos.imagen}`} alt={datos.modelo} />
      <h2>{datos.modelo}</h2>
    </div>
  );
}

export default Micro;
