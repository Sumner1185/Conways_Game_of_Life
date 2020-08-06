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

    let numNeighbours = 0;

    this.state.forEach((cellRow, rowNum) => {
      cellRow.forEach((cell, colNum) => {
      if ((colNum === col - 1 && rowNum === row - 1)
        || (colNum === col && rowNum === row - 1)
        || (colNum === col + 1 && rowNum === row - 1)) {
          numNeighbours += stateValues[cell.state];
        } else if ((colNum === col - 1 && rowNum === row)
        || (colNum === col + 1 && rowNum === row)) {
          numNeighbours += stateValues[cell.state];
        } else if ((colNum === col - 1 && rowNum === row  + 1)
        || (colNum === col && rowNum === row + 1)
        || (colNum === col + 1 && rowNum === row + 1)) {
          numNeighbours += stateValues[cell.state];
        }
      });
    });

    return numNeighbours;
  }
}
