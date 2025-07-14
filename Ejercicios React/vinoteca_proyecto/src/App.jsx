import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/comunes/Navbar';
import Footer from './componentes/comunes/Footer';

import Inicio from './componentes/contenidos/inicio/Inicio';
import Listavinos from './componentes/contenidos/carta/listavinos/Listavinos';
import Altavino from './componentes/contenidos/carta/altavino/Altavino';
import Notfound from './componentes/contenidos/noencontrado/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/vinos' element={<Listavinos />} />
        <Route path='/alta' element={<Altavino />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
