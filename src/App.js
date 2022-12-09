import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';
import getCharacters from './utilities/getCharacters';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState([]);

  const characters = getCharacters();

  const onSelection = (obj) => (e) => {
    e.preventDefault();

    // If the selection already exists
    if (selected.some((object) => object.name === obj.name)) {
      return setSelected([]);
    }

    setSelected([...selected, obj]);
  };

  return (
    <div className="App">
      <h1>One Piece Memory Game</h1>

      <Scoreboard />

      <Cards characters={characters} onSelection={onSelection} />

      <video id="background-video" autoPlay loop muted poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
