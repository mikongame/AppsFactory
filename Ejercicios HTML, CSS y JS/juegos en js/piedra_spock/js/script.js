const rules = {
  piedra: ['tijeras', 'lagarto'],
  papel: ['piedra', 'spock'],
  tijeras: ['papel', 'lagarto'],
  lagarto: ['spock', 'papel'],
  spock: ['tijeras', 'piedra']
};

const choices = Object.keys(rules);

const playerChoiceEl = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const outcomeEl = document.getElementById("outcome");

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceEl.textContent = capitalize(playerChoice);
    computerChoiceEl.textContent = capitalize(computerChoice);

    if (playerChoice === computerChoice) {
      outcomeEl.textContent = "¡Empate!";
    } else if (rules[playerChoice].includes(computerChoice)) {
      outcomeEl.textContent = `✅ Ganaste: ${capitalize(playerChoice)} vence a ${capitalize(computerChoice)}.`;
    } else {
      outcomeEl.textContent = `❌ Perdiste: ${capitalize(computerChoice)} vence a ${capitalize(playerChoice)}.`;
    }
  });
});

document.getElementById("restart").addEventListener("click", () => {
  playerChoiceEl.textContent = "-";
  computerChoiceEl.textContent = "-";
  outcomeEl.textContent = "Elige una opción para empezar";
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
