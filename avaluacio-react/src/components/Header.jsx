import { Link } from "react-router-dom";
import "../styles/ElMundoTodayLayout.css";

function Header() {
  return (
    <header className="emt-header">
      <div className="emt-header-top">
        <div className="emt-social-icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-solid fa-envelope"></i></a>
          <a href="#"><i className="fa-brands fa-telegram"></i></a>
          <a href="#"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-solid fa-cloud"></i></a>
        </div>

        <div className="emt-logo">
          <h1>EL <span>MUNDO TODAY</span></h1>
        </div>

        <div className="emt-suscribe">
          <button className="suscribe-btn">Hazte suscriptor</button>
        </div>
      </div>

      <div className="emt-slogan">– LA ACTUALIDAD DEL MAÑANA –</div>

      <nav className="emt-navbar">
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;
