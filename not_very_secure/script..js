function alphanumeric(string) {
  if (string === "" || string.includes(" ")) return false;

  const pattern = /^[0-9a-zA-Z]{1,}$/;

  return pattern.test(string);
}
