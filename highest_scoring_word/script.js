function high(x) {
  let words = x.split(" "),
    max = 0,
    word = "";

  for (let i = 0; i < words.length; i++) {
    let currentString = words[i],
      points = 0;

    for (let j = 0; j < currentString.length; j++) {
      points += currentString.charCodeAt(j) - 96;
    }
    if (points > max) {
      max = points;
      word = currentString;
    }
  }

  return word;
}
