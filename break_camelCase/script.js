function solution(str) {
  return str
    .split("")
    .map((letter) => (letter === letter.toUpperCase() ? " " + letter : letter))
    .join("");
}
