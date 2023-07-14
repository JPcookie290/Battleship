/* --------- Ship Function --------- */

class Ship {
  constructor(length) {
    this.id = length;
    this.length = length;
    //this.ship = [];
    this.hit = false;
    this.sunk = false;
  }

  getId() {
    console.log(this.id);
    return this.id;
  }
  getLength() {
    console.log(this.length);
    return this.length;
  }
}

export { Ship };
