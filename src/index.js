import './style.css';
import { boardRender } from './renderBoard.js';
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
        console.log(this.ships);
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
    }
    attack(opponent, x, y) {
        opponent.board.receiveAttack(x, y);
    }
}
export class ComputerPlayer {
    constructor() {
        this.board = new GameBoard();
    }
    attack(opponent) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (opponent.board.board[x][y] === 'miss') {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        opponent.board.receiveAttack(x, y);
    }
}
/* const player = new RealPlayer();
const computer = new ComputerPlayer();

boardRender('player1-board', player.board.board);
boardRender('player2-board', computer.board.board);

const playercells = document.querySelectorAll('#player2-board .cell');
player.board.placaship(new Ship(1, 0), 0, 0, true);
computer.board.placaship(new Ship(1, 0), 0, 0, true);
playercells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;

        player.attack(computer, x, y);
        computer.attack(player);
    });
}); */
document.addEventListener('DOMContentLoaded', () => {
    const player = new RealPlayer();
    const computer = new ComputerPlayer();
    boardRender('player1-board', player.board.board);
    boardRender('player2-board', computer.board.board);
    const playercells = document.querySelectorAll('#player2-board .cell');
    player.board.placaship(new Ship(1, 0), 0, 0, true);
    computer.board.placaship(new Ship(1, 0), 0, 0, true);
    playercells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            player.attack(computer, x, y);
            computer.attack(player);
            boardRender('player1-board', player.board.board);
            boardRender('player2-board', computer.board.board);
            if (player.board.allSunk()) {
                alert('Computer wins');
            }
            if (computer.board.allSunk()) {
                alert('Player wins');
            }
        });
    });
});
