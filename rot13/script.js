const rot13 = (message) => {
  const alpha =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-z]/gi,
    (letter) => alpha[alpha.indexOf(letter) + 13]
  );
};
