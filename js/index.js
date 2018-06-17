"use strict";

const numberInput = getFromUI('number');
const resultMessage = getFromUI('result');
const playButton = getFromUI('play');

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