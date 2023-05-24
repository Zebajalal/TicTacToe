import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [history, setHistory] = useState([]);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

      const move = {
        player: player,
        index: index,
        value: player === "X" ? "X" : "O"
      };

      setHistory([...history.slice(0, index), move]);
    }
  };

  const getWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = getWinner();

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setHistory([]);
  };

  const isTied = board.every((square) => square !== null) && !winner;

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div>
          <h1>TicTacToe Game</h1>
          {winner ? (
            <div>
              <div className="m-3">Winner: {winner}</div>
              <button className="btn btn-primary" onClick={handleReset}>
                Play Again
              </button>
            </div>
          ) : isTied ? (
            <div>
              <div>It's a tie!</div>
              <button className="btn btn-danger" onClick={handleReset}>
                Play Again
              </button>
            </div>
          ) : (
            <div>
              <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </div>
              <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </div>
              <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </div>
            </div>
          )}

          <div className="history">
            <h3>Game History</h3>
            <ul>
              {history.map((move, index) => (
                <li
                  key={index}
                  onClick={() => setHistory(history.slice(0, index + 1))}
                >
                  Player {move.player} moved at index {move.index} -{" "}
                  {move.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }
}

export default TicTacToe;
