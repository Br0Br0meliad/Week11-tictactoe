

const WINNING_COMBINATIONS = [
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




startGame()

resetButton.addEventListener('click', startGame)


function startGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.square')
               .forEach(square => square.innerHTML = "");
    square.removeEventListener('click', squareClick);
    square.addEventListener('click', squareClick, {once: true});
};

