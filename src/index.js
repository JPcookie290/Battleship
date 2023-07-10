"use strict";

import "./style.css";
import { Ship } from "./modules/ships";
import { Game } from "./modules/gameCore";
import { RandomShips } from "./modules/computer";

const testShip1 = new Ship(3);
const testShip2 = new Ship(4);
const testShip3 = new Ship(1);

const test = new RandomShips(7);

let num1 = test.getRow();
let num2 = test.getStart();
console.log(num1, num2);

const testBoard = new Game(7);
testBoard.createGrid();
testBoard.placeShip(test.getRow(), test.getStart(), testShip1.getLength());
//testBoard.placeShip(4, 3, testShip2.getLength());
//testBoard.placeShip(6, 0, testShip3.getLength());

console.log(testBoard.grid);
