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
// let usedRiddles = [];
// let remainingRiddles = riddleArr.slice();

function renderNewImage() {
  img.src = imgUrlArr[0];
}

renderNewImage();

function renderNewRiddle() {
  let riddleElement = document.getElementById('riddle');

  // eslint-disable-next-line no-undef
  let randomIndex = Math.floor(Math.random() * riddleArr.length);
  // eslint-disable-next-line no-undef
  currentRiddle = riddleArr[randomIndex];

  riddleElement.textContent = currentRiddle.dialogue;
}

// function checkWinCondition() {
//     let storyElement = document.getElementById('storyText');

//     if (usedRiddles.length === 10) {
//       alert('You have completed the game!');
//     }
// }

function checkAnswer() {
  let playerAnswer = playerAnswerInput.value.trim().toLowerCase();

  if (playerAnswer === currentRiddle.answer) {
    // Correct answer
    renderNewImage();
    renderNewRiddle();
    playerAnswerInput.value = '';
  } else {
    // Incorrect answer
    lives--;
    if (lives === 0) {
      // Player has no more lives
      alert('Game Over!');
      // You can add additional code here to handle the game over scenario
    } else {
      // Player has remaining lives
      alert(`Incorrect answer! You have ${lives} lives remaining.`);
    }
  }
}

// function getHint() {
//     let hintElement = document.getElementById('hint');
// }

document.getElementById('submit').addEventListener('click', checkAnswer);
// document.getElementById('getHint').addEventListener('click', checkAnswer);
window.addEventListener('DOMContentLoaded', renderNewRiddle);
