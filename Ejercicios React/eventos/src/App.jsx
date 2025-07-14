import killbill from './kill-bill.jpg'
import bingueros from './los_bingueros.jpg'
import saw from './saw.jpg'
import sinportada from './sinportada.jpg';

import './App.css';

let titulos = ['Kill Bill', 'Los bingueros', 'Saw']

const cambiarTexto = (e) => {
  e.target.innerText === 'Visto' ? e.target.innerText = '' : e.target.innerText = 'Visto';
};

const cambiarImagen = (e) => {
  if (e.target.src.includes('sinportada')) {
    e.target.style.visibility = 'hidden';
    e.target.parentNode.style.backgroundColor = 'transparent';
  } else {
    e.target.src = sinportada;
    e.target.style.visibility = 'visible';
  }
};

function App() {
  return (
    <div className="App">

      <header className="App-header">
      </header>
      
      <main>
        <div className='peliculas'>
          <div className='ficha'>
            <img src={killbill} alt='Kill Bill' onClick={cambiarImagen}/>
            <h3 onClick={cambiarTexto}>{titulos[0]}</h3>
          </div>

          <div className='ficha'>
            <img src={bingueros} alt='Los bingueros' onClick={cambiarImagen}/>
            <h3 onClick={cambiarTexto}>{titulos[1]}</h3>
          </div>

          <div className='ficha'>
            <img src={saw} alt='SaW' onClick={cambiarImagen}/>
            <h3 onClick={cambiarTexto}>{titulos[2]}</h3>
          </div>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
