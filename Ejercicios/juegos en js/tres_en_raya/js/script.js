let estadoTablero = new Array(9).fill(null);
let turnoActual = 0;
let nombreJugador = prompt("¿Cómo te llamas?") || "Tú";
let victoriasJugador = 0;
let victoriasCPU = 0;

const botones = document.querySelectorAll('.container button');
const marcador = document.getElementById('marcador');
const botonReiniciar = document.getElementById('boton-reiniciar');

marcador.innerHTML = `${nombreJugador}: 0 | CPU: 0`;
botonReiniciar.textContent = "🔄 Reiniciar partida";

// Turno del jugador
const manejarClick = (evento, indice) => {
    if (estadoTablero[indice] || verificarGanador()) return;

    estadoTablero[indice] = nombreJugador;
    evento.target.textContent = "X";
    evento.target.style.backgroundColor = "#5A9BD5";

    if (verificarGanador()) {
        setTimeout(() => anunciarGanador(nombreJugador), 100);
        return;
    }

    if (estadoTablero.every(celda => celda)) {
        setTimeout(() => anunciarEmpate(), 100);
        return;
    }

    // Turno de la CPU
    setTimeout(turnoCPU, 400);
};

// Turno aleatorio de la CPU
const turnoCPU = () => {
    const posicionesLibres = estadoTablero
        .map((valor, i) => valor === null ? i : null)
        .filter(i => i !== null);

    if (posicionesLibres.length === 0) return;

    const indice = posicionesLibres[Math.floor(Math.random() * posicionesLibres.length)];
    estadoTablero[indice] = "CPU";
    botones[indice].textContent = "O";
    botones[indice].style.backgroundColor = "#EA711B";

    if (verificarGanador()) {
        setTimeout(() => anunciarGanador("CPU"), 100);
    } else if (estadoTablero.every(celda => celda)) {
        setTimeout(() => anunciarEmpate(), 100);
    }
};

// Comprobación de victoria
const verificarGanador = () => {
    const combinacionesGanadoras = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    return combinacionesGanadoras.some(([a, b, c]) =>
        estadoTablero[a] &&
        estadoTablero[a] === estadoTablero[b] &&
        estadoTablero[a] === estadoTablero[c]
    );
};

const anunciarGanador = (ganador) => {
    alert(`¡${ganador} ha ganado!`);
    if (ganador === nombreJugador) victoriasJugador++;
    else victoriasCPU++;
    actualizarMarcador();
    reiniciarJuego();
};

const anunciarEmpate = () => {
    alert("¡Empate!");
    reiniciarJuego();
};

const reiniciarJuego = () => {
    estadoTablero = new Array(9).fill(null);
    botones.forEach(btn => {
      btn.style.backgroundColor = '';
      btn.textContent = '';
    });
};

const actualizarMarcador = () => {
    marcador.innerHTML = `${nombreJugador}: ${victoriasJugador} | CPU: ${victoriasCPU}`;
};

botones.forEach((boton, indice) => {
    boton.addEventListener('click', (e) => manejarClick(e, indice));
});

botonReiniciar.addEventListener('click', reiniciarJuego);

