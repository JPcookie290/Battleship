"use strict";

import "./style.css";
import { Ship } from "./modules/ships";
import { GameBoards } from "./modules/gameboard";
import { RandomSpot } from "./modules/computer";
import { createTag, createMultiTags } from './modules/functions'
import { createHeader } from "./modules/header";
import { createGameDisplay, GameGrid } from "./modules/gameDisplay";
import { createFooter } from "./modules/footer";



function init() {
    //createHeader();
    createGameDisplay();
    //createFooter();
}

/*
*/

init()