function spinWords(string) {
  const arrayString = string.split(" ");

  arrayString.map((word, i, frase) => {
    if (word.length >= 5) {
      arrayWord = word.split("").reverse();
      frase[i] = arrayWord.join("");
    }
  });

  return arrayString.join(" ");
}
