import { useBoard } from "../hooks";

export function Score() {
  const { score } = useBoard();
  return (
    <div
      style={{ width: "100%", justifyContent: "space-between" }}
      className="flex flex-row"
    >
      <div className="flex flex-column align-center text-white fs-30 ">
        <div>Player(O)</div>
        <div>{score[0]}</div>
      </div>
      <div className="flex flex-column align-center text-white fs-30 ">
        <div>Tie</div>
        <div>{score[2]}</div>
      </div>
      <div className="flex flex-column align-center text-white fs-30">
        <div>Player(X)</div>
        <div>{score[1]}</div>
      </div>
    </div>
  );
}
