const characters = [
  { name: 'Luffy', image: null },
  { name: 'Nami', image: null },
  { name: 'Zoro', image: null },
  { name: 'Usopp', image: null },
  { name: 'Sanji', image: null },
  { name: 'Chopper', image: null },
  { name: 'Robin', image: null },
];

// Function returns an array with 5 random characters
const getCharacters = () => {
  const newArray = [];

  for (let i = 0; newArray.length < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];

    if (newArray.length === 0) {
      newArray.push(randomCharacter);
    }

    // Checks to make sure randomCharacter isnt a duplicate
    if (!newArray.some((obj) => obj.name === randomCharacter.name)) {
      newArray.push(randomCharacter);
    }
  }

  return newArray;
};

export default getCharacters;
