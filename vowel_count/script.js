function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strArray = str.split(" ");
  let points = 0;
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray[i].length; j++) {
      if (
        strArray[i][j] === "a" ||
        strArray[i][j] === "e" ||
        strArray[i][j] === "i" ||
        strArray[i][j] === "o" ||
        strArray[i][j] === "u"
      ) {
        points++;
      }
    }
  }
  return points;
}
