import { expect } from 'chai';
import { DEAD } from '../CellState'
import Game from '../Game'
import Cell from '../Cell'

describe('Game of Life', () => {
  it('Should be initialized with a given state', () => {
    const state = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];

    const game = new Game(state);

    const cellState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ];

    expect(game.state).to.deep.equal(cellState);
  });
});