class RandomShips {
  constructor(size) {
    this.row = Math.floor(Math.random * size);
    this.start = Math.floor(Math.random * size);
  }
  getRow() {
    return this.row;
  }
  getStart() {
    return this.start;
  }
}

export { RandomShips };
