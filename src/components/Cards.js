import React, { useState, useEffect } from 'react';
import { wantedArr, getRandomChars } from '../utilities';
import sound from '../assets/sound-effects/card-flip.mp3';

function Cards(props) {
  const { characters, selected, canPlayAudio } = props;
  const [randomChars, setRandomChars] = useState([]);
  const [cardBacks, setCardBacks] = useState([]);
  const [canClick, setCanClick] = useState(1);
  const [firstLoad, setFirstLoad] = useState(1);

  const audioClip = new Audio(sound);
  const playAudioClip = () => {
    if (canPlayAudio && !firstLoad) audioClip.play();
  };

  useEffect(() => {
    setTimeout(
      () => {
        setRandomChars(getRandomChars(characters, selected));
        playAudioClip();
        setFirstLoad(0);
      },
      randomChars.length ? 1000 : 0
    );
    // eslint-disable-next-line
  }, [characters, selected]);

  useEffect(() => {
    setCardBacks(wantedArr.sort(() => Math.random() - 0.5));
  }, [randomChars]);

  const handleClick = (obj) => {
    if (!canClick) return;

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
          easing: 'ease-in-out',
        }
      )
    );

    props.onSelection(obj);
    playAudioClip();

    setTimeout(() => {
      setCanClick(1);
    }, 2000);
  };
  return (
    <div className="card-container">
      {randomChars.map((obj, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleClick(obj)}
          style={{ '--bg-image': `url(${cardBacks[index]})` }}
        >
          <img src={obj.image} alt=""></img>
          <p>{obj.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
