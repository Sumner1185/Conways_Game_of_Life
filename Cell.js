import CellState from "./CellState";

export default class Cell {
  constructor(state) {
    if (Object.values(CellState).indexOf(state) === -1) {
      throw new Error('Invalid State')
    }
    this.state = state;
  }

  getNextState(numNeighbours) {
    if(this.state === CellState.ALIVE) {
      if (numNeighbours === 2 || numNeighbours === 3) {
        return this.state;
      }
    } else if (numNeighbours === 3) {
        return CellState.ALIVE
      }
    return CellState.DEAD;
  }

}