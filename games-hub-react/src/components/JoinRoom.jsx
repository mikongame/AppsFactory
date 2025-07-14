import { useNavigate } from "react-router-dom";
import { db } from "../services/firebase-config.js";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { useState } from "react";
import "./../styles/JoinRoom.css";

export default function JoinRoom() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleJoin = async () => {
    const querySnapshot = await getDocs(collection(db, "rooms"));
    let roomFound = null;

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.password === password && data.players < 2) {
        roomFound = { id: docSnap.id, data };
      }
    });

    if (roomFound) {
      const roomRef = doc(db, "rooms", roomFound.id);
      await updateDoc(roomRef, { players: roomFound.data.players + 1 });
      navigate(`/sala/${roomFound.id}`);
    } else {
      alert("Sala no encontrada o ya llena.");
    }
  };

  return (
    <div>
      <h2>Unirse a Sala</h2>
      <input
        type="text"
        placeholder="Contraseña de la sala"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleJoin}>Unirse</button>
    </div>
  );
}
