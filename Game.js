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
    const stateValues = {
      [CellState.ALIVE]: 1,
      [CellState.DEAD]: 0,
    }

    const cellAbove = (rowNum, colNum) => (
      (colNum === col - 1 && rowNum === row - 1)
      || (colNum === col && rowNum === row - 1)
      || (colNum === col + 1 && rowNum === row - 1)
    );

    const cellBelow = (rowNum, colNum) => (
      (colNum === col - 1 && rowNum === row  + 1)
      || (colNum === col && rowNum === row + 1)
      || (colNum === col + 1 && rowNum === row + 1)
    );

    const cellNextTo = (rowNum, colNum) => (
      (colNum === col - 1 && rowNum === row)
      || (colNum === col + 1 && rowNum === row)
    );

    let numNeighbours = 0;

    this.state.forEach((cellRow, rowNum) => {
      cellRow.forEach((cell, colNum) => {
      if (cellAbove(rowNum, colNum)
        || cellNextTo(rowNum, colNum)
        || cellBelow(rowNum, colNum)) {
          numNeighbours += stateValues[cell.state];
        }
      });
    });
    return numNeighbours;
  }

  nextState() {
    this.state = this.state.map((row, rowNum) => row.map((cell, colNum) => new Cell(cell.getNextState(this.getNumOfAliveNeighbours(rowNum, colNum)))))
  }
}
