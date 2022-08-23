
const playerX = "X";
const playerO = "O";

const squareElements = document.querySelectorAll('[data-cell-index]');

let gameActive = true;

let currentPlayer = "X";

let boardState = ["", "", "", "", "", "", "", "", ""];

const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const win = () => `Player ${currentPlayer} has won!`;
const draw = () => `It's a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


gameStatus.innerHTML = currentPlayerTurn();




startGame();

resetButton.addEventListener('click', startGame);
gameActive = true;

function startGame() {
    gameActive = true;
    currentPlayer = "X";
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.square')
               .forEach(square => square.innerHTML = "");
};

function squareClick(e) {
    const square = e.target;
    const clickedSquareIndex = parseInt(
        square.getAttribute('data-cell-index')
    );
    if (boardState[clickedSquareIndex] !== "" || !gameActive) {
        return;
    }
    placePiece (square, currentPlayer);
        if(checkWin(currentPlayer)) {
            endGameMessage(false);
        } else if (isDraw()) {
            endGameMessage(true);
        } else {
            takeTurns();
        }
}

function endGameMessage() {
    if (draw) {
        alert("It's a draw!");
    } else {
        alert('${currentPlayer} wins!');
    }

}

function placePiece (clickedSquare, clickedSquareIndex) {
    boardState[clickedSquareIndex] = currentPlayer;
    clickedSquare.innerHTML = currentPlayer;
}

function takeTurns () {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();
}

function isDraw() {
	return [...squareElements].every(square => {
		return square.classList.contains(playerX) || square.classList.contains(playerO);
	});
}

function checkWin(currentPlayer) {
	return winningCombos.some(combination => {
		return combination.every(index => {
			return squareElements[index].classList.contains(currentPlayer);
		})
	})
}

let squares = document.querySelectorAll(".square");
squares.forEach((square)=>{
    square.addEventListener('click', squareClick);
});