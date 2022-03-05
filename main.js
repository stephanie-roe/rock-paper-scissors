// FIRST INTERACTION
//
// User clicks on the game, and then an new instance of the game class is created. Playerone and cpomputer, the two instances of the player class, could be an array of players within the game class.
//
// When a game option is clicked, the center area of the screen will shift from the button options to the choose your fighter options (inner HTMl). When one of the weapon buttons is clicked by the user, the computer will choose a random value and the checkforwin or checkfordraw functions will be invoked, and the screen will display what the result of the match is.
//
// Check for win and check for draw will be functions with conditionals that represent the game logic and will return a response of [player] wins or its a draw.

//VARIABLES-----------------------------------------------------------------------
// wins as a global variable, somehow connected to the player.wins value.
var chooseYourFighter = document.querySelector(".choose-your-fighter");
var gamePrompt = document.querySelector(".game-prompt");
var fighterPrompt = document.querySelector(".fighter-prompt");
var gameOptions = document.querySelector(".game-options");
var mildBox = document.querySelector("#mild");
var spicyBox = document.querySelector("#spicy");
var changeGameButton = document.querySelector(".change-game-button");
var rockIcon = document.querySelector(".rock");


//EVENT LISTENERS-----------------------------------------------------------------
//clicking on the game type + change game button
mildBox.addEventListener("click", displayMild);
spicyBox.addEventListener("click", displaySpicy);
changeGameButton.addEventListener("click", changeGame);
//clicking on the different icons
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon rock") {
    choices[0] = "rock"
    playerOne.choice = "rock"
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon paper") {
    choices[0] = "paper"
    playerOne.choice = "paper"
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon scissors") {
    choices[0] = "scissors"
    playerOne.choice = "scissors"

  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon lizard") {
    choices[0] = "lizard"
    playerOne.choice = "lizard"
  }
});
chooseYourFighter.addEventListener("click", function(event) {
  if (event.target.className === "fighter-icon alien") {
    choices[0] = "alien"
    playerOne.choice = "alien"
  }
});
//FUNCTIONS-----------------------------------------------------------------------
//display who wins based off of results from game.checkforwin/ checkfordraw.
// get random for computer
// display choose your fighter screen
// display the change game button
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
  // var mildGame = new Game("mild")
  // mildGame.type = "mild";
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
};

function changeGame() {
  chooseYourFighter.classList.add("hidden");
  fighterPrompt.classList.add("hidden");
  gamePrompt.classList.remove("hidden");
  gameOptions.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
};

// now I need to add an event listener to each of these fighter icons. When any of the icons are picked, it will be assigned to player.choice and then a function will be invoked for the computer to randomly choose from the array corresponding to the game type. These two selections will be pushed into an array of choices, which will be referenced in the methods within the game class that decide if the game has a winner or is a draw. Within the win function, it should increment the score of the winner by one.
