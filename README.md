
<p align="center">
    <h1 align="center">TicTacToe-TDD</h1>
</p>

---

##  Overview

TicTacToe implemented using TDD and customer-centric approach by shifting the focus from implementation details to business domain requirements

---
***Business Requirements***

1. The game should support two modes: 
- Single Player: A user plays against the computer
- Multiplayer: Two users play against each other.

2. User Interface
- The game should have a simple and intuitive user interface that includes:
 - A 3x3 grid representing the game board.
 - The game should keep track of the number of wins, losses, and draws for each player


3. Game Rules
- The game should enforce standard Tic Tac Toe rules:
 - Players take turns placing their symbol ("X" or "O") in an empty cell.
 - The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.
 - If all cells are filled without a winner, the game is a draw.

###  Installation

1. Clone the repository:

```sh
git clone https://github.com/MarioBanovac/TIC-TAC-TOE-TDD.git
```

2. Change to the project directory:

```sh
cd TIC-TAC-TOE-TDD
```

3. Install the dependencies:

```sh
yarn install
```

###  Running tests

Use the following command to run tests in watch mode:

```sh
yarn test
```
