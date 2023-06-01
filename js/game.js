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

let storyArr =
['You find yourself lost in an enchanted maze, surrounded by towering hedges and mysterious whispers. Your only hope for finding a way out is by solving riddles that will reveal the correct path or magically open new routes before you.',
  'As you venture deeper into the maze, the air becomes heavy with enchantment, and a sense of both excitement and trepidation fills your heart.',
  'Shadows dance along the winding paths, teasing your senses and obscuring the true direction. Each riddle you solve brings you closer to unraveling the maze\'s secrets.',
  'The ancient stone walls whisper tales of forgotten explorers who succumbed to the maze\'s bewitching allure. Will you be able to break the cycle and find your way back to the realm of light?',
  'A flickering lantern casts eerie light upon a moss-covered door. Only by answering the riddle etched upon it can you unlock the gateway to the next stage of your journey.',
  'The echoes of your footsteps mingle with the distant rustling of unseen creatures. With each correct answer, the maze seems to subtly shift, guiding you towards the elusive exit.',
  'Moonlight filters through the dense foliage, illuminating a hidden inscription on an ancient stone tablet. Deciphering its cryptic message holds the key to uncovering the maze\'s final challenge.',
  'Your heart quickens as you approach a grand archway adorned with intricate symbols. Only by solving the riddles embedded within its design can you break the enchantment that binds you to this labyrinthine realm.',
  'The scent of wildflowers mingles with the musty fragrance of age-old secrets. Every riddle solved brings you closer to a moment of revelation, where the maze\'s purpose and origin will be unveiled.',
  'A glimmer of hope flickers in the distance, beckoning you forward. Emerging from the maze\'s depths, you stand at the threshold of the final tunnel, where a blinding light illuminates the path to freedom and triumph.'
];

let back = document.getElementById('back');
let img = document.getElementById('asset');
let storyElement = document.getElementById('storyText');
let playerAnswerInput = document.getElementById('playerAnswer');
let lives = 3;
let currentRiddle;
let answeredRiddles = 0;

function renderNewImageAndText() {
  img.src = imgUrlArr[answeredRiddles];
  storyElement.textContent = storyArr[answeredRiddles];

}

renderNewImageAndText();

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
    renderNewImageAndText();
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

  renderNewImageAndText();
  renderNewRiddle();
}

function backToHome (){
  window.location.href='index.html';
}

back.addEventListener('click', backToHome);

document.getElementById('resetButton').addEventListener('click', resetGame);

document.getElementById('submit').addEventListener('click', checkAnswer);
window.addEventListener('DOMContentLoaded', renderNewRiddle);


