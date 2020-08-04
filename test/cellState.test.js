import { expect } from "chai"

describe('CellState', () => {
  instanceof('Should have an ALIVE state', () => {
    expect(CellState.ALIVE).to.be(1);
  })
});