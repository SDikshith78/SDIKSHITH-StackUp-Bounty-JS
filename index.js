class TicTacToe {
  constructor() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "X";
    this.isGameActive = true;
    this.winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.clickSound = document.getElementById("clickSound");
    this.winSound = document.getElementById("winSound");
    this.winnerInfo = document.getElementById("winnerInfo");
    this.winnerName = "";
    this.winnerGif = "";
    this.boardElement = document.getElementById("board");
    this.messageElement = document.getElementById("message");
    this.quoteElement = document.getElementById("quote");
    this.resetButton = document.getElementById("resetBtn");
    this.initialize();
  }

  initialize() {
    this.resetButton.addEventListener("click", () => this.resetGame());
    this.updateBoard();
    this.displayQuote();
  }

  makeMove(index) {
    if (this.isGameActive) {
      try {
        if (this.board[index] === "") {
          this.board[index] = this.currentPlayer;
          this.checkForWin();
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
          this.updateBoard();
          this.clickSound.play();
          this.displayQuote();
        } else {
          throw new Error("Invalid move");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  checkForWin() {
    for (const combination of this.winningCombination) {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.isGameActive = false;
        this.setWinner(this.currentPlayer);
        this.displayMessage(`${this.currentPlayer} wins!`);
        this.winSound.play();
        return;
      }
    }

    if (!this.board.includes("") && this.isGameActive) {
      this.isGameActive = false;
      this.setWinner("Draw");
      this.displayMessage("It's a draw!");
    }
  }

  setWinner(player) {
    if (player !== "Draw") {
      this.winnerName = `Player ${player} won`;
      this.winnerGif = `winner_${player.toLowerCase()}.gif`; // Check this line
    } else {
      this.winnerName = "It's a draw!";
      this.winnerGif = "";
    }
    this.displayWinner();
  }
  displayWinner() {
    const winnerNameElement = document.getElementById("winnerName");
    document.getElementById("winnerGif").style.width = "130px";

    if (this.winnerName && this.winnerGif) {
      winnerNameElement.textContent = this.winnerName;
      this.winnerInfo.style.display = "block"; // Show the winner info
    } else {
      winnerNameElement.textContent = "";
      this.winnerInfo.style.display = "none"; // Hide the winner info
    }
  }
  displayMessage(message) {
    try {
      this.messageElement.textContent = message;
    } catch (error) {
      console.error(error);
    }
  }

  displayQuote() {
    try {
      switch (this.currentPlayer) {
        case "X":
          this.quoteElement.textContent = "Player X's turn. Make a move!";
          break;
        case "O":
          this.quoteElement.textContent = "Player O's turn. Your move!";
          break;
        default:
          this.quoteElement.textContent = "It's a draw!";
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }

  resetGame() {
    try {
      this.board = ["", "", "", "", "", "", "", "", ""];
      this.currentPlayer = "X";
      this.isGameActive = true;
      this.winnerName = "";
      this.winnerGif = "";
      this.updateBoard();
      this.displayMessage("");
      this.clickSound.pause();
      this.winSound.pause();
      this.displayWinner();
      this.displayQuote();
    } catch (error) {
      console.error(error);
    }
  }

  updateBoard() {
    try {
      this.boardElement.innerHTML = "";
      this.board.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.textContent = cell;
        cellElement.addEventListener("click", () => this.makeMove(index));
        this.boardElement.appendChild(cellElement);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

const ticTacToe = new TicTacToe();
