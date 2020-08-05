import { expect } from "chai"
import CellState from '../CellState'

describe('CellState', () => {
  it('Should have an ALIVE state', () => {
    expect(CellState.ALIVE).to.equal(1);
  })
});