function findUniq(arr) {
  //gets the number that isn't unique :)
  let repeatedNumber = arr.filter((el, i) => arr.indexOf(el) !== i);

  //let's go again to the array and find out the element that is unique!
  return arr.filter((el) => el !== repeatedNumber[0])[0];
}
