import './App.css';
import Idiomas from './componentes/Idiomas';
import Contenido from './componentes/Contenido';
import Provider from './contexto/Provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="banderas">
          <Idiomas />
        </div>
        <div className="contenido">
          <Contenido />
        </div>
      </div>
    </Provider>
  );
}

export default App;
