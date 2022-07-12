function alphabetPosition(text) {
  return text
    .replace(/[^a-zA-Z]/g, "") //first, remove all the chars that AREN'T  in A-z range.
    .toLowerCase() //put everyone to lowercase!
    .split("") //makes an array with all the letters
    .map((e) => e.replace(e, e.charCodeAt(e) - 96)) //replace them with their position.
    .join(" "); //convert to string again :DDDDD
}
