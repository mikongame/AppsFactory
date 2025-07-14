import { Link } from 'react-router-dom';
import micros from './Micros';

function Inicio() {
  return (
    <div className="micros">
      {micros.map((micro, index) => (
        <div key={index} className="micro">
          <Link to={`/micros/${micro.path}`}>
            <img src={`../img/${micro.imagen}`} alt={micro.modelo} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Inicio;