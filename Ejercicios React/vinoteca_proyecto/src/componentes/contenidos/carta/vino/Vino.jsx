import { useContext } from 'react';
import IMG from '../../../../entorno/img';
import { Contexto } from '../../../../context/Contexto';
import API from '../../../../entorno/api';
import './Vino.css';

const Vino = ({ vino }) => {
  const { setDetalle, setId } = useContext(Contexto);

  const consultaDetalle = () => {
    setDetalle(true);
    setId(vino.id);
  };

const eliminarVino = (ev) => {
  const parametros = { method: 'DELETE' };

  fetch(`${API}/${vino.id}`, parametros)
    .then(res => {
      if (!res.ok) throw new Error("No se pudo eliminar el vino");
      return res.json();
    })
    .then(() => {
      alert("Vino eliminado");
      const aBorrar = ev.target.closest('.vino');
      if (aBorrar) aBorrar.remove();
    })
    .catch(err => {
      console.error(err);
      alert("Error al eliminar el vino. Puede que no tengas permisos.");
    });
};


  return (
    <div
      className="vino m-2"
      onMouseEnter={consultaDetalle}
      onMouseLeave={() => setDetalle(false)}
    >
      <img
        className="mx-auto d-block"
        src={`${IMG}/${vino.imagen}`}
        alt={vino.nombre}
        onError={(e) => e.target.src = `${IMG}/sinbotella.jpg`}
      />
      <img
        className="eliminar"
        src={`${IMG}/papelera.png`}
        alt="Eliminar"
        onClick={eliminarVino}
      />
    </div>
    
  );
};

export default Vino;
