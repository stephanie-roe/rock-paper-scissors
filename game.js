var mild = ["rock", "paper", "scissors"];
var spicy = ["rock", "paper", "scissors", "lizard", "alien"];

class Game {
  constructor() {
    this.playerOne = playerOne,
    this.computer = computer,
    this.type = mild || spicy
  }
  checkForWin() {
    if (this.checkForDraw()) {
      return "it's a draw";
    } else if ((playerOne.choice === "rock" && computer.choice === "scissors" || computer.choice === "lizard") ||
      (playerOne.choice === "paper" && computer.choice === "rock" || computer.choice === "alien") ||
      (playerOne.choice === "scissors" && computer.choice === "paper" || computer.choice === "lizard") ||
      (playerOne.choice === "lizard" && computer.choice === "paper" || computer.choice === "alien") ||
      (playerOne.choice === "alien" && computer.choice === "scissors" || computer.choice === "rock")) {
      return "player one wins";
    } else {
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
    chooseYourFighter.classList.remove("hidden");
    changeGameButton.classList.remove("hidden");
  }
};
