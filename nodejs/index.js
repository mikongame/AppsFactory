import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import http from "http";

const app = express();
const port = 3000;

// Middleware opcional
app.use(express.json());

// Conexión Atlas
mongoose.connect("mongodb+srv://myuser:XmUr70qImKQRz1iS@cluster0.gwujyla.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Conectado a Mongo Atlas"))
  .catch(err => console.error("❌ Error de conexión", err));

// modelo sencillo
const registroSchema = new mongoose.Schema({ nombre: String });
const Registro = mongoose.model("Registro", registroSchema);

// Express routes
app.get("/", async (req, res) => {
  try {
    const nuevo = new Registro({ nombre: "3" });
    await nuevo.save();
    res.send("Registro insertado en MongoDB Atlas");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

// crear servidor http para socket
const server = http.createServer(app);

// inicializar socket.io sobre el server http
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

io.on("connection", (socket) => {
  console.log("✅ usuario conectado por socket");

  socket.on("message-from-front", (text) => {
    console.log("message from front", text);

    // ejemplo de persistir en Mongo
    const nuevoMensaje = new Registro({ nombre: text });
    nuevoMensaje.save();

    io.emit("message-from-back", "Hola desde el back");
  });

  socket.on("disconnect", () => {
    console.log("❌ usuario desconectado");
  });
});

// arrancar todo
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

useEffect(() => {
  socket.on("connect", () => {
    console.log("connected");
    socket.on("message-from-back", (data) => {
      console.log(data);
    });
  });
}, []);

const handleSubmit = () => {
  console.log("enviado");
  socket.emit("message-from-front", text);
};

