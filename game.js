var mild = ["rock", "paper", "scissors"];
var spicy = ["rock", "paper", "scissors", "lizard", "alien"];

class Game {
  constructor() {
    this.players = [playerOne, computer],
    this.type = mild || spicy
  }
  checkGameBoard() {
    //store in an array what the two choices were for each round
  }
  checkGameType() {
    // verify which version of the game is being played
  }
  checkForWin() {
    if (this.checkForDraw()) {
      return "it's a draw";
    } else if ((playerOne.choice === "rock" && computer.choice === "scissors" || "lizard") ||
      (playerOne.choice === "paper" && computer.choice === "rock" || "alien") ||
      (playerOne.choice === "scissors" && computer.choice === "paper" || "lizard") ||
      (playerOne.choice === "lizard" && computer.choice === "paper" || "alien") ||
      (playerOne.choice === "alien" && computer.choice === "scissors" || "rock")) {
      playerOne.wins ++;
      return "player one wins";
    } else {
      computer.wins ++;
      return "computer wins";
    }
  }
  checkForDraw() {
    if (playerOne.choice === computer.choice) {
    return true;
  }
    return false;
  }
  resetGame() {
    // I tink the setTimeout goes here 
    // change game button, will create a new instance of the game class
  }
};
