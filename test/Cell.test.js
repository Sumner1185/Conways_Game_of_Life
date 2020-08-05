import { expect } from 'chai'
import Cell from '../Cell'
import CellState from '../CellState'

describe('Cell', () => {
  it('Should be initialised with a cellState', () => {
    const aliveCell = new Cell(CellState.ALIVE);
    expect(aliveCell.state).to.equal(CellState.ALIVE);

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).to.equal(CellState.DEAD);
  })

  it('Should die if it has fewer than 2 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextState = cell.getNextState(1);
    expect(nextState).to.equal(CellState.DEAD)
  })
})