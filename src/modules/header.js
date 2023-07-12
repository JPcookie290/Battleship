import { createTag, createMultiTags } from './functions'

function createHeader() {
    const head = createTag(null, 'header');
    const heading = createTag(head, 'h1', null, null, 'Battleship');
}

export { createHeader };