import { useBoard } from "../hooks";

interface IProps {
  row: number;
  column: number;
  borderRight?: boolean;
  borderBottom?: boolean;
}

export function Cell({ row, column, borderRight, borderBottom }: IProps) {
  const { board, onPress } = useBoard();

  const dynamicClassName = `gridItem flex flex-row align-center justify-center ${
    borderRight ? "border-right" : ""
  } ${borderBottom ? "border-bottom" : ""}`;

  return (
    <div onClick={() => onPress([row, column])} className={dynamicClassName}>
      {board[row][column][0]}
    </div>
  );
}
