import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';
import { charArr } from './utilities';
import { useState } from 'react';
import { Header, Scoreboard, Cards, Footer } from './components/';

function App() {
  const [characters, setCharacters] = useState(charArr);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [canPlayAudio, setCanPlayAudio] = useState(1);

  const onSelection = (obj) => {
    // Check if game should be reset
    const reset = selected.some((object) => object.name === obj.name);

    setScore(reset ? 0 : score + 1);
    setSelected(reset ? [] : [...selected, obj]);
    setCharacters(reset ? charArr : [...characters.filter((char) => char.name !== obj.name)]);

    if (score === highScore && !reset) setHighScore(highScore + 1);
  };

  return (
    <div className="App">
      <Header />

      <Scoreboard score={score} highScore={highScore} />

      <Cards characters={characters} selected={selected} onSelection={onSelection} canPlayAudio={canPlayAudio} />

      <Footer canPlayAudio={canPlayAudio} setCanPlayAudio={setCanPlayAudio} />

      <video id="background-video" autoPlay loop muted playsInline poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
