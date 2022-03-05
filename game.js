var computer = new Player("computer");
var playerOne = new Player("playerOne");
var mild = ["rock", "paper", "scissors"];
var spicy = ["rock", "paper", "scissors", "lizard", "alien"];
var choices = [];

class Game {
  constructor(type) {
    this.players = [playerOne, computer],
    this.type = type
  }
  checkGameBoard() {
    //store in an array what the two choices were for each round
  }
  checkGameType() {

    // verify which version of the game is being played
  }
  checkForWin() {
    // game logic if they are not strictly equal to one another
  }
  checkForDraw() {
    // if (playerOne.choice !== computer.choice)
    // game logic if they are strictly equal
  }
  resetGame() {
    // change game button, will create a new instance of the game class
  }
};
