import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';

import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <h1>One Piece Memory Game</h1>

      <Scoreboard />

      <Cards />

      <video id="background-video" autoPlay loop muted poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
