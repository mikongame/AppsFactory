const express = require("express");
const app = express();
const port = 3000;

const datos = []

let nombres = [
  { id: 1, nombre: "Joe Bananas", edad: 24 },
  { id: 2, nombre: "Crazy Gallo", edad: 31 },
  { id: 3, nombre: "Victor Gutiérrez", edad: 34 },
  { id: 4, nombre: "Miguel García", edad: 29 }
];

app.use(express.json());

app.get("/", (_req, res) => {
  res.send(nombres);
});

app.post("/datos", (req, res) => {
  const datos = req.body;
  nombres.push(datos);
  console.log(datos);
  res.json({ mensaje: "Datos recibidos", datos });
});

app.delete("/borrar", (_req, res) => {
  nombres.pop();
  res.json(nombres);
});

app.delete("/datos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  nombres = nombres.filter(dato => dato.id !== id);
  res.json({ mensaje: "Dato eliminado correctamente", nombres });
});

app.listen(port, () => {
  console.log("Iniciado en puerto " + port);
});