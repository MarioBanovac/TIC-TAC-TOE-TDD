import { createContext } from "react";
import ticTacToe from "../ticTacToe";
import { BoardType, ScoreType } from "../ticTacToe";

interface IBoardContext {
  board: BoardType;
  onPress: ([row, column]: [number, number]) => void;
  score: ScoreType;
}

export const BoardContext = createContext<IBoardContext>({
  board: ticTacToe.board,
  onPress: () => {},
  score: ticTacToe.score,
});

