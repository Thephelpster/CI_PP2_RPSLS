let aiChoiceDisplay = document.getElementById('ai-choice');
let playerChoiceDisplay = document.getElementById('player-choice');
let resultDisplay = document.getElementById('results');
let possibleChoices = document.querySelectorAll('.game-button');
let playerChoice;
let playerScore;
let aiChoice;
let aiScore;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateAiChoice();
    getResult();
}));

function generateAiChoice() {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        aiChoice = 'Rock';
    }
    if (randomNumber === 2) {
        aiChoice = 'Paper';
    }
    if (randomNumber === 3) {
        aiChoice = 'Scissors';
    }
    if (randomNumber === 4) {
        aiChoice = 'Lizard';
    }
    if (randomNumber === 5) {
        aiChoice = 'Spock';
    }
    aiChoiceDisplay.innerHTML = aiChoice;
}

function getResult() {
    if (playerChoice === aiChoice) {
        results = 'Thats a Draw - No points!';
    }
    if (playerchoice === 'rock' && aiChoice === 'paper') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'rock' && aiChoice === 'scissors') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'rock' && aiChoice === 'lizard') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerchoice === 'rock' && aiChoice === 'spock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'paper' && aiChoice === 'rock') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'paper' && aiChoice === 'scissors') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'paper' && aiChoice === 'lizard') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'paper' && aiChoice === 'spock') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'scissors' && aiChoice === 'rock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'scissors' && aiChoice === 'paper') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'scissors' && aiChoice === 'lizard') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'scissors' && aiChoice === 'spock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'lizard' && aiChoice === 'rock') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'lizard' && aiChoice === 'paper') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'lizard' && aiChoice === 'scissors') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'lizard' && aiChoice === 'spock') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'spock' && aiChoice === 'rock') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'spock' && aiChoice === 'paper') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
    if (playerChoice === 'spock' && aiChoice === 'scissors') {
        results = "Thats a Win! 1 point to you.";
        incrementPlayerScore();
    }
    if (playerChoice === 'spock' && aiChoice === 'lizard') {
        results = "Oh no, you've lost this round. 1 point to the Ai!";
        incrementAiScore();
    }
}

function incrementPlayerScore() {
    let oldscore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldscore;
}

function incrementAiScore() {
    let oldscore = parseInt(document.getElementById("ai-score").innerText);
    document.getElementById("ai-score").innerText = ++oldscore;
}

