import { createTag, createMultiTags } from './functions'

class GameGrid {
    constructor(size){
        this.size = size;
        this.container = document.createElement("section")
        this.createGrid();
    }

    createGrid() {
        let gridSize = this.size * this.size;
        for (let i = 0; i < gridSize; i++) {
            const div = document.createElement("div");
            div.textContent = i;
            this.container.appendChild(div);
        }
    }
    
}

function createGameDisplay() {
    const description = createTag(null, 'section', 'description', 'description');
    //createTag(description, 'p', null, null, 'The game is played on two grids, one for the player and one for the computer.<br>The player has 5 ships to place on their grid.<br>Each ship occupies a number of consecutive squares on the grid.<br>The ships cannot overlap. After the placement the game begins.<br>Each round the player can guess on square on the computer grid, if a ship is found, it will be marked.<br>The first to sink the opponats ships wins.')
    
    //const game = createTag(null, 'section', null, 'display');
    //const player = createTag(game, 'div', null, "pDisplay");
    const pGrid = new GameGrid(7);
    //player.appendChild(pGrid);

    //const computer = createTag(game, 'div',null, "cDisplay");
    const cGrid = new GameGrid(7);
    console.log(cGrid);
    //computer.appendChild(cGrid)

}

export { createGameDisplay, GameGrid };