//VARIABLES----------------------------------------------------------------
// wins as a global variable, somehow connected to the player.wins value.
var chooseYourFighter = document.querySelector(".choose-your-fighter");
var gamePrompt = document.querySelector(".game-prompt");
var fighterPrompt = document.querySelector(".fighter-prompt");
var gameOptions = document.querySelector(".game-options");
var mildBox = document.querySelector("#mild");
var spicyBox = document.querySelector("#spicy");
var changeGameButton = document.querySelector(".change-game-button");
var rockIcon = document.querySelector(".rock");
var results = document.querySelector(".results")
var playAgainButton = document.querySelector(".play-again-button");
var newGame;
var playerOneWins = document.querySelector("#playerOneWins");
var computerWins = document.querySelector("#computerWins")
// var choices = [];
computer = new Player("computer", `<img class="player-icon" src="./assets/006-brain.png" alt="brain">`);
playerOne = new Player("playerOne", `<img class="player-icon" src="./assets/007-desktop.png" alt="computer">`);

//EVENT LISTENERS----------------------------------------------------------
mildBox.addEventListener("click", displayMild);
spicyBox.addEventListener("click", displaySpicy);
changeGameButton.addEventListener("click", changeGame);


chooseYourFighter.addEventListener("click", function(event) {
  playerOne.choice = event.target.className;
  playerOne.fighterIcon = newGame.playerOne.icons[playerOne.choice];
  computer.takeTurnComputer(newGame);
  computer.fighterIcon = newGame.computer.icons[computer.choice];
  newGame.checkForWin();
  displayResults();
  setTimeout(playAgain, 2000);
})
//FUNCTIONS-----------------------------------------------------------------------
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayMild() {
  startGame();
  chooseYourFighter.innerHTML = "";
  chooseYourFighter.innerHTML += `<img class="rock" src="./assets/003-cave.png" alt="rock icon">
  <img class="paper" src="./assets/001-documents.png" alt="paper icon">
  <img class="scissors" src="./assets/002-scissors.png" alt="scissors icon">`;
  chooseYourFighter.classList.remove("hidden");
  fighterPrompt.classList.remove("hidden");
  gamePrompt.classList.add("hidden");
  gameOptions.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
};

function displaySpicy() {
  startGame();
  chooseYourFighter.innerHTML = "";
  displayMild();
  chooseYourFighter.innerHTML += `<img class="lizard" src="./assets/010-lizard.png" alt="lizard icon">
  <img class="alien" src="./assets/011-alien.png" alt="alien icon">`;
  chooseYourFighter.classList.remove("hidden");
  fighterPrompt.classList.remove("hidden");
  gamePrompt.classList.add("hidden");
  gameOptions.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
};

function changeGame() {
  chooseYourFighter.classList.add("hidden");
  fighterPrompt.classList.add("hidden");
  gamePrompt.classList.remove("hidden");
  gameOptions.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
};

function startGame() {
  newGame = new Game();
};

function displayDraw() {
  results.innerHTML = "";
  results.innerHTML += `<div class="results-announcement">
  <img class="results-icon" src="./assets/009-abstract-shape.png" alt="text decoration">
  <h2>it's a draw</h2>
  <img class="results-icon" src="./assets/009-abstract-shape.png" alt="text decoration">
  </div>`
  fighterPrompt.classList.add("hidden");
  gamePrompt.classList.add("hidden");
  results.classList.remove("hidden");
  chooseYourFighter.classList.add("hidden");
  changeGameButton.classList.add("hidden");
};

function displayWin() {
  results.innerHTML = "";
  if (newGame.checkForWin() === "player one wins") {
    results.innerHTML += `<div class="results-announcement">
    <img class="results-icon" src="./assets/008-magic.png" alt="text decoration">
    <h2>player one wins</h2>
    <img class="results-icon" src="./assets/008-magic.png" alt="text decoration">
    </div>`
    playerOne.wins ++
    playerOneWins.innerHTML = `wins: ${playerOne.wins}`
    fighterPrompt.classList.add("hidden");
    gamePrompt.classList.add("hidden");
    results.classList.remove("hidden");
    chooseYourFighter.classList.add("hidden");
    changeGameButton.classList.add("hidden");
  } else if (newGame.checkForWin() === "computer wins") {
    results.innerHTML += `<div class="results-announcement">
    <img class="results-icon" src="./assets/008-magic.png" alt="text decoration">
    <h2>computer wins</h2>
    <img class="results-icon" src="./assets/008-magic.png" alt="text decoration">
    </div>`
    computer.wins ++
    computerWins.innerHTML = `wins: ${computer.wins}`
    fighterPrompt.classList.add("hidden");
    gamePrompt.classList.add("hidden");
    results.classList.remove("hidden");
    chooseYourFighter.classList.add("hidden");
    changeGameButton.classList.add("hidden");
  }
};

function displayResults() {
  if (newGame.checkForDraw()) {
    displayDraw()
    results.innerHTML += playerOne.fighterIcon;
    results.innerHTML += computer.fighterIcon;
  } else {
    displayWin()
    results.innerHTML += playerOne.fighterIcon;
    results.innerHTML += computer.fighterIcon;
  }
};

function playAgain() {
  newGame.resetGame();
  results.classList.add("hidden");
  fighterPrompt.classList.remove("hidden");
};

// These two selections are being pushed into an array of choices, which will be referenced in the methods within the game class that decide if the game has a winner or is a draw. Within the win function, it should increment the score of the winner by one.

//next up- how do we get the player's score to update on the dom? It already is in the data model. Possibly another function using inner html or inner text and updating that element for either player.
