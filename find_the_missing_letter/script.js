function findMissingLetter(array) {
  let missingLetter = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
        const charCodeBefore = array[i].charCodeAt(0);
        missingLetter = String.fromCharCode(charCodeBefore + 1);
      }
    }
  }
  return missingLetter;
}
