function solution(number) {
  let sum = 0;

  if (number > 0) {
    for (let i = --number; i > 0; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  } else {
    return 0;
  }
}
