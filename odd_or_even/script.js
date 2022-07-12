function oddOrEven(array) {
  const sum = array.reduce((acc, el) => (acc += el), 0);
  return sum % 2 ? "odd" : "even";
}
