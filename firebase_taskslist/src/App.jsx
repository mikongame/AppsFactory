import { useUserContext } from "../src/auth/useUserContext.js";
import Content from "./components/Content";
import Login from "./components/Login";

function App() {
  const { user } = useUserContext();
  return user ? <Content /> : <Login />;
}

export default App;
