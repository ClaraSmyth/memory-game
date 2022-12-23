function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/OnePieceCharacterImages/', false, /\.(webp)$/));

const characters = images.map((path) => {
  return {
    name: path.split(/[., /]/)[3],
    image: path,
  };
});

export default characters;
