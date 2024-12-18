import './style.css';
import { boardRender } from './renderBoard.js';
import { gameStart } from './gameStart.js';
import { checkGame } from './checkTheGame.js';

export class Ship {
    constructor(length, damage) {
        this.length = length;
        this.damage = damage;
    }
    hit() {
        this.damage++;
    }
    isSunk() {
        return this.damage === this.length;
    }
}
export class GameBoard {
    constructor() {
        this.board = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null));
        this.ships = [];
    }
    placaship(ship, x, y, vertical) {
        if (vertical) {
            for (let i = 0; i < ship.length; i++) {
                this.board[x + i][y] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[x][y + i] = ship;
            }
        }
        this.ships.push(ship);
    }
    receiveAttack(x, y) {
        if (this.board[x][y] === null) {
            this.board[x][y] = 'miss';
        } else {
            this.board[x][y].hit();
            this.board[x][y] = 'hit';
        }
    }
    checkIsSunck() {
        return this.ships.every((ship) => ship.isSunk());
    }
    allSunk() {
        return this.ships.every((ship) => ship.isSunk());
    }
    missedAttacks() {
        return this.board.flat().filter((cell) => cell === 'miss').length;
    }
}
export class RealPlayer {
    constructor() {
        this.board = new GameBoard();
        this.turn = true;
    }
    attack(opponent, x, y) {
        opponent.board.receiveAttack(x, y);
    }
}
export class ComputerPlayer {
    constructor() {
        this.board = new GameBoard();
        this.turn = false;
    }
    attack(opponent) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (opponent.board.board[x][y] === 'miss') {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        if (opponent.board.board[x][y] === 'hit') {
            let direction = Math.floor(Math.random() * 4);
            switch (direction) {
                case 0:
                    x++;
                    break;
                case 1:
                    x--;
                    break;
                case 2:
                    y++;
                    break;
                case 3:
                    y--;
                    break;
            }
        }
        opponent.board.receiveAttack(x, y);
    }
}
const player = new RealPlayer();
const computer = new ComputerPlayer();

player.board.placaship(new Ship(5, 0), 0, 0, false);
computer.board.placaship(new Ship(5, 0), 0, 0, true);
player.board.placaship(new Ship(4, 0), 1, 1, false);
computer.board.placaship(new Ship(4, 0), 1, 1, true);
boardRender('player-board', player.board.board);
boardRender('computer-board', computer.board.board);

gameStart(boardRender, player, computer);
