"use strict";

const numberInput = getFromUI('#number');
const resultMessage = getFromUI('#result');
const playButton = getFromUI('#play');

// Focus the input when the page loads
window.onload = function() {
    numberInput.focus();
};

document.getElementById('game').addEventListener('submit', function(e) {
    // Prevent default behavior
    e.preventDefault();
    // Check the state of the game
    if (game.isOver) {
        game.restart();
    } else {
        game.guess();
    }
});

const game = {
    number: randomNumber(),
    attempts: 3,
    isOver: false,

    restart: function() {
        // Restart the stats and set a new random number
        this.number = randomNumber();
        this.attempts = 3;
        this.isOver = false;
        // Set the button to guess a number
        playButton.value = 'Guess';
        // Hide the result message
        resultMessage.style.display = 'none';
        // Enable the input
        numberInput.disabled = false;
        // Focus the play button
        numberInput.focus();
    },

    guess: function() {
        // Get the number of the player
        let playerNumber = Number(numberInput.value);
        // Reset the input value
        numberInput.value = '';
        // Show the result message
        resultMessage.style.display = 'block';
        // If the numbers are the same, win the game
        if (playerNumber === this.number) {
            return this.win();
        }
        // if there are no more attempts, game over
        if (this.attempts === 1) {
            this.lose();
        } else {
            this.try();
        }
    },

    try: function() {
        // Subtract an attempt
        this.attempts -= 1;
        // Set the result message
        resultMessage.innerHTML = 'Incorrect! You have ' + this.attempts + ' attempts left';
    },

    win: function() {
        // Finish the game
        this.gameOver('You win! The number is ' + this.number);
    },

    lose: function() {
        // Finish the game
        this.gameOver('You lose! The number is ' + this.number);
    },

    gameOver: function(message) {
        // Set the result message
        resultMessage.innerHTML = message;
        // Set the button to play again
        playButton.value = 'Play Again';
        // Disable the input
        numberInput.disabled = true;
        // Set the game as over
        this.isOver = true;
        // Focus the play button
        playButton.focus();
    }
};


// UTILS
function getFromUI(selector) {
    return document.querySelector(selector);
}

function randomNumber() {
    return Math.round(Math.random() * 9) + 1;
}