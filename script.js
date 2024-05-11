'use strict';

let secretNumber;
let score = 20;
let highscore = 0;

function generateSecretNumber(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    return secretNumber;
}

generateSecretNumber();

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
};

const displayNumber =  function (number) {
    document.querySelector('.number').textContent = number;
};

const displayMessage =  function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){

let guess = Number (document.querySelector('.guess').value);

// sem palpite 
if (!guess){
   // document.querySelector('.message').textContent = '⛔ No number!';
   displayMessage('⛔ No number!');

// palpite certo
} else if ( guess === secretNumber ){

    displayMessage('🎉Corret Number!');
   // document.querySelector('.message').textContent = ' 🎉Corret Number!';
    // document.querySelector('.number').textContent = secretNumber;
displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    }

}
// palpite errado
else if ( guess !== secretNumber ) {
    if (score > 1) {

     
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score --;
            displayScore(score);
            // document.querySelector('.score').textContent = score;                
            } else {
            displayScore(0);
            // document.querySelector('.score').textContent = 0;

            displayMessage('💥 Game Over!');
            // document.querySelector('.message').textContent = '💥 Game Over!';
            document.querySelector('body').style.backgroundColor = 'red';
            }
}

//palpite maior que o número secreto
// else if (guess > secretNumber) {
//         if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score --;
//     document.querySelector('.score').textContent = score;
    
        
//     } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('.message').textContent = '💥 Game Over!';
//     document.querySelector('body').style.backgroundColor = 'red';
//     }

//palpite menor que o número secreto
// } else if (guess < secretNumber){
//     if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score --;
//     document.querySelector('.score').textContent = score;
//     } else {
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('.message').textContent = '💥 Game Over!';
//     document.querySelector('body').style.backgroundColor = 'red';
//     }
// } 

 });

document.querySelector('.again').addEventListener('click', function(){

score = 20;
generateSecretNumber();

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
displayMessage('Start guessing...');
// document.querySelector('.message').textContent = 'Start guessing...';
displayScore(score);
// document.querySelector('.score').textContent = score;
//secretNumber = Math.trunc(Math.random() * 20) + 1;
});