import React, { useEffect, useState } from "react";

function Square(props) {
  return (
    <button
      className={`square ${props.className} ${
        props.value === "X" ? "x" : props.value === "O" ? "o" : ""
      }`}
      onClick={props.onClick}
    >
      {props.value === "X" ? (
        <svg
          className="x-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="72" // 4.5rem
          height="72" // 4.5rem
        >
          <line
            x1="20"
            y1="20"
            x2="80"
            y2="80"
            className="x-line line1"
            strokeWidth="8" // Increased width for boldness
            stroke="white"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="80"
            x2="80"
            y2="20"
            className="x-line line2"
            strokeWidth="5" // Increased width for boldness
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
      ) : props.value === "O" ? (
        <svg
          className="o-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="68" // 3rem
          height="68" // 3rem
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            className="o-circle"
            strokeWidth="5" // Increased width for boldness
            stroke="white"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
    </button>
  );
}

export default Square;

export const Board = () => {
  //Initially all squares are unoccupied - null
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquare] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const resetGame = () => {
    setsquares(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setWinningSquare([]);
  };

  //PLAYER
  const handleClick = (index) => {
    //If already occupied or winner or computers turn found no moves further
    if (squares[index] || winner || currentPlayer == "O") return;

    const newSquares = [...squares];

    newSquares[index] = currentPlayer;
    setsquares(newSquares);
    //after every move check for the winner

    const gameWinner = findWinner(newSquares);
    if (gameWinner) setWinner(gameWinner);
    else {
      setCurrentPlayer("O");
      setTimeout(() => {
        handleBotMove(newSquares); // Bot makes a move after delay
      }, 1000); // 1 second delay
    }
  };

  const handleBotMove = (currentSquares) => {
    const move = bestMove(currentSquares, "O") || bestMove(currentSquares, "X");
    //plays the best move or a random empty square

    // prioritize the center square (index 4) if it is empty
    const moveIndex =
      currentSquares[4] === null // Check if the center square is empty
        ? 4
        : move != null
        ? move
        : currentSquares.findIndex((square) => square == null);

    if (moveIndex != -1) {
      const newSquares = [...currentSquares];
      newSquares[moveIndex] = "O";
      setsquares(newSquares);

      const gameWinner = findWinner(newSquares);
      if (gameWinner) setWinner(gameWinner);
      else setCurrentPlayer("X");
    }
  };
  const findWinner = (squares) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        setWinningSquare([a, b, c]);
        return squares[a];
      }
    }
    return null;
  };

  //Bot's Logic
  const bestMove = (board, player) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (board[a] == player && board[b] == player && board[c] == null)
        return c;
      if (board[b] == player && board[c] == player && board[a] == null)
        return a;
      if (board[a] == player && board[c] == player && board[b] == null)
        return b;
    }
    return null;
  };
  return (
    <>
      <div className="board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index)}
            className={winningSquares.includes(index) ? "won" : ""}
          />
        ))}
      </div>

      <div className="game-status">
        {winner &&
          (currentPlayer === "X" ? (
            <h2 className="winner">You won! 🎉</h2>
          ) : (
            <h2 className="tie">Better Luck Next time!</h2>
          ))}

        {!winner && squares.every((square) => square) && (
          <h2 className="tie">It's a tie 🤝</h2>
        )}
        {!winner &&
          !squares.every((square) => square) &&
          (currentPlayer === "O" ? (
            <h2 className="turn">Bot's Turn</h2>
          ) : (
            <h2 className="turn">Player's Turn</h2>
          ))}

        <button onClick={resetGame} className="reset-button">
          Reset
        </button>
      </div>
    </>
  );
};
