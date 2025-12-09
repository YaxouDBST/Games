// Game variables
let secretNumber = 0;
let attempts = 0;

// Function to start the game
function startGame() {
    // Pick a random number between 1 and 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    
    // Show game screen, hide play button
    document.getElementById('gameScreen1').style.display = 'block';
    document.getElementById('playBtn1').style.display = 'none';
    
    // Clear input field
    document.getElementById('guessInput1').value = '';
    document.getElementById('feedback1').textContent = '';
    document.getElementById('restartBtn1').style.display = 'none';
}

// Function to check the player's guess
function checkGuess() {
    const guess = Number(document.getElementById('guessInput1').value);
    
    // Check if input is valid
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        document.getElementById('feedback1').textContent = 'Please enter a number between 1 and 100!';
        return;
    }
    
    attempts = attempts + 1;
    
    // Compare guess with secret number
    if (guess === secretNumber) {
        document.getElementById('feedback1').textContent = `🎉 You won! The number was ${secretNumber}! You took ${attempts} attempts!`;
        document.getElementById('feedback1').style.color = 'green';
        document.getElementById('submitBtn1').style.display = 'none';
        document.getElementById('restartBtn1').style.display = 'block';
        document.getElementById('guessInput1').style.display = 'none';
    } else if (guess < secretNumber) {
        document.getElementById('feedback1').textContent = 'Too low! Try a higher number.';
        document.getElementById('feedback1').style.color = 'orange';
    } else {
        document.getElementById('feedback1').textContent = 'Too high! Try a lower number.';
        document.getElementById('feedback1').style.color = 'orange';
    }
    
    // Update attempts counter
    document.getElementById('attemptsCounter1').textContent = `Attempts: ${attempts}`;
    
    // Clear input for next guess
    document.getElementById('guessInput1').value = '';
}

// Function to restart the game
function restartGame() {
    document.getElementById('gameScreen1').style.display = 'none';
    document.getElementById('playBtn1').style.display = 'block';
    document.getElementById('guessInput1').style.display = 'block';
    document.getElementById('submitBtn1').style.display = 'block';
    document.getElementById('feedback1').textContent = '';
    document.getElementById('feedback1').style.color = 'black';
}

// When the page loads, set up the buttons
document.addEventListener('DOMContentLoaded', function() {
    // Play button - starts the game
    document.getElementById('playBtn1').addEventListener('click', startGame);
    
    // Submit button - checks the guess
    document.getElementById('submitBtn1').addEventListener('click', checkGuess);
    
    // Restart button - restarts the game
    document.getElementById('restartBtn1').addEventListener('click', restartGame);
    
    // Allow pressing Enter to submit guess
    document.getElementById('guessInput1').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });
});