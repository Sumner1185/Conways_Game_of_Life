import CellState from "./CellState";

export default class Cell {
  constructor(state) {
    this.state = state;
  }

  getNextState(numNeighbours) {
    if (numNeighbours < 2) {
      return CellState.DEAD;
    } else if (numNeighbours ===2 || numNeighbours === 3) {
      return CellState.ALIVE;
    }
    return CellState.DEAD
  }
}