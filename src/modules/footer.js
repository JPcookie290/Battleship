import { createTag, createMultiTags } from './functions'

function createFooter() {
    const foot = createTag(null,'footer');
    const pScore = createTag(foot, 'div', null , "p_score");
    createTag(pScore, 'h2', null, null, 'Player');
    createTag(pScore, 'h2', "p_score");

    const cScore = createTag(foot, 'div', null, "c_score");
    createTag(cScore, 'h2', null, null, 'Computer');
    createTag(cScore, 'h2', "c_score");
}

export { createFooter };