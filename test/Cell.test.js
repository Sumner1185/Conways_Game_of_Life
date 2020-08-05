import { expect } from 'chai'
import Cell from '../Cell'
import CellState from '../CellState'

describe('Cell', () => {
  it('Should be initialised with a cellState', () => {
    const cell = new Cell(CellState.ALIVE);
    expect(cell.state).to.equal(CellState.ALIVE);
  })
})