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

function renderNewImage() {
  img.src = imgUrlArr[0];
}

renderNewImage();

function renderNewRiddle() {
  let riddleElement = document.getElementById('riddle');

  // eslint-disable-next-line no-undef
  let randomIndex = Math.floor(Math.random() * riddleArr.length);
  // eslint-disable-next-line no-undef
  let randomRiddle = riddleArr[randomIndex];

  riddleElement.textContent = randomRiddle.dialogue;

}

window.addEventListener('DOMContentLoaded', renderNewRiddle);
