const frases = [
  "El sol brilla en el cielo",
  "Me gusta programar en JavaScript",
  "La creatividad impulsa la innovación"
];

let fraseElegida = "";
let palabrasRespuesta = [];

function iniciarJuego() {
  const divFrase = document.getElementById("frase-original");
  const divRespuesta = document.getElementById("respuesta");
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";
  divRespuesta.innerHTML = "";

  // 1. Elegir frase aleatoria
  fraseElegida = frases[Math.floor(Math.random() * frases.length)];
  const palabras = fraseElegida.split(" ");

  // 2. Desordenar palabras
  const palabrasDesordenadas = [...palabras].sort(() => Math.random() - 0.5);

  // 3. Pintar en pantalla
  divFrase.innerHTML = "";
  palabrasDesordenadas.forEach(palabra => {
    const span = document.createElement("span");
    span.classList.add("palabra");
    span.textContent = palabra;
    span.onclick = () => agregarPalabra(span.textContent);
    divFrase.appendChild(span);
  });

  palabrasRespuesta = [];
}

function agregarPalabra(palabra) {
  const divRespuesta = document.getElementById("respuesta");
  const span = document.createElement("span");
  span.classList.add("palabra");
  span.textContent = palabra;

  span.onclick = () => {
    divRespuesta.removeChild(span);
    palabrasRespuesta = palabrasRespuesta.filter(p => p !== palabra || p.removido); // Evitar duplicados
  };

  divRespuesta.appendChild(span);
  palabrasRespuesta.push(palabra);
}

function evaluar() {
  const resultado = document.getElementById("resultado");
  const fraseUsuario = palabrasRespuesta.join(" ");
  if (fraseUsuario === fraseElegida) {
    resultado.textContent = "✅ ¡Correcto!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Intenta de nuevo.";
    resultado.style.color = "red";
  }
}

iniciarJuego();
