# Tic Tac Toe - React

A simple and interactive Tic Tac Toe game built using React. This game allows one player to play against the computer, featuring a clean, user-friendly interface. It supports winner detection and includes a reset functionality.

## Features

- **Player vs. Computer**: Play against an AI-powered opponent.
- **Winner Detection**: Automatically detects when a player wins or when the game ends in a draw.
- **Reset Game**: Quickly restart the game at any time.

Open your browser and go to `https://oarisar.github.io/tic-tac-toe-react/` to play the game.

## Usage

- Click on any cell to make your move.
- The computer will automatically make its move after yours.
- The game will declare the winner or a draw at the end.
- Use the "Reset" button to restart the game.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **JavaScript**: Game logic and functionality.
- **CSS**: Styling for the game board and layout.

## Concepts Applied

This project demonstrates several key React concepts:

- **Components**: The game is structured using reusable components like `Board`, `Square`, and `Header` to maintain modularity and readability.
- **State Management**: The game state (e.g., the board layout, current turn, and winner) is managed using React's `useState` hook.
- **Event Handling**: Click events are handled to update the game state dynamically.
- **Conditional Rendering**: Used to display the game status (e.g., "Player Wins!", "Tie!") based on the state.
- **Props**: Data is passed between components using props to ensure clear separation of concerns.
- **Effect Hook**: `useEffect` is used to implement side effects, such as the computer's move logic.


## Acknowledgements

- React documentation for providing excellent resources.
- Inspiration from classic Tic Tac Toe games.
