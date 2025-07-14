import { Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/usuarios" style={{ marginRight: '1rem' }}>Usuarios</Link>
      </nav>

      <Routes>
        <Route path="/usuarios" element={<UsersPage />} />
        <Route path="/usuarios/:id" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default App;
