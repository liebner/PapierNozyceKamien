
const playerPointsSpan = document.querySelector('.player-points');
const compPointsSpan = document.querySelector('.comp-points');
const choiceButton = document.querySelectorAll('.options button');
const playerChoiceSpan = document.querySelector('.player-choice');
const compChoiceSpan = document.querySelector('.comp-choice');
const resultText = document.querySelector('.result-text');
const resetGameButton = document.querySelector('.reset-game');
const div = document.querySelector('div.choices');


// zmienne ktore przechowuja zmienne wartosci 
let playerPoint = 0;
let compPoint = 0;
let playerChoice = "";
let compChoice = "";
const randomSelect = ["ROCK", "PAPER", "SCISSORS"];

// funkcja ktora przypisuje utworzone Zmienne let do elementow w HTML 
function SetGame() {
    playerPointsSpan.innerHTML = playerPoint;
    compPointsSpan.innerHTML = compPoint;
    resultText.textContent = 'Chose your weapon ;)';
}

function playerSelect(e) {

    choiceButton.forEach(button => button.classList.remove('on'));
    // console.log(e.target);
    div.classList.add('active');
    playerChoice = e.target.dataset.option;
    playerChoiceSpan.textContent = playerChoice;
    e.target.classList.add('on')
    compSelect();
}


function compSelect() {


    const randomIndex = Math.floor(Math.random() * randomSelect.length);
    compChoice = randomSelect[randomIndex];
    compChoiceSpan.textContent = compChoice;
    showResult()
}

function showResult() {

    resultText.classList.remove('winColor', 'drawColor', 'lostColor');

    if (playerChoice === "PAPER" && compChoice === "ROCK"
        || playerChoice === "ROCK" && compChoice === "SCISSORS"
        || playerChoice === "SCISSORS" && compChoice === "PAPER") {

        resultText.textContent = 'YOU WIN!'
        resultText.classList.add('winColor')
        playerPoint++
        playerPointsSpan.innerHTML = playerPoint;

    }
    else if (playerChoice === compChoice) {

        resultText.textContent = 'DRAW'
        resultText.classList.add('drawColor')



    }

    else {

        resultText.textContent = 'YOU LOST :('
        resultText.classList.add('lostColor')
        compPoint++
        compPointsSpan.innerHTML = compPoint;

    }
}

function ResetGame() {
    playerPoint = 0;
    compPoint = 0;
    resultText.classList.remove('winColor', 'drawColor', 'lostColor')
    div.classList.remove('active')
    choiceButton.forEach(button => button.classList.remove('on'));
    SetGame()
}


resetGameButton.addEventListener('click', ResetGame);

document.addEventListener('DOMContentLoaded', SetGame);

choiceButton.forEach((button) =>
    button.addEventListener('click', playerSelect));