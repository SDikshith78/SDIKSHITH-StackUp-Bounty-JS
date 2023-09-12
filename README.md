LIVE DEMO:- https://sdikshith-tic-tac-toe-game.netlify.app
NOTE:- The background video is too high MB i.e, 260MB and GitHub has limit of 25mb Due to that I'm unable to upload the background video link I apologize.

Summary:- I have made a Tic-Tac-Toe Game and added some features like on click sound and whenever we have a winner a music plays as a reward or you can say for joy and also a cute gif has been added. and i have also added a background video which makes even more amazing to play and have a best experience in this application.

And also i have used classes, switch statement and try-catch statements as mentioned
*. used "class" i.e, class TicTaeToe
*. used switch statement in displayquote to display the player's turn in game.
*. try-catch also used methods which were explained below.

1. **Class Definition (`class TicTacToe`):**
   - This is an ES6 class definition for your Tic-Tac-Toe game.
   - used "class" i.e, class TicTaeToe

2. **Constructor (`constructor()`):**
   - In the constructor, you initialize the initial state of your game.
   - `this.board`: An array representing the Tic-Tac-Toe board. Each element of the array represents a cell on the board, and it's initialized as an empty string.
   - `this.currentPlayer`: A variable to keep track of whose turn it is to play. It starts with "X".
   - `this.isGameActive`: A flag to indicate whether the game is active or has ended. It starts as `true`.
   - `this.winningCombination`: An array of arrays representing the winning combinations in Tic-Tac-Toe.
   - `this.clickSound` and `this.winSound`: Variables to store audio elements for click and win sounds.
   - `this.winnerInfo`, `this.winnerName`, and `this.winnerGif`: Variables to display winner information and GIF.

3. **`displayQuote()` Method:**
   - This method updates a quote displayed in the game based on the current player's turn.
   - It uses a "SWITCH statement" to set the appropriate message in an HTML element with the id "quote".

4. **`makeMove(index)` Method:**
   - This method is called when a player makes a move by clicking a cell on the board.
   - It checks if the game is still active (`this.isGameActive`).
   - If the clicked cell is empty, it updates the board, checks for a win, switches the player's turn, plays a click sound, and updates the quote.
   - If the clicked cell is not empty, it throws an error ("Invalid move").

5. **`checkForWin()` Method:**
   - This method checks for a win by iterating through the `winningCombination` array.
   - If it finds a winning combination, it sets the winner, displays a win message, plays a win sound, and ends the game.
   - If there are no empty cells left and no winner, it sets the game as a draw.

6. **`setWinner(player)` and `displayWinner()` Methods:**
   - `setWinner(player)` sets the winner's name and GIF based on the player who won or if it's a draw.
   - `displayWinner()` updates the HTML to display the winner's name and GIF when there's a winner or hides them otherwise.

7. **`displayMessage(message)` Method:**
   - This method updates a message displayed on the game board.

8. **`resetGame()` Method:**
   - This method resets the game to its initial state.
   - It clears the board, resets the current player to "X", marks the game as active, and clears winner information.
   - It also updates the board, clears the message, pauses the click and win sounds, and displays the winner information (which might be empty).

9. **`updateBoard()` Method:**
   - This method updates the visual representation of the game board based on the `this.board` array.
   - It creates HTML elements for each cell, adds event listeners for clicking, and appends them to the board.

10. **Initialization:**
    - An instance of the `TicTacToe` class is created, and event listeners are added to the reset button (`resetBtn`) and the DOMContentLoaded event to initialize the game.

