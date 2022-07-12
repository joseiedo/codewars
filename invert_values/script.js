function invert(array) {
  return array.map((item, index, arr) => {
    if (item < 0) arr[index] = -item;
    else arr[index] = -item;

    return arr[index];
  });
}

// é. dá pra fazer com 1 linha

function invert(array) {
  return array.map((x) => -x);
}
