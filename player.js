class Player {
  constructor(name, choice, game) {
    this.name = name;
    this.wins = 0;
    if (this.name === "playerOne") {
      this.choice = choice;
    // } else if (this.name === "computer") {
      // this.choice = game.type[getRandomIndex(game.type)];
    }
  }
  // savesWinsToStorage() {
  //   // increment win based on the outcome of the game
  // }
  // retrieveWinsFromStorage() {
  //   // maybe store wins as a variable externally and then refernce that somehow
  //   // timeout feature ???
  // }
  takeTurn(choice, game) {
    // be invoked in the choose your fighter screen when one of the icons is clicked. (player one)
    // be invoked to choose a random option based on that the name of the player is.
    //conditionals here.
  }
};
