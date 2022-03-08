class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.choice;
    this.fighterIcon;
    this.wins = 0;
    this.icons = {
      rock: `<img class="rock" src="./assets/003-cave.png" alt="rock icon">`,
      paper: `<img class="paper" src="./assets/001-documents.png" alt="paper icon">`,
      scissors: `<img class="scissors" src="./assets/002-scissors.png" alt="scissors icon">`,
      lizard: `<img class="lizard" src="./assets/010-lizard.png" alt="lizard icon">`,
      alien: `<img class="alien" src="./assets/011-alien.png" alt="alien icon">`};
  }
  takeTurnPlayerOne() {
    return this.choice;
  }
  takeTurnComputer(newGame) {
    if (this.name === "computer") {
      this.choice = newGame.type[getRandomIndex(newGame.type)];
    }
  }
};
