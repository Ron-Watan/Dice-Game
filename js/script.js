'use strict';

console.log();

const btnStartReset = document.querySelector('#btnStartReset');
const diceDisplay = document.querySelector('#diceDisplay');

const score_Summary_1 = document.querySelector('#score_1');
const score_Summary_2 = document.querySelector('#score_2');

const correct_1 = document.querySelector('#correct_1');
const correct_2 = document.querySelector('#correct_2');

const overlayBtn_1 = document.querySelector('#overlayBtn_1');
const overlayBtn_2 = document.querySelector('#overlayBtn_2');

const btnCorrect_1 = document.querySelector('#btnCorrect_1');
const btnCorrect_2 = document.querySelector('#btnCorrect_2');

const overlayBg_1 = document.querySelector('#overlayBg_1');
const overlayBg_2 = document.querySelector('#overlayBg_2');

const rollPlayer_1 = document.querySelector('#btnRoll_1');
const rollPlayer_2 = document.querySelector('#btnRoll_2');

const figure = document.querySelector('figure');

//***-S-E-C-T-I-O-N-***
let scorePlayer_1 = 0;
let correctPlayer_1 = 0;

score_Summary_1.textContent = scorePlayer_1;
correct_1.textContent = correctPlayer_1;

//***-S-E-C-T-I-O-N-***

rollPlayer_1.addEventListener('click', function () {
  rollDiceX();
  function rollDiceX() {
    const dice = [...document.querySelectorAll('.die-list')];

    // getRandomNumber(1, 6);
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(0, 6);
      let randomNumber = Number(die.dataset.roll);
      correctPlayer_1 += randomNumber;

      correct_1.textContent = correctPlayer_1;
      if (randomNumber === 0) {
        correctPlayer_1 = 0;
        correct_1.textContent = correctPlayer_1;
        overlayBtn_1.classList.toggle('hiddenBlock');
        overlayBg_1.classList.toggle('hiddenBlock');
        overlayBtn_2.classList.toggle('hiddenBlock');
        overlayBg_2.classList.toggle('hiddenBlock');
        btnCorrect_1.classList.toggle('grey');
        rollPlayer_1.classList.toggle('grey');
        btnCorrect_2.classList.toggle('grey');
        rollPlayer_2.classList.toggle('grey');

        document.querySelector('.display-dice').classList.toggle('flick');
        setTimeout(() => {
          document.querySelector('.display-dice').classList.toggle('flick');
        }, 2000);
      }
    });
  }
});

//***-S-E-C-T-I-O-N-***

btnCorrect_1.addEventListener('click', function () {
  scorePlayer_1 += correctPlayer_1;
  score_Summary_1.textContent = scorePlayer_1;
  correctPlayer_1 = 0;
  correct_1.textContent = correctPlayer_1;
  overlayBtn_1.classList.toggle('hiddenBlock');
  overlayBg_1.classList.toggle('hiddenBlock');
  overlayBtn_2.classList.toggle('hiddenBlock');
  overlayBg_2.classList.toggle('hiddenBlock');

  btnCorrect_1.classList.toggle('grey');
  rollPlayer_1.classList.toggle('grey');
  btnCorrect_2.classList.toggle('grey');
  rollPlayer_2.classList.toggle('grey');
});

//***-S-E-C-T-I-O-N-***//***-S-E-C-T-I-O-N-***

let scorePlayer_2 = 0;
let correctPlayer_2 = 0;

score_Summary_2.textContent = scorePlayer_2;
correct_2.textContent = correctPlayer_2;

//***-S-E-C-T-I-O-N-***

rollPlayer_2.addEventListener('click', function () {
  rollDiceX();

  function rollDiceX() {
    const dice = [...document.querySelectorAll('.die-list')];

    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(0, 6);
      let randomNumber = Number(die.dataset.roll);
      correctPlayer_2 += randomNumber;

      correct_2.textContent = correctPlayer_2;
      if (randomNumber === 0) {
        correctPlayer_2 = 0;
        correct_2.textContent = correctPlayer_2;
        overlayBtn_1.classList.toggle('hiddenBlock');
        overlayBg_1.classList.toggle('hiddenBlock');
        overlayBtn_2.classList.toggle('hiddenBlock');
        overlayBg_2.classList.toggle('hiddenBlock');
        btnCorrect_1.classList.toggle('grey');
        rollPlayer_1.classList.toggle('grey');
        btnCorrect_2.classList.toggle('grey');
        rollPlayer_2.classList.toggle('grey');

        document.querySelector('.display-dice').classList.toggle('flick');
        setTimeout(() => {
          document.querySelector('.display-dice').classList.toggle('flick');
        }, 2000);
      }
    });
  }
});

function toggleClasses(die) {
  die.classList.toggle('odd-roll');
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//***-S-E-C-T-I-O-N-***

btnCorrect_2.addEventListener('click', function () {
  scorePlayer_2 += correctPlayer_2;
  score_Summary_2.textContent = scorePlayer_2;
  correctPlayer_2 = 0;
  correct_2.textContent = correctPlayer_2;
  overlayBtn_1.classList.toggle('hiddenBlock');
  overlayBg_1.classList.toggle('hiddenBlock');
  overlayBtn_2.classList.toggle('hiddenBlock');
  overlayBg_2.classList.toggle('hiddenBlock');

  btnCorrect_1.classList.toggle('grey');
  rollPlayer_1.classList.toggle('grey');
  btnCorrect_2.classList.toggle('grey');
  rollPlayer_2.classList.toggle('grey');
});

//***-S-E-C-T-I-O-N-***

btnStartReset.addEventListener('click', function () {
  scorePlayer_1 = 0;
  correctPlayer_1 = 0;
  score_Summary_1.textContent = scorePlayer_1;
  correct_1.textContent = correctPlayer_1;

  scorePlayer_2 = 0;
  correctPlayer_2 = 0;
  score_Summary_2.textContent = scorePlayer_2;
  correct_2.textContent = correctPlayer_2;
});
