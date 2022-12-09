import React from 'react';

function Cards(props) {
  return (
    <div className="card-container">
      {props.characters.map((obj, index) => (
        <div key={index} className="card" onClick={props.onSelection(obj)}>
          {obj.name}
        </div>
      ))}
    </div>
  );
}

export default Cards;
