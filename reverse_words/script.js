function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .join(" ");
}
