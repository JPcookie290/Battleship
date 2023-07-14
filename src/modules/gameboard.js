import { Ship } from "./ships";

/* --------- Game Function --------- */

class GameBoards {
  constructor(size) {
    this.size = size;
    this.grid = [];
    this.shiplist = [];
    this.createShips();
  }

  createGrid() {
    for (let index = 0; index < this.size; index++) {
      const inner = [];
      for (let index = 0; index < this.size; index++) {
        inner.push(0);
      }
      this.grid.push(inner);
    }
    
  }

  createShips() {
    const destroyer = new Ship(2);
    const submarine = new Ship(3);
    const cruiser = new Ship(4);
    const battleship = new Ship(5);
    const carrier = new Ship(6);

    this.shiplist.push(destroyer, submarine, cruiser, battleship, carrier);
  }

  placeShip(StartRow, StartColumn, shipIndex) {
    const ship = this.shiplist[shipIndex];
    let shipLength = ship.getLength();
    for (let i = 0; i < shipLength; i++) {
      this.grid[StartRow][StartColumn + i] = ship.getId();
    }
  }
 takingShoot(row, column) {

    //-- 0 = water --//-- 2,3,4,5,6 = ships --//-- 7 = hit --//-- 8 = miss --//

    if (this.grid[row][column] === 2 || this.grid[row][column] === 3 
      || this.grid[row][column] === 4 || this.grid[row][column] === 5 
      || this.grid[row][column] === 6 ) {
      this.grid[row][column] = 7;
    } else if (this.grid[row][column] === 0) {
      this.grid[row][column] = 8;
    } else {
      console.log('Spot already shot.');
    }
  }
}


export { GameBoards };
