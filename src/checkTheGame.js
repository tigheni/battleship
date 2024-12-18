export function checkGame(player, computer) {
    if (computer.board.allSunk()) {
        restartGame('You won! 🎉');
        return false;
    } else if (player.board.allSunk()) {
        restartGame('You lost! 😢');
        return false;
    }
}
const prompt = document.querySelector('.custom-prompt');
const restartGameButton = document.querySelectorAll('#reset-game');
const gameMessage = document.querySelector('.game-alert');

function restartGame(message) {
    prompt.style.display = 'flex';
    gameMessage.innerHTML = message;

    restartGameButton.forEach((button) => {
        button.addEventListener('click', () => {
            location.reload();
        });
    });
}
