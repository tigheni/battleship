function restartGame() {
    document.getElementById('reset-game').addEventListener('click', () => {
        location.reload();
    });
}
export function checkGame(player, computer) {
    if (computer.board.allSunk()) {
        document.getElementById('game-message').innerHTML = 'You won!';
        restartGame();
        return true;
    } else if (player.board.allSunk()) {
        document.getElementById('game-message').innerHTML = 'You lost!';
        restartGame();
        return true;
    }
}
