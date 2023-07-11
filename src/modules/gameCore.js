import { Ship } from "./ships";

/* --------- Game Function --------- */

class Game {
  constructor(size) {
    this.size = size;
    this.grid = [];
  }

  createGrid() {
    for (let index = 0; index < this.size; index++) {
      const inner = [];
      for (let index = 0; index < this.size; index++) {
        inner.push(0);
      }
      this.grid.push(inner);
    }
    return this.grid;
  }

  placeShip(shipStartRow, shipStartPoint, shipLength) {
    for (let i = 0; i < shipLength; i++) {
      this.grid[shipStartRow][shipStartPoint + i] = 1;
    }
  }
}

export { Game };
 