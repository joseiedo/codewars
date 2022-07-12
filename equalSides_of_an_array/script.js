function findEvenIndex(arr) {
  function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  return arr.findIndex(
    (el, i, arr) => sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length))
  );
}
