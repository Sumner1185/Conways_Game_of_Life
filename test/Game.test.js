import { expect } from 'chai';
import { DEAD } from '../CellState'
import { ALIVE } from '../CellState'
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

    const gameState = [
      [ALIVE, DEAD],
      [DEAD, ALIVE],
    ];
    const newGame = new Game(gameState);
    const aliveCell = newGame.getCell(0,0);
    expect(aliveCell).to.be.an.instanceOf(Cell);
    expect(aliveCell.state).to.equal(gameState[0][0]);

    const deadCell = newGame.getCell(1,1);
    expect(deadCell).to.be.an.instanceOf(Cell);
    expect(deadCell.state).to.equal(gameState[1][1]);
  });
});