import { useNavigate } from "react-router-dom";
import "./../styles/Home.css";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={() => navigate("/crear")}>Crear Sala</button>
      <button onClick={() => navigate("/unirse")}>Unirse a Sala</button>
    </div>
  );
}
