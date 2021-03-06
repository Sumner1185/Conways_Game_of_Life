import { expect } from 'chai'

import CellState from '../CellState'
import Game from '../Game'
import Cell from '../Cell'

const { DEAD, ALIVE } = CellState

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
    const aliveCell = newGame.getCell(0, 0);
    expect(aliveCell).to.be.an.instanceOf(Cell);
    expect(aliveCell.state).to.equal(gameState[0][0]);

    const deadCell = newGame.getCell(1, 1);
    expect(deadCell).to.be.an.instanceOf(Cell);
    expect(deadCell.state).to.equal(gameState[1][1]);
  });

  it('Should get the number of alive neighbours above a given cell', () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [DEAD, ALIVE, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(1, 1);
    expect(numNeighbours).to.equal(3);
  });

  it('Should get the number of alive neighbours below a given cell', () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [DEAD, ALIVE, DEAD],
      [ALIVE, ALIVE, ALIVE],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(1, 1);
    expect(numNeighbours).to.equal(3);
  });
  
  it('Should get the number of alive neighbours next to a given cell', () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [ALIVE, ALIVE, ALIVE],
      [DEAD, DEAD, DEAD],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(1, 1);
    expect(numNeighbours).to.equal(2);
  });

  it('Should get the number of alive neighbours for a given cell', () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [ALIVE, ALIVE, ALIVE],
      [ALIVE, ALIVE, ALIVE],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(1, 1);
    expect(numNeighbours).to.equal(8);
  });

  it('Should get the number of alive neighbours for a cell in the top row', () => {
    const gameState = [
      [ALIVE, ALIVE, ALIVE],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(0, 1);
    expect(numNeighbours).to.equal(2);
  });

  it('Should get the number of alive neighbours for a cell in the first column', () => {
    const gameState = [
      [ALIVE, ALIVE, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(0, 0);
    expect(numNeighbours).to.equal(1);
  });

  it('Should get the number of alive neighbours for a cell in the first column', () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(1, 0);
    expect(numNeighbours).to.equal(0);
  });

  it('Should get the number of alive neighbours for a cell in the bottom row', () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [ALIVE, ALIVE, ALIVE],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(2, 1);
    expect(numNeighbours).to.equal(2);
  });

  it('Should get the number of alive neighbours for a cell in the last column', () => {
    const gameState = [
      [DEAD, DEAD, ALIVE],
      [DEAD, DEAD, ALIVE],
      [DEAD, DEAD, ALIVE],
    ];
    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(1, 2);
    expect(numNeighbours).to.equal(2);
  });

  it('Should get the number of alive neighbours for a cell in a big grid', () => {
    const gameState = [
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, ALIVE, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
    ];

    const game = new Game(gameState);
    const numNeighbours = game.getNumOfAliveNeighbours(4, 4);
    expect(numNeighbours).to.equal(8);
  });

  it('Should create the next state of the game', () => {
    const gameState = [
      [DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD],
    ];

    const game = new Game(gameState);

    const nextState = game.nextState();

    const expectedState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ];

    expect(nextState).to.deep.equal(expectedState)
  });
});