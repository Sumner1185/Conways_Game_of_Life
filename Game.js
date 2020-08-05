import Cell from './Cell'
import CellState from './CellState'

export default class Game {
  constructor(state) {
    this.state = state.map(row => row.map(cellState => new Cell(cellState)));
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  getNumOfAliveNeighbours(row, col) {
    const edgeCell = new Cell(CellState.DEAD);
    const rowAbove = this.state[row - 1];

    const topLeft = row === 0 ? edgeCell : rowAbove[col - 1];
    const top = row === 0 ? edgeCell : rowAbove[col];
    const topRight = row === 0 ? edgeCell : rowAbove[col + 1];

    const rowBelow = this.state[row + 1];

    const bottomLeft = rowBelow[col - 1];
    const bottom = rowBelow[col];
    const bottomRight = rowBelow[col + 1];

    const thisRow = this.state[row];

    const left = thisRow[col - 1];
    const right = thisRow[col + 1];

    const stateValues = {
      [CellState.ALIVE]: 1,
      [CellState.DEAD]: 0,
    }

    return [
      topLeft,
      top,
      topRight,
      left,
      right,
      bottomLeft,
      bottom,
      bottomRight
    ].reduce((sum, { state }) => sum + stateValues[state], 0);
  }
}