import { Cell } from "./Cell";
import { Grid } from "./Grid";

export function Board() {
  return (
    <Grid>
      <Cell row={0} column={0} borderBottom borderRight />
      <Cell row={0} column={1} borderBottom borderRight />
      <Cell row={0} column={2} borderBottom />
      <Cell row={1} column={0} borderRight borderBottom />
      <Cell row={1} column={1} borderRight borderBottom />
      <Cell row={1} column={2} borderBottom />
      <Cell row={2} column={0} borderRight />
      <Cell row={2} column={1} borderRight />
      <Cell row={2} column={2} />
    </Grid>
  );
}
