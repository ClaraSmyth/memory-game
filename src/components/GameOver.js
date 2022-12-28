import React from 'react';
import gif from '../assets/luffy.gif';

function GameOver(props) {
  return (
    <div className="modal">
      <div className="game-over">
        <h2>Game Over!</h2>
        <p>You guessed all the characters correctly!</p>
        <img src={gif} alt=""></img>
        <button onClick={props.resetGame}>Restart</button>
      </div>
    </div>
  );
}

export default GameOver;
