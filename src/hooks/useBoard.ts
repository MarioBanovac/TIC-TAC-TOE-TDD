import { useContext } from "react";
import { BoardContext } from "../context";

export const useBoard = () => {
  const { board, onPress, score } = useContext(BoardContext);
  return { board, onPress, score };
};
