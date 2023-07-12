import { createTag, createMultiTags } from './functions'

function createGameDisplay() {
    const description = createTag(null, 'section', 'description', 'description');
    createTag(description, 'p', null, null, 'The game is played on two grids, one for the player and one for the computer.<br>The player has 5 ships to place on their grid.<br>Each ship occupies a number of consecutive squares on the grid.<br>The ships cannot overlap. After the placement the game begins.<br>Each round the player can guess on square on the computer grid, if a ship is found, it will be marked.<br>The first to sink the opponats ships wins.')
    
    const game = createTag(null, 'section', null, 'display');
    const player = createTag(game, 'div');

    const computer = createTag(game, 'div')
}

export { createGameDisplay };