import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';

function App() {
  return (
    <div className="App">
      <div>Test</div>
      <video id="background-video" autoPlay loop muted poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
