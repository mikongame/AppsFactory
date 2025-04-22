const replaceAt = (string, character, index) =>
    string.substring(0, index) + character + string.substring(index + 1);

const totalFrames = 7;
const frameWidth = 267;
const verticalOffset = 825;

const words = ['casa', 'perro', 'gato', 'coche', 'piscina', 'murcielago', 'oso', 'panda'];
let secretWord, hiddenWord, usedLetters, errorCounter;

const initGame = () => {
  secretWord = words[Math.floor(Math.random() * words.length)];
  hiddenWord = "_".repeat(secretWord.length);
  usedLetters = [];
  errorCounter = 0;

  updateDisplay();
  document.querySelector('.message').textContent = '';
  document.querySelector('input').disabled = false;
  document.querySelector('#check').disabled = false;
};

  const updateDisplay = () => {
    document.querySelector('.hiddenWord').textContent = hiddenWord.split('').join(' ');
  
    const correct = usedLetters.filter(l => secretWord.includes(l));
    const wrong = usedLetters.filter(l => !secretWord.includes(l));
  
    document.querySelector('.usedLetters.correct').textContent = correct.join(', ') || '';
    document.querySelector('.usedLetters.wrong').textContent = wrong.join(', ') || '';
  
    const ahorcado = document.querySelector('.ahorcado');
    const posX = -errorCounter * frameWidth; // horizontal
    ahorcado.style.backgroundPosition = `${posX}px 0`; // vertical fijo
  };
  
const checkLetter = () => {
  const input = document.querySelector('input');
  const letter = input.value.toLowerCase().trim();
  input.value = '';

  if (!letter.match(/^[a-zñ]$/i)) return;
  if (usedLetters.includes(letter)) {
    document.querySelector('.message').textContent = `Ya has usado la letra "${letter}"`;
    return;
  }

  usedLetters.push(letter);
  let correct = false;

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
      hiddenWord = replaceAt(hiddenWord, letter, i);
      correct = true;
    }
  }

  if (!correct) {
    errorCounter++;
  } else {
    document.querySelector('.message').textContent = '';
  }

  updateDisplay();
  checkGameStatus();
};

const checkGameStatus = () => {
  if (!hiddenWord.includes("_")) {
    setTimeout(() => {
      document.querySelector('.message').textContent = '🎉 ¡Has ganado!';
      endGame();
    }, 300);
  } else if (errorCounter >= totalFrames - 1) {
    setTimeout(() => {
      document.querySelector('.message').textContent = `💀 Has perdido. La palabra era "${secretWord}"`;
      endGame();
    }, 300);
  }
};

const endGame = () => {
  document.querySelector('input').disabled = true;
  document.querySelector('#check').disabled = true;
};

document.querySelector('#check').addEventListener('click', checkLetter);
document.querySelector('#restart').addEventListener('click', initGame);
document.querySelector('input').addEventListener('keypress', e => {
  if (e.key === 'Enter') checkLetter();
});
document.addEventListener('DOMContentLoaded', initGame);


