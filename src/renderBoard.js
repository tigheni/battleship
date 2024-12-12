export function boardRender(boardId, board) {
    const boardContainer = document.getElementById(boardId);
    boardContainer.innerHTML = '';
    board.forEach((row, x) => {
        row.forEach((cell, y) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            if (cell === 'miss') {
                cellDiv.classList.add('miss');
                cellDiv.innerHTML = '❌';
            } else if (cell === 'hit') {
                cellDiv.classList.add('hit');
                cellDiv.innerHTML = '💥';
            } else if (cell !== null) {
                cellDiv.classList.add('ship');
            }
            cellDiv.dataset.x = x;
            cellDiv.dataset.y = y;
            boardContainer.style.gridTemplateColumns = `repeat(${board[0].length}, 1fr)`;
            boardContainer.appendChild(cellDiv);
        });
    });
}
