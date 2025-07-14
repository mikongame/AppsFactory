import { useCallback, useEffect, useState } from "react";
import { useUserContext } from "../auth/useUserContext";
import { logout } from "../services/auth";
import {
  getTasksByUserId,
  addTask,
  deleteTask
} from "../services/tasks";

function Content() {
  const { user } = useUserContext();
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const loadTasks = useCallback(async () => {
    if (!user?.uid) return;
    const data = await getTasksByUserId(user.uid);
    setTasks(data);
  }, [user?.uid]);

  const handleAdd = async () => {
    if (!text.trim()) return;
    await addTask(user.uid, { text });
    setText("");
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(user.uid, id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Hola, {user.email}</h2>
      <button onClick={logout}>Cerrar sesión</button>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <button onClick={handleAdd}>Añadir</button>
      </div>

      <ul style={{ marginTop: "1rem" }}>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)} style={{ marginLeft: "1rem" }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
