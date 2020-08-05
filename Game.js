import Cell from './Cell'

export default class Game {
  constructor(state) {
    this.state = state.map(row => row.map(cellState => new Cell(cellState)));
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  getNumOfAliveNeighbours(row, col) {
    const rowAbove = this.state[row -1];
    
    const topLeft = rowAbove[col - 1];
    const top = rowAbove[col];
    const topRight = rowAbove[col + 1];

    return topLeft.state + top.state + topRight.state;
  }
}