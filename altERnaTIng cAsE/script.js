String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((letter, i, arr) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
};
