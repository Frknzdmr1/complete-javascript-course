'use strict';

//select Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //another way to select an ID
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Staring condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  //1.Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. Display the Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. check for rolled 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    current0El.textContent = currentScore; //satir 35 satir 36 biri dinamik biri hard code
  } else {
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
