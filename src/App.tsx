import "./App.css";
import { Container, Board, Score } from "./UI";
import { BoardProvider } from "./provider";

function App() {
  return (
    <BoardProvider>
      <Container>
        <Board />
        <Score />
      </Container>
    </BoardProvider>
  );
}

export default App;
