import React from 'react';

function Cards(props) {
  const randomChars = props.getRandomChars();
  return (
    <div className="card-container">
      {randomChars.map((obj, index) => (
        <div key={index} className="card" onClick={props.onSelection(obj)}>
          {obj.name}
        </div>
      ))}
    </div>
  );
}

export default Cards;
