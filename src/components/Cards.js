import React from 'react';
import getCharacters from '../utilities/getCharacters';

function Cards(props) {
  const characters = getCharacters();

  return (
    <div className="card-container">
      {characters.map((obj, index) => (
        <div key={index} className="card">
          {obj.name}
        </div>
      ))}
    </div>
  );
}

export default Cards;
