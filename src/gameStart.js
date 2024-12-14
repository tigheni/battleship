import { checkGame } from './checkTheGame.js';
function preventWrongCell(x, y, computer) {
    if (x === undefined || y === undefined) return false;
    if (
        computer.board.board[x][y] === 'miss' ||
        computer.board.board[x][y] === 'hit'
    ) {
        alert(
            'You have already attacked this cell! Please choose another cell.'
        );
        return;
    }
}

export function gameStart(boardRender, player, computer) {
    const playerBoard = document.getElementById('computer-board');
    const computerBoard = document.getElementById('player-board');
    playerBoard.addEventListener('click', (e) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        preventWrongCell(x, y, computer);
        player.attack(computer, x, y);
        computer.attack(player);
        checkGame(player, computer);
        boardRender('player-board', player.board.board);
        boardRender('computer-board', computer.board.board);
    });
}
