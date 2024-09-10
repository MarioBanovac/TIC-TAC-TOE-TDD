export type BoardType = Array<Array<Array<string>>>;
export type ScoreType = [number, number, number];
export type PlayerType = { id: number; symbol: string };

interface ITicTacToe {
  board: BoardType;
  score: ScoreType;
  playerOne: PlayerType;
  playerTwo: PlayerType;
  currentPlayer: PlayerType;
  currentWinner: PlayerType | null;

  setTie: () => void;
  setWinner: (player: PlayerType) => void;

  isRowCombination: (board: BoardType) => boolean;
  isColumnCombination: (board: BoardType) => boolean;
  isLeftDiagonalCombination: (board: BoardType) => boolean;
  isRightDiagonalCombination: (board: BoardType) => boolean;
  isTie: (board: BoardType) => boolean;

  resetState: () => void;
  cleanBoard: () => void;
  setCurrentPlayer: (player: PlayerType) => void;
  updateScore: (playerId: number) => void;
  makeMove: (player: PlayerType, boardCoords: [number, number]) => void;
}

class TicTacToe implements ITicTacToe {
  board = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];
  score: ScoreType = [0, 0, 0];
  playerOne = { id: 0, symbol: "O" };
  playerTwo = { id: 1, symbol: "X" };
  currentPlayer = { id: 0, symbol: "O" };
  currentWinner: PlayerType | null = null;

  setTie() {
    this.updateScore();
  }

  setWinner(player: PlayerType) {
    this.updateScore(player.id);
    this.currentWinner = player;
  }

  resetState() {
    this.board = [
      [[], [], []],
      [[], [], []],
      [[], [], []],
    ];
    this.score = [0, 0, 0];
    this.currentPlayer = { id: 0, symbol: "O" };
    this.currentWinner = null;
  }

  cleanBoard() {
    this.board = [
      [[], [], []],
      [[], [], []],
      [[], [], []],
    ];
    this.currentWinner = null;
  }

  setCurrentPlayer(player: PlayerType) {
    this.currentPlayer = player;
  }

  updateScore(playerId?: number) {
    if (playerId?.toString()) {
      return (this.score[playerId] += 1);
    }
    return (this.score[2] += 1);
  }

  isRowCombination(board: BoardType) {
    const areRowValuesSame = (row: Array<Array<string>>) => {
      const firstRowValue = row[0][0];
      return row.every(
        (rowValue) => rowValue.length > 0 && rowValue[0] === firstRowValue
      );
    };
    return board.some((row) => areRowValuesSame(row));
  }

  isColumnCombination(board: BoardType) {
    const areColumnValuesSame = (colIndex: number) => {
      const firstValue = board[0][colIndex][0];
      return board.every(
        (row) => row[colIndex].length > 0 && row[colIndex][0] === firstValue
      );
    };

    return [0, 1, 2].some((colIndex) => areColumnValuesSame(colIndex));
  }

  isLeftDiagonalCombination(board: BoardType) {
    const topLeftCell = board[0][0][0];
    const centerCell = board[1][1][0];
    const bottomRightCell = board[2][2][0];
    if (
      topLeftCell?.length > 0 &&
      centerCell?.length > 0 &&
      bottomRightCell?.length > 0
    ) {
      return topLeftCell === centerCell && centerCell === bottomRightCell;
    }
    return false;
  }

  isRightDiagonalCombination(board: BoardType) {
    const topRightCell = board[0][2][0];
    const centerCell = board[1][1][0];
    const bottomLeftCell = board[2][0][0];
    if (
      topRightCell?.length > 0 &&
      centerCell?.length > 0 &&
      bottomLeftCell?.length > 0
    ) {
      return topRightCell === centerCell && centerCell === bottomLeftCell;
    }
    return false;
  }

  isTie(board: BoardType) {
    return board.every((row) => row.every((column) => column.length >= 1));
  }

  makeMove(player: PlayerType, boardCoords: [number, number]) {
    if (this.currentWinner || this.isTie(this.board)) {
      this.cleanBoard();
    }
    const [row, column] = boardCoords;
    if (this.board[row][column][0]) return;
    this.board[row][column][0] = player.symbol;
    this.setCurrentPlayer(player.id === 0 ? this.playerTwo : this.playerOne);
    if (this.isRowCombination(this.board)) {
      return this.setWinner(player);
    }
    if (this.isColumnCombination(this.board)) {
      return this.setWinner(player);
    }
    if (this.isLeftDiagonalCombination(this.board)) {
      return this.setWinner(player);
    }
    if (this.isRightDiagonalCombination(this.board)) {
      return this.setWinner(player);
    }
    if (this.isTie(this.board)) {
      return this.setTie();
    }
  }
}

const ticTacToe = new TicTacToe();

export default ticTacToe;
