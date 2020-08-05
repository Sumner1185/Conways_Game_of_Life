import CellState from "./CellState";

export default class Cell {
  constructor(state) {
    this.state = state;
  }

  getNextState(numNeighbours) {
    if(this.state === CellState.ALIVE) {
      if (numNeighbours === 2 || numNeighbours === 3) {
        return CellState.ALIVE;
      }
    } else if (numNeighbours === 3) {
        return CellState.ALIVE
      }
    return CellState.DEAD;
  }

}