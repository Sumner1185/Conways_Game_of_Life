import { expect } from 'chai';
import { DEAD } from '../CellState'
import Game from '../Game'
import Cell from '../Cell'

const deadState = [
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
];

describe('Game of Life', () => {
  it('Should be initialized with a given state', () => {
    const game = new Game(deadState);

    const cellState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ];

    expect(game.state).to.deep.equal(cellState);
  });

  it('Should retrieve a cell at a given row or column', () => {
    const game = new Game(deadState);
    const cell = game.getCell(0,0);
    expect(cell).to.be.an.instanceOf(Cell);
    expect(cell.state).to.equal(deadState[0][0]);
  });
});