class Player {
  constructor(name) {
    this.name = name;
    // this.token;
    this.choice;
    this.fighterIcon;
    this.wins = 0;
    // this.fighter;
    this.icons = {
      rock: `<img class="rock" src="./assets/003-cave.png" alt="rock icon">`,
      paper: `<img class="paper" src="./assets/001-documents.png" alt="paper icon">`,
      scissors: `<img class="scissors" src="./assets/002-scissors.png" alt="scissors icon">`,
      lizard: `<img class="lizard" src="./assets/010-lizard.png" alt="lizard icon">`,
      alien: `<img class="alien" src="./assets/011-alien.png" alt="alien icon">`}
  }
  savesWinsToStorage() {
    // increment win based on the outcome of the game
  }
  retrieveWinsFromStorage() {
    // maybe store wins as a variable externally and then refernce that somehow
    // timeout feature ???
  }
  takeTurnPlayerOne() {
    return this.choice;
    // if (this.name === "playerOne") {
    //   this.choice = choice;
    //   choices.push(this.choice);
  }
  takeTurnComputer(newGame) {
    if (this.name === "computer") {
      this.choice = newGame.type[getRandomIndex(newGame.type)];
    }
  }
};
