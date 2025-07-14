import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Micro from './components/Micro';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Navigate to="/" />} />
          <Route path="/micros/:micro" element={<Micro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
