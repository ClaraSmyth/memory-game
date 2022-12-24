import React, { useState, useEffect } from 'react';

function Cards(props) {
  const [randomChars, setRandomChars] = useState(props.getRandomChars());
  const [canClick, setCanClick] = useState(1);
  const [firstLoad, setFirstLoad] = useState(1);

  useEffect(() => {
    if (!firstLoad) {
      setTimeout(() => {
        setRandomChars(props.getRandomChars());
      }, 1000);
    }
  }, [props, firstLoad]);

  const handleClick = (obj) => {
    if (!canClick) return;

    setFirstLoad(0);
    setCanClick(0);

    document.querySelectorAll('.card').forEach((element) =>
      element.animate(
        [
          // keyframes
          { transform: 'rotateY(0turn)' },
          { transform: 'rotateY(0.5turn)' },
        ],
        {
          // options
          duration: 1000,
          iterations: 2,
          direction: 'alternate',
        }
      )
    );

    props.onSelection(obj);

    setTimeout(() => {
      setCanClick(1);
    }, 2000);
  };
  return (
    <div className="card-container">
      {randomChars.map((obj, index) => (
        <div key={index} className="card" onClick={() => handleClick(obj)}>
          <img src={obj.image} alt=""></img>
          <p>{obj.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
