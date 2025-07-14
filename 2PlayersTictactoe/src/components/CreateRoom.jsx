import { useNavigate } from "react-router-dom";
import { db } from "../services/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import "./../styles/CreateRoom.css";

function generarCodigo(longitud = 6) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let resultado = "";
  for (let i = 0; i < longitud; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}

export default function CreateRoom() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    const finalPassword = password.trim() !== "" ? password : generarCodigo();

    const roomData = {
      password: finalPassword,
      players: 1
    };

    const roomRef = await addDoc(collection(db, "rooms"), roomData);

    // Pasamos la contraseña por estado de navegación
    navigate(`/sala/${roomRef.id}`, { state: { password: finalPassword } });
  };

  return (
    <div>
      <h2>Crear Sala</h2>
      <input
        type="text"
        placeholder="Contraseña (opcional)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreate}>Crear</button>
    </div>
  );
}
