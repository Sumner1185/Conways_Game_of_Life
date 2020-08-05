import CellState from "./CellState";

export default class Cell {
  constructor(state) {
    this.state = state;
  }

  getNextState(numNeighbours) {
    if(numNeighbours < 2) {
      return CellState.DEAD;
    }
    return CellState.ALIVE;
  }
}