import { useState } from "react";
import ticTacToe from "../ticTacToe";
import { BoardContext } from "../context";

interface IProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: IProps) => {
  const [, setCurrentPlayer] = useState(ticTacToe.currentPlayer);
  const handlePress = (boardCoords: [number, number]) => {
    ticTacToe.makeMove(ticTacToe.currentPlayer, boardCoords);
    setCurrentPlayer(ticTacToe.currentPlayer);
  };

  const ProviderValue = {
    board: ticTacToe.board,
    onPress: handlePress,
    score: ticTacToe.score,
  };

  return (
    <BoardContext.Provider value={ProviderValue}>
      {children}
    </BoardContext.Provider>
  );
};
