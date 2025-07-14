// src/pages/UsersPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUser,
  getAllUsers,
  getUsersByName,
  deleteUserByNameOrId,
  updateUser,
} from '../services/api';

function UsersPage() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (name.trim() === '') return setStatus('❌ Introduce un nombre.');
    try {
      await createUser({ user_name: name });
      setStatus(`✅ Usuario "${name}" creado.`);
      setName('');
      handleQuery();
    } catch (error) {
      console.error(error);
      setStatus('❌ Error al crear usuario.');
    }
  };

  const handleQuery = async () => {
    try {
      const data = name.trim() === '' ? await getAllUsers() : await getUsersByName(name);
      setUsers(data);
      setStatus(`🔍 ${data.length} usuario(s) encontrados.`);
    } catch (error) {
      console.error(error);
      setStatus('❌ Error al consultar usuarios.');
    }
  };

  const handleDelete = async () => {
    if (name.trim() === '') return setStatus('❌ Introduce un nombre o ID.');
    try {
      const deleted = await deleteUserByNameOrId(name);
      setStatus(deleted
        ? `🗑️ Usuario "${name}" eliminado.`
        : `⚠️ No se encontró el usuario "${name}".`);
      setName('');
      setEditingId(null);
      handleQuery();
    } catch (error) {
      console.error(error);
      setStatus('❌ Error al eliminar usuario.');
    }
  };

  const handleUpdate = async () => {
    if (!editingId || name.trim() === '') {
      return setStatus('❌ Selecciona un usuario y escribe un nombre.');
    }
    try {
      await updateUser(editingId, { user_name: name });
      setStatus(`✅ Usuario actualizado a "${name}".`);
      setName('');
      setEditingId(null);
      handleQuery();
    } catch (error) {
      console.error(error);
      setStatus('❌ Error al actualizar usuario.');
    }
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <input
        type="text"
        placeholder="Nombre o ID"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <button onClick={handleCreate}>Crear</button>
      <button onClick={handleQuery}>Consultar</button>
      <button onClick={handleDelete}>Eliminar</button>
      <button onClick={handleUpdate}>Actualizar</button>

      <p style={{ marginTop: '1rem' }}>{status}</p>

      {users.length > 0 && (
        <ul style={{ marginTop: '1rem' }}>
          {users.map((user) => (
            <li key={user.id}>
              {user.user_name} (ID:{' '}
              <span
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                onClick={() => {
                  setName(user.user_name);
                  setEditingId(user.id);
                  setStatus(`✏️ Editando usuario con ID: ${user.id}`);
                }}
              >
                {user.id}
              </span>
              ) {' '}
              <button onClick={() => navigate(`/usuarios/${user.id}`)}>
                Ver libros
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersPage;
