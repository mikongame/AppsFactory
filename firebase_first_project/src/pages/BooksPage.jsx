// src/pages/BooksPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getBooksByUser,
  addBookToUser,
  deleteBook,
  updateBook,
} from '../services/api';

function BooksPage() {
  const { id: userId } = useParams();
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [editingBookId, setEditingBookId] = useState(null);
  const [status, setStatus] = useState('');

  const loadBooks = async () => {
    const data = await getBooksByUser(userId);
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, [userId]);

  const handleAddOrUpdate = async () => {
    if (!title || !price) return setStatus('❌ Título y precio obligatorios.');

    try {
      if (editingBookId) {
        await updateBook(userId, editingBookId, { title, price: parseFloat(price) });
        setStatus('✅ Libro actualizado.');
      } else {
        await addBookToUser(userId, { title, price: parseFloat(price) });
        setStatus('✅ Libro añadido.');
      }

      setTitle('');
      setPrice('');
      setEditingBookId(null);
      loadBooks();
    } catch (error) {
      console.error(error);
      setStatus('❌ Error al guardar libro.');
    }
  };

  const handleEdit = (book) => {
    setTitle(book.title);
    setPrice(book.price);
    setEditingBookId(book.id);
  };

  const handleDelete = async (bookId) => {
    await deleteBook(userId, bookId);
    loadBooks();
    setStatus(`🗑️ Libro ${bookId} eliminado.`);
  };

  return (
    <div>
      <h1>Libros del usuario {userId}</h1>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <input
        placeholder="Precio"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <button onClick={handleAddOrUpdate}>
        {editingBookId ? 'Actualizar' : 'Añadir'}
      </button>

      <p style={{ marginTop: '1rem' }}>{status}</p>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.price}€
            {' '}
            <button onClick={() => handleEdit(book)}>Editar</button>
            <button onClick={() => handleDelete(book.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksPage;
