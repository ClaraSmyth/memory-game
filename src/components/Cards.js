import React from 'react';

function Cards(props) {
  const randomChars = props.getRandomChars();
  return (
    <div className="card-container">
      {randomChars.map((obj, index) => (
        <div key={index} className="card" onClick={props.onSelection(obj)}>
          <img src={obj.image} alt=""></img>
          <p>{obj.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
