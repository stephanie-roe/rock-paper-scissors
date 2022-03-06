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
var playAgainButton = document.querySelector(".play-again-button")
var newGame;
var choices = [];
computer = new Player("computer");
playerOne = new Player("playerOne");

//EVENT LISTENERS----------------------------------------------------------
mildBox.addEventListener("click", displayMild);
spicyBox.addEventListener("click", displaySpicy);
changeGameButton.addEventListener("click", changeGame);

chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon rock") {
    choices[0] = "rock";
    playerOne.choice = "rock";
    chooseComputer();
    newGame.checkForWin();
    displayResults();
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon paper") {
    choices[0] = "paper";
    playerOne.choice = "paper";
    chooseComputer();
    newGame.checkForWin();
    displayResults();
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon scissors") {
    choices[0] = "scissors";
    playerOne.choice = "scissors";
    chooseComputer();
    newGame.checkForWin();
    displayResults();
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon lizard") {
    choices[0] = "lizard";
    playerOne.choice = "lizard";
    chooseComputer();
    newGame.checkForWin();
    displayResults();
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon alien") {
    choices[0] = "alien";
    playerOne.choice = "alien";
    chooseComputer();
    newGame.checkForWin();
    displayResults();
  }
});
//FUNCTIONS-----------------------------------------------------------------------
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function chooseComputer() {
  if (choices[0] !== undefined) {
    computer.choice = newGame.type[getRandomIndex(newGame.type)];
    choices.push(computer.choice);
  }
};

function displayMild() {
  startGame();
  chooseYourFighter.innerHTML = "";
  chooseYourFighter.innerHTML += `<img class="fighter-icon rock" src="./assets/003-cave.png" alt="rock icon">
  <img class="fighter-icon paper" src="./assets/001-documents.png" alt="paper icon">
  <img class="fighter-icon scissors" src="./assets/002-scissors.png" alt="scissors icon">`;
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
  chooseYourFighter.innerHTML += `<img class="fighter-icon lizard" src="./assets/010-lizard.png" alt="lizard icon">
  <img class="fighter-icon alien" src="./assets/011-alien.png" alt="alien icon">`;
  chooseYourFighter.classList.remove("hidden");
  fighterPrompt.classList.remove("hidden");
  gamePrompt.classList.add("hidden");
  gameOptions.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
};

function changeGame() {
  choices = [];
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
  results.innerHTML += `<img class="results-icon" src="./assets/009-abstract-shape.png" alt="text decoration">
  <h2>it's a draw</h2>
  <img class="results-icon" src="./assets/009-abstract-shape.png" alt="text decoration">`
  fighterPrompt.classList.add("hidden");
  gamePrompt.classList.add("hidden");
  results.classList.remove("hidden");
  chooseYourFighter.classList.add("hidden");
  changeGameButton.classList.add("hidden");
};

function displayWin() {
  results.innerHTML = "";
  if (newGame.checkForWin() === "player one wins") {
    results.innerHTML += `<img class="results-icon" src="./assets/008-magic.png" alt="text decoration">
    <h2>player one wins</h2>
    <img class="results-icon" src="./assets/008-magic.png" alt="text decoration">`
    fighterPrompt.classList.add("hidden");
    gamePrompt.classList.add("hidden");
    results.classList.remove("hidden");
    chooseYourFighter.classList.add("hidden");
    changeGameButton.classList.add("hidden");
  } else if (newGame.checkForWin() === "computer wins") {
    results.innerHTML += `<img class="results-icon" src="./assets/008-magic.png" alt="text decoration">
    <h2>computer wins</h2>
    <img class="results-icon" src="./assets/008-magic.png" alt="text decoration">`
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
  } else {
    displayWin()
  }
};

function playAgain() {
  results.classList.add("hidden");
  changeGame()
}

// These two selections are being pushed into an array of choices, which will be referenced in the methods within the game class that decide if the game has a winner or is a draw. Within the win function, it should increment the score of the winner by one.

//next up- how do we get the player's score to update on the dom? It already is in the data model. Possibly another function using inner html or inner text and updating that element for either player.
