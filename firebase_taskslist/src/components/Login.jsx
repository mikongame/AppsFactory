import { useState } from "react";
import { signIn, signUp, loginWithGoogle } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      setStatus("✅ Logueado correctamente");
    } catch (error) {
      setStatus("❌ Error al iniciar sesión");
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      setStatus("✅ Usuario registrado");
    } catch (error) {
      setStatus("❌ Error al registrar usuario");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleLogin} style={{ marginRight: "0.5rem" }}>
          Iniciar sesión
        </button>
        <button onClick={handleSignUp}>Registrarse</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={loginWithGoogle}>Login con Google</button>
      </div>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}

export default Login;
