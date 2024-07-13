<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tic Tac Toe</title>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
  }
  .cell {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
  }
</style>
</head>
<body>
<div class="board"></div>
<script>
  const board = document.querySelector('.board');
  let currentPlayer = 'X';
  let winner = null;
  const cells = Array.from({ length: 9 }).fill(null);

  function checkWinner() {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return null;
  }

  function handleCellClick(index) {
    if (winner || cells[index]) return;

    cells[index] = currentPlayer;
    render();

    winner = checkWinner();

    if (winner) {
      setTimeout(() => {
        alert(`Player ${winner} wins!`);
        resetGame();
      }, 100);
    } else if (!cells.includes(null)) {
      setTimeout(() => {
        alert("It's a tie!");
        resetGame();
      }, 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  function render() {
    board.innerHTML = '';
    cells.forEach((value, index) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = value || '';
      cell.addEventListener('click', () => handleCellClick(index));
      board.appendChild(cell);
    });
  }

  function resetGame() {
    cells.fill(null);
    currentPlayer = 'X';
    winner = null;
    render();
  }

  render();
</script>
</body>
</html>
