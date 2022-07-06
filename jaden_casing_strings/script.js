String.prototype.toJadenCase = function () {
  str = this.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    //somando com o substr garante que vai pegar a palavra toda!
  }
  return str.join(" ");
};
