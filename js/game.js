'use strict';

let imgUrlArr =
[ 'assets/page1.webp',
  'assets/page2.webp',
  'assets/page3.webp',
  'assets/page4.webp',
  'assets/page5.webp',
  'assets/page6.webp',
  'assets/page7.webp',
  'assets/page8.webp',
  'assets/page9.webp',
  'assets/page10.webp'
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
let livesElement = document.getElementById('lives');
let lives = 3;
let currentRiddle;
let answeredRiddles = 0;

function renderNewImageAndText() {
  let answeredRiddles = parseInt(localStorage.getItem('answeredRiddles')) || 0;
  img.src = imgUrlArr[answeredRiddles];
  storyElement.textContent = storyArr[answeredRiddles];
}


renderNewImageAndText();

function renderNewRiddle() {
  let riddleElement = document.getElementById('riddle');
  let storedRiddle = localStorage.getItem('currentRiddle');

  lives = parseInt(localStorage.getItem('lives')) || 3;
  currentRiddle = storedRiddle ? JSON.parse(storedRiddle) : getRandomRiddle();

  riddleElement.textContent = currentRiddle.dialogue;
  livesElement.textContent = `Lives: ${lives}`;
}

function getRandomRiddle() {
  // eslint-disable-next-line no-undef
  let remainingRiddles = riddleArr.filter(riddle => !riddle.answered);
  let storedAnsweredRiddles = localStorage.getItem('answeredRiddles');
  // eslint-disable-next-line no-undef
  let randomIndex = Math.floor(Math.random() * remainingRiddles.length);
  console.log(randomIndex);
  let randomRiddle = remainingRiddles[randomIndex];
  randomRiddle.answered = true;
  answeredRiddles = storedAnsweredRiddles ? parseInt(storedAnsweredRiddles) : 0;
  answeredRiddles++;
  return randomRiddle;
}

function saveGameState() {
  // eslint-disable-next-line no-undef
  let remainingRiddles = riddleArr.filter(riddle => !riddle.answered);

  localStorage.setItem('lives', lives.toString());
  localStorage.setItem('currentRiddle', JSON.stringify(currentRiddle));
  localStorage.setItem('answeredRiddles', answeredRiddles.toString());
  localStorage.setItem('remainingRiddles', JSON.stringify(remainingRiddles));
}

function checkAnswer() {
  let playerAnswer = playerAnswerInput.value.trim().toLowerCase();
  let storyElement = document.getElementById('storyText');
  let livesElement = document.getElementById('lives');

  if (playerAnswer === currentRiddle.answer) {
    // Correct answer
    playerAnswerInput.value = '';

    checkWinCondition();

    if(answeredRiddles !== imgUrlArr.length)
      currentRiddle = getRandomRiddle();
    saveGameState();
    renderNewImageAndText();
    renderNewRiddle();

  } else {
    // Incorrect answer
    lives--;
    saveGameState();
    if (lives <= 0) {
      // Player has no more lives
      storyElement.textContent = 'Game Over! Click RESET to play again';
      livesElement.textContent = `Lives: ${lives}`;
      lose();
      // You can add additional code here to handle the game over scenario
    } else {
      // Player has remaining lives
      storyElement.textContent = `Incorrect answer! You have ${lives} lives remaining.`;
      livesElement.textContent = `Lives: ${lives}`;
    }
  }
}

function checkWinCondition() {
  let riddleElement = document.getElementById('riddle');
  if (answeredRiddles === imgUrlArr.length) {
    storyElement.textContent = 'Congratulations! You have successfully navigated through the maze and emerged victorious! Well done!';
    riddleElement.textContent = '';
  }
}

function resetGame() {
  lives = 3;
  currentRiddle = null;
  answeredRiddles = 0;
  img.src = imgUrlArr[0];
  storyElement.textContent = storyArr[0];

  localStorage.removeItem('lives');
  localStorage.removeItem('currentRiddle');
  localStorage.removeItem('answeredRiddles');
  localStorage.removeItem('remainingRiddles');

  // eslint-disable-next-line no-undef
  riddleArr.forEach(riddle => {
    riddle.answered = false;
  });

  renderNewRiddle();
}

function lose() {
  localStorage.removeItem('lives');
  localStorage.removeItem('currentRiddle');
  localStorage.removeItem('answeredRiddles');
}

function backToHome (){
  window.location.href='index.html';
}

back.addEventListener('click', backToHome);

document.getElementById('resetButton').addEventListener('click', resetGame);
document.getElementById('submit').addEventListener('click', checkAnswer);
window.addEventListener('DOMContentLoaded', renderNewRiddle);


