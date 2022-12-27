function importAll(r) {
  return r.keys().map(r);
}

const wantedArr = importAll(require.context('../assets/OnePieceWantedImages/', false, /\.(webp)$/));

export default wantedArr;
