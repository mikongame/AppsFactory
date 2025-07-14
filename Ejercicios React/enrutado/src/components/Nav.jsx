import { NavLink } from 'react-router-dom';
import micros from './Micros';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink>
      {micros.map((micro, index) => (
        <NavLink key={index} to={`/micros/${micro.path}`}>
          {micro.modelo}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
