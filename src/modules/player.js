/* --------- Player Function --------- */

class Player {
  constructor(name) {
    this.name = name;
    this.played = 0;
    this.won = 0;
    this.lost = 0;
  }

  getName() {
    return this.name;
  }

  getPlayed() {
    return this.played;
  }

  getWon() {
    return this.won;
  }
  getLost() {
    return this.lost;
  }
}

export { Player };
