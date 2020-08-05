import Cell from './Cell'
import CellState from './CellState'

export default class Game {
  constructor(state) {
    this.numRows = state.length
    this.numCols = state[0].length
    this.state = state.map(row => row.map(cellState => new Cell(cellState)));
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  getNumOfAliveNeighbours(row, col) {
    const edgeCell = new Cell(CellState.DEAD);

    const rowAbove = this.state[row - 1];

    const topLeft = (row === 0 || col === 0) ? edgeCell : rowAbove[col - 1];
    const top = row === 0 ? edgeCell : rowAbove[col];
    const topRight = (row === 0 || col === this.numCols -1) ? edgeCell : rowAbove[col + 1];

    const rowBelow = this.state[row + 1];

    const bottomLeft = (col === 0 || row === this.numRows - 1) ? edgeCell : rowBelow[col - 1];
    const bottom = row === this.numRows - 1 ? edgeCell : rowBelow[col];
    const bottomRight = (row === this.numRows -1 || col === this.numCols - 1) ? edgeCell : rowBelow[col + 1];

    const thisRow = this.state[row];

    const left = col === 0 ? edgeCell : thisRow[col - 1];
    const right = col === this.numCols -1 ? edgeCell : thisRow[col + 1];

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