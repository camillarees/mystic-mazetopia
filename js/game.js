'use strict';

let imgUrlArr =
['../assets/page1.jpg',
  '../assets/page2.jpg',
  '../assets/page3.jpg',
  '../assets/page4.jpg',
  '../assets/page5.jpg',
  '../assets/page6.jpg',
  '../assets/page7.jpg',
  '../assets/page8.jpg',
  '../assets/page9.jpg',
  '../assets/page10.jpg'
];

let img = document.getElementById('asset');
let playerAnswerInput = document.getElementById('playerAnswer');
let lives = 3;
let currentRiddle;
let answeredRiddles = 0;

function renderNewImage() {
  img.src = imgUrlArr[answeredRiddles];
}

renderNewImage();

function renderNewRiddle() {
  let riddleElement = document.getElementById('riddle');
  let storedLives = localStorage.getItem('lives');
  let storedRiddle = localStorage.getItem('currentRiddle');

  lives = storedLives ? parseInt(storedLives) : 3;
  currentRiddle = storedRiddle ? JSON.parse(storedRiddle) : getRandomRiddle();

  riddleElement.textContent = currentRiddle.dialogue;
}

function getRandomRiddle() {
  // eslint-disable-next-line no-undef
  let remainingRiddles = riddleArr.filter(riddle => !riddle.answered);
  // eslint-disable-next-line no-undef
  let randomIndex = Math.floor(Math.random() * remainingRiddles.length);
  let randomRiddle = remainingRiddles[randomIndex];
  randomRiddle.answered = true;
  answeredRiddles++;
  return randomRiddle;
}

function saveGameState() {
  localStorage.setItem('lives', lives.toString());
  localStorage.setItem('currentRiddle', JSON.stringify(currentRiddle));
}

function checkAnswer() {
  let playerAnswer = playerAnswerInput.value.trim().toLowerCase();
  let storyElement = document.getElementById('storyText');

  if (playerAnswer === currentRiddle.answer) {
    // Correct answer
    renderNewImage();
    currentRiddle = getRandomRiddle();
    saveGameState();
    renderNewRiddle();
    playerAnswerInput.value = '';

    checkWinCondition();
  } else {
    // Incorrect answer
    lives--;
    if (lives === 0) {
      // Player has no more lives
      storyElement.textContent = 'Game Over!';
      // You can add additional code here to handle the game over scenario
    } else {
      // Player has remaining lives
      storyElement.textContent = `Incorrect answer! You have ${lives} lives remaining.`;
    }
  }
}

function checkWinCondition() {
  let storyElement = document.getElementById('storyText');
  if (answeredRiddles === imgUrlArr.length) {
    storyElement.textContent = 'Congratulations! You have completed the game!';
  }
}

function resetGame() {
  lives = 3;
  currentRiddle = null;
  answeredRiddles = 0;

  localStorage.removeItem('lives');
  localStorage.removeItem('currentRiddle');

  renderNewImage();
  renderNewRiddle();
}

document.getElementById('resetButton').addEventListener('click', resetGame);

// function getHint() {
//   let hintElement = document.getElementById('hint');
//   let storedRiddle = localStorage.getItem('currentRiddle');
//   if (storedRiddle) {
//     currentRiddle = JSON.parse(storedRiddle);
//     hintElement.textContent = currentRiddle.hint;
//   }
// }

// document.getElementById('getHint').addEventListener('click', getHint);
// console.log(getHint());

document.getElementById('submit').addEventListener('click', checkAnswer);
window.addEventListener('DOMContentLoaded', renderNewRiddle);


