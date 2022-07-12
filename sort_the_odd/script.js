function sortArray(array) {
  let oddNumbers = [];

  array.forEach((num) => {
    if (num % 2) oddNumbers.push(num);
  });
  oddNumbers = oddNumbers.sort((a, b) => a - b);

  let i = 0;
  const newArray = array.map((num, index, arr) => {
    if (num % 2) {
      arr[index] = oddNumbers[i];
      i++;
    }
    return arr[index];
  });

  return newArray;
}
