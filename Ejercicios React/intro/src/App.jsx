import logo from './logo.svg';
import killbill from './kill-bill.jpg'
import bingueros from './los_bingueros.jpg'
import saw from './saw.jpg'

import './App.css';

let titulos = ['Kill Bill', 'Los bingueros', 'Saw']

function App() {
  return (
    <div className="App">

      <header className="App-header">
      </header>
      
      <main>
        <div className='peliculas'>
          <div className='ficha'>
            <img src={killbill} alt='Kill Bill'/>
            <h3>{titulos[0]}</h3>
          </div>

          <div className='ficha'>
            <img src={bingueros} alt='Los bingueros'/>
            <h3>{titulos[1]}</h3>
          </div>

          <div className='ficha'>
            <img src={saw} alt='SaW'/>
            <h3>{titulos[2]}</h3>
          </div>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
