import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';
import { charArr } from './utilities';
import { useState } from 'react';
import { Header, Scoreboard, Cards, Footer, GameOver } from './components/';

function App() {
  const [characters, setCharacters] = useState(charArr);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [canPlayAudio, setCanPlayAudio] = useState(1);

  const resetGame = () => {
    setScore(0);
    setSelected([]);
    setCharacters(charArr);
  };

  const onSelection = (obj) => {
    // Check if game should be reset
    if (selected.some((object) => object.name === obj.name)) {
      resetGame();
      return;
    }

    setScore(score + 1);
    setSelected([...selected, obj]);
    setCharacters([...characters.filter((char) => char.name !== obj.name)]);

    if (score === highScore) setHighScore(highScore + 1);
  };

  return (
    <div className="App">
      <Header />

      <Scoreboard score={score} highScore={highScore} />

      {selected.length === charArr.length ? (
        <GameOver resetGame={resetGame} />
      ) : (
        <Cards characters={characters} selected={selected} onSelection={onSelection} canPlayAudio={canPlayAudio} />
      )}

      <Footer canPlayAudio={canPlayAudio} setCanPlayAudio={setCanPlayAudio} />

      <video id="background-video" autoPlay loop muted playsInline poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
