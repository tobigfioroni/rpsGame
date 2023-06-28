function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function showResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

function showSelections(playerSelection, computerSelection) {
    const selectionMapping = {
        rock: '<i class="fas fa-hand-rock"></i>',
        paper: '<i class="fas fa-hand-paper"></i>',
        scissors: '<i class="fas fa-hand-scissors"></i>'
    };

    const playerSelectionElement = document.getElementById('playerSelection');
    const computerSelectionElement = document.getElementById('computerSelection');

    playerSelectionElement.innerHTML = `${playerSelection} ${selectionMapping[playerSelection]}`;
    computerSelectionElement.innerHTML = `${computerSelection} ${selectionMapping[computerSelection]}`;
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    showResult(result);
    showSelections(playerSelection, computerSelection);
}

document.getElementById('rock').addEventListener('click', function () {
    game('rock');
});

document.getElementById('paper').addEventListener('click', function () {
    game('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
    game('scissors');
});