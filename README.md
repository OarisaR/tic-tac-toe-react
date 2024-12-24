# Tic Tac Toe - React

A simple and interactive **Tic Tac Toe** game built using **React**. This game allows a single player to compete against an AI-powered opponent, offering a clean, user-friendly interface. It features automatic winner detection and a reset functionality for a seamless gaming experience.

## Features

- **Player vs. Computer**: Challenge an AI opponent with strategic moves.
- **Winner Detection**: Automatically detects and announces the winner or a tie.
- **Reset Game**: Restart the game anytime with a single click for endless fun.

[Play the Tic Tac Toe game here!](https://oarisar.github.io/tic-tac-toe-react/)

## Usage

1. Open the game in your browser using the link above.
2. Click on any cell in the grid to make your move.
3. The computer will respond with its move immediately after yours.
4. The game automatically announces the winner or a draw at the end of the match.
5. Click the "Reset" button to restart the game whenever you like.

## Technologies Used

- **React**: Front-end library used for building the interactive game interface.
- **JavaScript**: Handles the game logic and dynamic functionality.
- **CSS**: Adds styling and layout to create a visually appealing game board.

## Concepts Applied

This project leverages several key React concepts:

- **Components**: The game is organized into modular, reusable components like `Board`, `Square`, and `Header` for clean architecture.
- **State Management**: React's `useState` hook is used to manage the game's state, including the board layout, current player, and winner status.
- **Event Handling**: User interactions, such as clicking on a cell, trigger updates to the game state dynamically.
- **Conditional Rendering**: React conditionally renders the game status (e.g., "Player Wins!" or "It's a Tie!") based on the current state.
- **Props**: Data is passed between components using props, ensuring separation of concerns.
- **Effect Hook**: The computer's move logic is implemented using React's `useEffect` to handle side effects effectively.

## Feedback

I’d love to hear your thoughts and suggestions! If you try the game, feel free to share your feedback or ideas for improvements.

---

Thank you for checking out my project! 🚀

## Acknowledgements

- React documentation for providing excellent resources.
- Inspiration from classic Tic Tac Toe games.
