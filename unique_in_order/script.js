var uniqueInOrder = (iterable) =>
  [...iterable].filter((el, i) => el !== iterable[i - 1]);
