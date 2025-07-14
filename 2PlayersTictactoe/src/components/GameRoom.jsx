import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../services/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import "./../styles/GameRoom.css";

export default function GameRoom() {
  const { roomId } = useParams();
  const location = useLocation();
  const [players, setPlayers] = useState(0);
  const [password, setPassword] = useState("");
  const [esCreador, setEsCreador] = useState(false);

  useEffect(() => {
    const roomRef = doc(db, "rooms", roomId);

    const unsubscribe = onSnapshot(roomRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPlayers(data.players || 0);

        // Si el usuario se unió, solo obtenemos la contraseña sin copiarla
        if (!location.state?.password) {
          setPassword(data.password);
        }
      }
    });

    return () => unsubscribe();
  }, [roomId, location.state]);

  useEffect(() => {
    // Si viene de CreateRoom, activamos esCreador y copiamos contraseña
    if (location.state?.password) {
      const passedPassword = location.state.password;
      setPassword(passedPassword);
      setEsCreador(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (esCreador && password) {
      navigator.clipboard.writeText(password)
        .then(() => console.log("Contraseña copiada al portapapeles"))
        .catch((err) => console.error("Error al copiar contraseña:", err));
    }
  }, [esCreador, password]);

  return (
    <div>
      <h2>Sala: {roomId}</h2>
      <p>Jugadores conectados: {players} / 2</p>

      {esCreador && password && (
        <p style={{ color: "#5a5dff", marginTop: "1rem" }}>
          Contraseña de sala: <strong>{password}</strong> (copiada al portapapeles)
        </p>
      )}

      {players === 2 ? (
        <p>✅ ¡Todos listos! El juego puede comenzar.</p>
      ) : (
        <p>⏳ Esperando al segundo jugador...</p>
      )}
    </div>
  );
}
