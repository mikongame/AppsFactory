import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Proveedor } from './context/Contexto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Proveedor>
      <App />
    </Proveedor>
  </React.StrictMode>
);
