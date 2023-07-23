let currentPlayer = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let counter = 0;
function move(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    document.getElementById("board").children[row * 3 + col].innerHTML =
      currentPlayer;
    counter += 1;
    if (check()) {
      let player = currentPlayer;
      setTimeout(() => {
        alert(`${player} won the match`);
        currentPlayer = "X";
        counter = 0;
        for (let ti = 0; ti < 3; ti++) {
          for (let tj = 0; tj < 3; tj++) {
            board[ti][tj] = "";
            document.getElementById("board").children[ti * 3 + tj].innerHTML =
              "";
          }
        }
      }, 100);
    } else if (counter === 9) {
      setTimeout(() => {
        alert(`match draw`);
        currentPlayer = "X";
        counter = 0;
        for (let ti = 0; ti < 3; ti++) {
          for (let tj = 0; tj < 3; tj++) {
            board[ti][tj] = "";
            document.getElementById("board").children[ti * 3 + tj].innerHTML =
              "";
          }
        }
      }, 100);
    }
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
}
function check() {
  // check row
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == currentPlayer &&
      board[i][1] == currentPlayer &&
      board[i][2] == currentPlayer
    ) {
      console.log(`${currentPlayer} winner`);
      return true;
    }
  }
  // check col
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] == currentPlayer &&
      board[1][i] == currentPlayer &&
      board[2][i] == currentPlayer
    ) {
      console.log(`${currentPlayer} winner`);
      return true;
    }
  }
  // digonal check
  if (
    (board[0][0] == currentPlayer &&
      board[1][1] == currentPlayer &&
      board[2][2] == currentPlayer) ||
    (board[0][2] == currentPlayer &&
      board[1][1] == currentPlayer &&
      board[2][0] == currentPlayer)
  ) {
    console.log(`${currentPlayer} winner`);
    return true;
  }
}
