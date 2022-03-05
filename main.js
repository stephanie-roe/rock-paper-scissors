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

var newGame = new Game;

//EVENT LISTENERS----------------------------------------------------------
mildBox.addEventListener("click", displayMild);
spicyBox.addEventListener("click", displaySpicy);
changeGameButton.addEventListener("click", changeGame);

chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon rock") {
    choices[0] = "rock"
    playerOne.choice = "rock"
    chooseComputer()
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon paper") {
    choices[0] = "paper"
    playerOne.choice = "paper"
    chooseComputer()
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon scissors") {
    choices[0] = "scissors"
    playerOne.choice = "scissors"
    chooseComputer()
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon lizard") {
    choices[0] = "lizard"
    playerOne.choice = "lizard"
    chooseComputer()
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon alien") {
    choices[0] = "alien"
    playerOne.choice = "alien"
    chooseComputer()
  }
});
//FUNCTIONS-----------------------------------------------------------------------
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function chooseComputer() {
  if (choices[0] !== undefined) {
    computer.choice = newGame.type[getRandomIndex(newGame.type)]
    choices.push(computer.choice)
  }
};

function displayMild() {
  chooseYourFighter.innerHTML = "";
  chooseYourFighter.innerHTML += `<img class="fighter-icon rock" src="./assets/003-cave.png" alt="rock icon">
  <img class="fighter-icon paper" src="./assets/001-documents.png" alt="paper icon">
  <img class="fighter-icon scissors" src="./assets/002-scissors.png" alt="scissors icon">`;
  chooseYourFighter.classList.remove("hidden");
  fighterPrompt.classList.remove("hidden");
  gamePrompt.classList.add("hidden");
  gameOptions.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  newGame.type = mild;
};

function displaySpicy() {
  chooseYourFighter.innerHTML = "";
  displayMild();
  chooseYourFighter.innerHTML += `<img class="fighter-icon lizard" src="./assets/010-lizard.png" alt="lizard icon">
  <img class="fighter-icon alien" src="./assets/011-alien.png" alt="alien icon">`;
  chooseYourFighter.classList.remove("hidden");
  fighterPrompt.classList.remove("hidden");
  gamePrompt.classList.add("hidden");
  gameOptions.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  newGame.type = spicy;
};

function changeGame() {
  choices = []
  chooseYourFighter.classList.add("hidden");
  fighterPrompt.classList.add("hidden");
  gamePrompt.classList.remove("hidden");
  gameOptions.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
};

//display who wins based off of results from game.checkforwin/ checkfordraw. This function will be invoked at the end of the event target listener for each option.

// These two selections are being pushed into an array of choices, which will be referenced in the methods within the game class that decide if the game has a winner or is a draw. Within the win function, it should increment the score of the winner by one.

// Check for win and check for draw will be functions with conditionals that represent the game logic and will return a response of [player] wins or its a draw.
