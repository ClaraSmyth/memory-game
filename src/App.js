import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';
import charArr from './utilities/charArr';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(charArr);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const onSelection = (obj) => (e) => {
    e.preventDefault();

    // If the selection already exists reset game
    if (selected.some((object) => object.name === obj.name)) {
      setScore(0);
      setSelected([]);
      setCharacters(charArr);
      return;
    }

    setScore(score + 1);
    setSelected([...selected, obj]);
    setCharacters([...characters.filter((char) => char.name !== obj.name)]);

    if (score === highScore) setHighScore(highScore + 1);
  };

  const getRandomChars = () => {
    const arr1 = [...selected.sort(() => Math.random() - 0.5)];
    const arr2 = [...characters.sort(() => Math.random() - 0.5)];

    const newArray = [];

    while (newArray.length < 10) {
      if (arr1.length) newArray.push(arr1.pop());
      if (arr2.length) newArray.push(arr2.pop());
    }

    return newArray.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="App">
      <h1>One Piece Memory Game</h1>

      <Scoreboard score={score} highScore={highScore} />

      <Cards getRandomChars={getRandomChars} onSelection={onSelection} />

      <video id="background-video" autoPlay loop muted poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
