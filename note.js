'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displaymessage = function (message) {
    document.querySelector('.message').textContent = message;

};
const displayscore = function (score) {
    document.querySelector('.score').textContent = score;
};
const displaynumber = function (number) {
    document.querySelector('.number').textContent = number;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is not input

    if (!guess) {
        displaymessage('❌ Not a number');
        // When the player win

    } else if (guess === secretNumber) {
        displaymessage('🎯Correct number');
        displaynumber(secretNumber);
        document.querySelector('body').style.backgroundColor = 'rgb(203, 17, 17)';
        document.querySelector('.number').style.width = '30rem';


        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displaymessage(guess > secretNumber ? '↖️ Your number is TOO high' : '↘️ Your number is TOO low');
            score = score - 1;
            displayscore(score);
        } else {
            displaymessage('😜You lost the game !');
            displayscore(0);


        }
    }



});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displaymessage('Start guessing >>>');
    displayscore(score);
    displaynumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '10rem';
});