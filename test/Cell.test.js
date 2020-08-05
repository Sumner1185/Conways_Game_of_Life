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
    const nextStateWith1Neighbour = cell.getNextState(1);
    expect(nextStateWith1Neighbour).to.equal(CellState.DEAD);

    const nextStateWith0Neighbours = cell.getNextState(0);
    expect(nextStateWith0Neighbours).to.equal(CellState.DEAD);
  })

  it('Should live with 2 or 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith2Neighbours = cell.getNextState(2);
    expect(nextStateWith2Neighbours).to.equal(CellState.ALIVE);

    const nextStateWith3Neighbours = cell.getNextState(3);
    expect(nextStateWith3Neighbours).to.equal(CellState.ALIVE);
  })

  it('Should die with more than 3 neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith4Neighbours = cell.getNextState(4);
    expect(nextStateWith4Neighbours).to.equal(CellState.DEAD);

    const nextStateWith5Neighbours = cell.getNextState(5);
    expect(nextStateWith5Neighbours).to.equal(CellState.DEAD);
  })

  it('Should come alive with exactly 3 neighbours', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith3Neighbours = cell.getNextState(3);
    expect(nextStateWith3Neighbours).to.equal(CellState.ALIVE);
  })
})