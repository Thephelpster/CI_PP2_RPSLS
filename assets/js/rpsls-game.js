let aiChoiceDisplay = Document.getElementById('ai-choice');
let playerChoiceDisplay = document.getElementById('player-choice');
let resultdisplay = document.getElementById('results');
let possibileChoices = document.querySelectorAll('.game-button');
let playerChoice;
let playerScore;
let aiChoice;
let aiScore;

possibileChoices.forEach(possibileChoice => possibileChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateAiChoice();
    getResult();
}));

function generateAiChoice() {
    let randomNumber = Math.floor(Math.random() * possibileChoices.length) + 1;
    if (randomNumber === 1) {
        aiChoice = 'rock';
    }
    if (randomNumber === 2) {
        aiChoice = 'paper';
    }
    if (randomNumber === 3) {
        aiChoice = 'scissors';
    }
    if (randomNumber === 4) {
        aiChoice = 'lizard';
    }
    if (randomNumber === 5) {
        aiChoice = 'spock';
    }
    aiChoiceDisplay.innerHTML = aiChoice;
}

function getResult() {
    if (playerChoice === aiChoice) {
        results = 'Thats a Draw - No points!';
    }
    if (playerchoice === 'rock' && aiChoice === 'paper') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
    }
    if (playerChoice === 'rock' && aiChoice === 'scissors') {
        results = "Thats a Win! 1 point to you.";
    }
    if (playerChoice === 'rock' && aiChoice === 'lizard') {
        results = "Thats a Win! 1 point to you.";
    }
    if (playerchoice === 'rock' && aiChoice === 'spock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
    }
    if (playerChoice === 'paper' && aiChoice === 'rock') {
        results = "Thats a Win! 1 point to you.";
    }
    if (playerChoice === 'paper' && aiChoice === 'scissors') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
    }
    if (playerChoice === 'paper' && aiChoice === 'lizard') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
    }
    if (playerChoice === 'paper' && aiChoice === 'spock') {
        results = "Thats a Win! 1 point to you.";
    }
    if (playerChoice === 'scissors' && aiChoice === 'rock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
    }
    if (playerChoice === 'scissors' && aiChoice === 'paper') {
        results = "Thats a Win! 1 point to you.";
    }
    if (playerChoice === 'scissors' && aiChoice === 'lizard') {
        results = "Thats a Win! 1 point to you.";
    }
    if (playerChoice === 'scissors' && aiChoice === 'spock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
    }
    if (playerChoice === 'lizard' && aiChoice === 'rock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!"
    }
    if (playerChoice === 'lizard' && aiChoice === 'paper') {
        results = "Thats a Win! 1 point to you."
    }
    if (playerChoice === 'lizard' && aiChoice === 'scissors') {
        results = "Oh no, you've lost this round. 1 point to the Ai!"
    }
    if (playerChoice === 'lizard' && aiChoice === 'spock') {
        results = "Thats a Win! 1 point to you."
    }
    if (playerChoice === 'spock' && aiChoice === 'rock') {
        results = "Thats a Win! 1 point to you."
    }
    if (playerChoice === 'spock' && aiChoice === 'paper') {
        results = "Oh no, you've lost this round. 1 point to the Ai!"
    }
    if (playerChoice === 'spock' && aiChoice === 'scissors') {
        results = "Thats a Win! 1 point to you."
    }
    if (playerChoice === 'spock' && aiChoice === 'lizard') {
        results = "Oh no, you've lost this round. 1 point to the Ai!"
    }
}

function incrementPlayerScore() {
    let oldscore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldscore;
}