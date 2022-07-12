function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (!input) return [];

  for (let i = 0; i < input.length; i++) {
    input[i] <= 0 ? (negative += input[i]) : positive++;
  }

  if (positive === 0 && negative === 0) return [];
  return [positive, negative];
}
