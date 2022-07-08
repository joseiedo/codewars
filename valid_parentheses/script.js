function validParentheses(parens) {
  let parentesesAberto = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      parentesesAberto += 1;
    } else {
      parentesesAberto -= 1;
    }
    if (parentesesAberto < 0) {
      return false;
    }
  }

  if (parentesesAberto === 0) {
    return true;
  }
  return false;
}
