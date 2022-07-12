function generateHashtag(str) {
  if (str.trim() === "") return false;

  const capitalizedLetters = str
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
  const strWithHashtag = `#${capitalizedLetters}`;

  return strWithHashtag.length > 140 ? false : strWithHashtag;
}
