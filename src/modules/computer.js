class RandomSpot {
  constructor(gridSize) {
    this.gridSize = gridSize;
  }
  getRandomRow() {
    let randomRow = Math.floor(Math.random() * this.gridSize);
    return randomRow;
  }
  getRandomStart() {
    let randomStart = Math.floor(Math.random() * this.gridSize);
    return randomStart;
  }
}

export { RandomSpot };
