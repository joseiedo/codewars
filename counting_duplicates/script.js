function duplicateCount(text) {
  if (!text) return 0;
  let letrasRepetidas = [];

  const textArray = text.toLowerCase().trim().split("");
  for (let i = 0; i < textArray.length; i++) {
    for (let j = i + 1; j < textArray.length; j++) {
      if (textArray[j] === textArray[i]) letrasRepetidas.push(textArray[j]);
    }
  }

  return letrasRepetidas
    .sort()
    .filter((item, index, arr) => item !== arr[index + 1]).length;
}
