function createCellDiv() {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    return cellDiv;
}
function createboardContainer(x, y, cell, boardContainer) {
    const cellDiv = createCellDiv();

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
    boardContainer.appendChild(cellDiv);
}

export function boardRender(boardId, board) {
    const boardContainer = document.getElementById(boardId);
    if (!boardContainer) {
        console.error('Board container not found');
        return;
    }
    boardContainer.innerHTML = '';
    boardContainer.style.gridTemplateColumns = `repeat(${board[0].length}, 1fr)`;
    board.forEach((row, x) => {
        row.forEach((cell, y) => {
            createboardContainer(x, y, cell, boardContainer);
        });
    });
}
