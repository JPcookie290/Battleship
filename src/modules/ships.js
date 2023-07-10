/* --------- Ship Function --------- */

class Ship {
  constructor(length) {
    this.length = length;
    //this.ship = [];
    this.hit = false;
    this.sunk = false;
  }

  getLength() {
    return this.length;
  }
}

export { Ship };
