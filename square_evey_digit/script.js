function squareDigits(num) {
  let novaString = [];
  numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    novaString[i] = numString[i] * numString[i];
  }
  return +novaString.join("");
}
