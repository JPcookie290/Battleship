class RandomShips {
  constructor(gridSize, length) {
    this.gridSize = gridSize;
    this.length = length;
  }
  getRandomRow() {
    let randomRow = Math.floor(Math.random() * this.size);
    return randomRow;
  }
  getRandomStart() {
    let randomStart = Math.floor(Math.random() * this.size);
    return randomStart;
  }
  getLength() {
    return this.length
  }
}

export { RandomShips };
