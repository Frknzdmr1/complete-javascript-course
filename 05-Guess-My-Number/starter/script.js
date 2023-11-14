'use strict';

// let SecretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   const displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
//   };
//   //when there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'No number';
//     displayMessage('No Number');
//     //When player wins/
//   } else if (guess === SecretNumber) {
//     // document.querySelector('.message').textContent = 'Correct Number';
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = SecretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';

//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     //When guess is wrong
//   } else if (guess !== SecretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       //   guess > SecretNumber ? 'Too high' : 'Too Low';
//       displayMessage(guess > SecretNumber ? 'Too high' : 'Too Low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = 'Game Over';
//       displayMessage('Game Over');
//       document.querySelector('.score').textContent = 0;
//     }

//     // Line 47den line 60 a kadar line 37 den 46 ya kadar ki kismin ki kisaltilmis hali
//     //When guess is to high/
//     // } else if (guess > SecretNumber) {
//     //   //When guess is too low
//     // } else if (guess < SecretNumber) {
//     //   if (score > 1) {
//     //     document.querySelector('.message').textContent = 'Too low';
//     //     score--;
//     //     document.querySelector('.score').textContent = score;
//     //   } else {
//     //     document.querySelector('.message').textContent = 'Game Over';
//     //     document.querySelector('.score').textContent = 0;
//     //   }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   SecretNumber = Math.trunc(Math.random() * 20) + 1;
//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start Guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.body').style.backgroundColor = '#222';
//   document.querySelector('.body').style.width = '15rem';
// });

// VIDEOSUZ TEK BASIMA YAPMAM LAZIM
//STEPLER: HER ADIMDA NE ISLEMI YAPILIYOR (ISLEM NE ANLATMAYA CALISIYOR< ONLARI YAZ VE DAHA SONRA CODA CEVIR)

// ?= number,  box = guess

// sistem numara belirliycek. (programin sonunda numara gorunmemesi gerekiyor )
// kullanici kutuya numara girecek
// girdikten sonra ya too low ya too high ya correct ya da no number veya game over yazacak start guessing yazan yerde
// score numara bulunasiya kadar azalacak
// highscore degisecek eger kirildiysa
// again button should reset each value by selecting every class in the html file with the dom manipulation

// <!-- check buttonunu secip eventlistener ekleyip fonksiyonda gosterilecek mesaji belirt -->
// <!-- displaymessage fonksiyonunu yaz ve butun olasiliklari sirala -->

// let SecretNumber = Math.trunc(Math.random() * 20);
// let score = 20;
// let highscore = 0;
// let guess = '';

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
// });

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// if (!guess) {
//   document.querySelector('.message').textContent = 'Not a Number';
//   displayMessage('Not a Number');
// } else if (guess === SecretNumber) {
//   document.querySelector('.message').textContent = 'Correct Number';
//   displayMessage('Correct Number');
//   document.querySelector('.number').textContent = SecretNumber;

//   document.querySelector('body').style.backgroundColor = '#60b347';
//   document.querySelector('.number').style.width = '30rem';

//   if (score > highscore) {
//     highscore = score;
//     document.querySelector('.highscore').value = highscore;
//   }
// } else if (guess !== SecretNumber) {
//   if (score < 1) {
//     document.querySelector('.message').textContent =
//       guess > SecretNumber ? 'too high' : 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     displayMessage(guess > SecretNumber ? 'Too High' : 'Too Low');
//   };
// } else {
//   document.querySelector('.message').textContent = 'Game Over';
//   displayMessage('Game Over');
//   document.querySelector('.score').textContent = 0;
// }

// let secretNumber = Math.trunc(Math.random() * 20);
// let score = 20;
// let highscore = 0;
// let guess;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     displayMessage('Not a number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage(
//         guess > secretNumber ? 'Too high, Game Over' : 'Too Low, Game Over'
//       );
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

// let secretNumber = Math.trunc(Math.random() * 20);
// let score = 20;
// let highscore = 0;
// let guess;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   guess = Number(document.querySelector('.guess').value);
//   console.log('guess');

//   if (!guess) {
//     displayMessage('Not a number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       score = highscore;
//       document.querySelector('highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage(
//         guess > secretNumber ? 'Too High, Game Over' : 'Too Low, Game Over'
//       );
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

// let secretNumber = Math.trunc(Math.random() * 20);
// let score = 20;
// let highscore = 0;
// let guess;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     displayMessage('Not a number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage(
//         guess > secretNumber ? 'Too high, Game Over' : 'Too low, game over'
//       );
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

// let secretNumber = Math.trunc(Math.random() * 20);
// let score = 20;
// let highscore = 0;
// let guess;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function (e) {
//   guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     displayMessage('Not a number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '30rem';
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too high' : 'Too low ');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage(
//         guess > secretNumber ? 'Too High, Game Over' : 'Too Low, Game over'
//       );
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

// let secretNumber = Math.trunc(Math.random() * 20);
// let score = 20;
// let highscore = 0;
// let guess;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     displayMessage('Not a number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.with = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     } else if (guess !== secretNumber) {
//       displayMessage(guess > secretNumber ? 'Too high' : 'too low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage(
//         guess > secretNumber ? 'Too high, Game Over' : 'Too low, Game over'
//       );
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

let secretNumber = Math.trunc(Math.random() * 4);
let score = 20;
let highscore = 0;
let guess;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Not a number');
  } else if (guess === secretNumber) {
    // score > 1
    displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(
        guess > secretNumber ? 'Too High, Game Over' : 'Too Low, Game Over'
      );
      document.querySelector('.score').textContent = 0;
    }
  }
});
