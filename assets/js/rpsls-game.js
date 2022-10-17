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