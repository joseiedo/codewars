function moveZeros(arr) {
  const zeros = arr.filter((item) => item === 0).length;
  const cleanedArray = arr.filter((item) => item !== 0);

  for (let i = 0; i < zeros; i++) {
    cleanedArray.push(0);
  }

  return cleanedArray;
}
