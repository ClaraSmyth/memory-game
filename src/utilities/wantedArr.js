function importAll(r) {
  return r.keys().map(r);
}

const wantedArr = importAll(require.context('../assets/wanted-images/', false, /\.(webp)$/));

export default wantedArr;
