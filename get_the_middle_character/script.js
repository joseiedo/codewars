function getMiddle(s) {
  const i = s.length / 2;
  return s.length % 2 ? `${s[i - 0.5]}` : `${s[i - 1]}${s[i]}`;
}
