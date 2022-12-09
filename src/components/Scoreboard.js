import React from 'react';

function Scoreboard(props) {
  return (
    <div className="scoreboard-container">
      <p>Score: {props.score}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  );
}

export default Scoreboard;
