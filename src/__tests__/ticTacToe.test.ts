import { expect, test, describe, vi, beforeEach } from "vitest";
import ticTacToe from "../ticTacToe";

describe("Tic-Tac-Toe", () => {
  beforeEach(() => {
    ticTacToe.resetState();
  });

  describe("Components are defined", () => {
    test("Board is defined", () => {
      expect(ticTacToe.board).toBeDefined();
    });
    test("Score is defined", () => {
      expect(ticTacToe.score).toBeDefined();
    });
    test("Player one is defined", () => {
      expect(ticTacToe.playerOne).toBeDefined();
    });
    test("Player two is defined", () => {
      expect(ticTacToe.playerTwo).toBeDefined();
    });
    test("Current player is defined", () => {
      expect(ticTacToe.currentPlayer).toBeDefined();
    });
  });
  describe("Game rules", () => {
    test("Knows how to reset the state", () => {
      expect(ticTacToe.resetState).toBeDefined();
      expect(ticTacToe.board[0][0]).toEqual([]);
      expect(ticTacToe.board[1][1]).toEqual([]);
      expect(ticTacToe.board[2][2]).toEqual([]);
    });
    test("Knows how to set current player", () => {
      expect(ticTacToe.currentPlayer).toEqual({ id: 0, symbol: "O" });
      ticTacToe.setCurrentPlayer({ id: 1, symbol: "X" });
      expect(ticTacToe.currentPlayer).toEqual({ id: 1, symbol: "X" });
    });
    test("Knows how to handle player inputs", () => {
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [1, 1]);
      expect(ticTacToe.board[1][1]).toEqual(["O"]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [0, 1]);
      expect(ticTacToe.board[0][1]).toEqual(["X"]);
    });
    test("Knows to check if tied", () => {
      const setTieMock = vi.spyOn(ticTacToe, "setTie");
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [0, 0]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [0, 1]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [0, 2]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [1, 1]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [1, 0]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [1, 2]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 1]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [2, 0]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 2]);
      expect(setTieMock).toHaveBeenCalledOnce();
      expect(ticTacToe.currentWinner).toBe(null);
    });
    test("Knows when someone won by having the whole row filled", () => {
      const setWinnerMock = vi.spyOn(ticTacToe, "setWinner");
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 0]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [1, 0]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 1]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [1, 1]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 2]);
      expect(setWinnerMock).toHaveBeenCalledOnce();
      expect(ticTacToe.currentWinner).toEqual({
        id: 0,
        symbol: "O",
      });
    });
    test("Knows when someone won by having the whole column filled", () => {
      const setWinnerMock = vi.spyOn(ticTacToe, "setWinner");
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [0, 0]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [2, 1]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [1, 0]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [2, 2]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 0]);
      expect(setWinnerMock).toHaveBeenCalledOnce();
      expect(ticTacToe.currentWinner).toEqual({
        id: 0,
        symbol: "O",
      });
    });
    test("Knows when someone won by having the left diagonal filled", () => {
      const setWinnerMock = vi.spyOn(ticTacToe, "setWinner");
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [0, 0]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [0, 2]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [1, 1]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [1, 0]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 2]);
      expect(setWinnerMock).toHaveBeenCalledOnce();
      expect(ticTacToe.currentWinner).toEqual({
        id: 0,
        symbol: "O",
      });
    });
    test("Knows when someone won by having the right diagonal filled", () => {
      const setWinnerMock = vi.spyOn(ticTacToe, "setWinner");
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [0, 2]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [2, 2]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [1, 1]);
      ticTacToe.makeMove({ id: 1, symbol: "X" }, [1, 2]);
      ticTacToe.makeMove({ id: 0, symbol: "O" }, [2, 0]);
      expect(setWinnerMock).toHaveBeenCalledOnce();
      expect(ticTacToe.currentWinner).toEqual({
        id: 0,
        symbol: "O",
      });
    });
    test("Knows how to update the score", () => {
      expect(ticTacToe.score).toEqual([0, 0, 0]);
      ticTacToe.setWinner({ id: 0, symbol: "O" });
      expect(ticTacToe.score).toEqual([1, 0, 0]);
      ticTacToe.setWinner({ id: 1, symbol: "X" });
      expect(ticTacToe.score).toEqual([1, 1, 0]);
      ticTacToe.setWinner({ id: 1, symbol: "X" });
      expect(ticTacToe.score).toEqual([1, 2, 0]);
    });
  });
});
