import { Ship } from "./ships";

/* --------- Game Function --------- */

class GameBoards {
  constructor(size) {
    this.size = size;
    this.grid = [];
    this.ships = [];
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

  createShips() {
    const destroyer = new Ship(2);
    const submarine = new Ship(3);
    const cruiser = new Ship(3);
    const battleship = new Ship(4);
    const carrier = new Ship(5);

    this.ships.push(destroyer, submarine, cruiser, battleship, carrier);
  }

  placeShips(StartRow, StartColumn) {
    const ships = this.ships;
    ships.forEach(item => {
      for (let i = 0; i < item.getLength; i++) {
        this.grid[StartRow][StartColumn + i] = 1;
      }
    });

  }

  takingShoot(row, column) {
    if (this.grid[row][column] === 1) {
      this.grid[row][column] = 2;
    } else if (this.grid[row][column] === 0) {
      this.grid[row][column] = 3;
    }
    else {
      console.log('Spot already shot.');
    }
  }
}

export { GameBoards };
