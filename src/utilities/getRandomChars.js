const getRandomChars = (charArr, selectedArr) => {
  const arr1 = [...charArr].sort(() => Math.random() - 0.5);
  const arr2 = [...selectedArr].sort(() => Math.random() - 0.5);

  const newArray = [];

  while (newArray.length < 4) {
    if (arr1.length) newArray.push(arr1.pop());
    if (arr2.length) newArray.push(arr2.pop());
  }

  return newArray.sort(() => Math.random() - 0.5);
};

export default getRandomChars;
