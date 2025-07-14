import "../styles/ElMundoTodayLayout.css";

function Footer() {
  return (
    <footer className="emt-footer">
      <div className="emt-footer-top">
        <div className="emt-social-icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-solid fa-envelope"></i></a>
          <a href="#"><i className="fa-brands fa-telegram"></i></a>
          <a href="#"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-solid fa-cloud"></i></a>
        </div>

        <div className="emt-logo-footer">
          <h1>EL <span>MUNDO TODAY</span></h1>
          <button className="suscribe-btn">SUSCRÍBETE</button>
        </div>
      </div>

      <div className="emt-footer-links">
        <a href="#">Política de cookies</a>
        <span>·</span>
        <a href="#">Aviso legal y privacidad</a>
        <span>·</span>
        <a href="#">Publicidad</a>
        <span>·</span>
        <a href="#">Tienda</a>
      </div>

      <div className="emt-footer-copy">
        © EL MUNDO TODAY
      </div>
    </footer>
  );
}

export default Footer;
