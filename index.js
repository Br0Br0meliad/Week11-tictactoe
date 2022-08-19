const playerX = <i class="bi bi-x-lg"></i>;

const playerO = <i class="bi bi-circle"></i>;

const boardElement = document.getElementById('board');

const turnDisplay = document.getElementById('gameStatus');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6],
];


const win = () => `Player ${currentPlayer} has won!`;

const draw = () => `Game ended in a draw!`;

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatus.innerHTML = currentPlayerTurn();

let currentPlayer = playerX;

newGame();

btnRestart.addEventListener('click', newGame);

function newGame() {
    currentPlayer = playerX;
    squareElements.array.forEach(element => {
        square.classList.remove(playerX)
        square.classList.remove(playerO)
    });


}


function cellClick (event) {
    const square = event.target;
    const currentPlayer = "X";
    placePiece(square, currentPlayer)
    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        takeTurns();
    }
};

function placePiece(square, currentPlayer) {
    square.classList.add(currentPlayer)
}

function takeTurns() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.innerHTML = currentPlayerTurn();
}




newGame() {
    currentPlayer = "X";
    boardState = {}
}








function getWinner();