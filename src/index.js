"use strict";

import "./style.css";
import { Ship } from "./modules/ships";
import { Game } from "./modules/gameCore";
import { RandomShips } from "./modules/computer";

const testShip1 = new Ship(3);
const testShip2 = new Ship(4);
const testShip3 = new Ship(1);

const test = new RandomShips(7,2);
console.log(test.getLength());
const testBoard = new Game(7);
testBoard.placeShip(test.getRandomRow(), test.getRandomStart(), 2);
//testBoard.placeShip(4, 3, testShip2.getLength());
//testBoard.placeShip(6, 0, testShip3.getLength());

console.log(testBoard.grid);
