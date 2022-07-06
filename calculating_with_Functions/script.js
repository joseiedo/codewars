function calcEverything(operator, num1, num2) {
  console.log(`${operator} ${num1} ${num2}`);
  if (operator === "plus") {
    return num2 + num1;
  } else if (operator === "minus") {
    return num2 - num1;
  } else if (operator === "multiply") {
    return Math.abs(num2 * num1);
  } else if (operator === "divide") {
    resultado = num2 / num1;
    return Math.floor(resultado);
  } else {
    return num2;
  }
}

function zero(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 0);
}

function one(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 1);
}

function two(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 2);
}

function three(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 3);
}

function four(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 4);
}

function five(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 5);
}

function six(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 6);
}

function seven(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 7);
}

function eight(num = [0, 0]) {
  operator = num[1];
  number = num[0];
  return calcEverything(operator, number, 8);
}

function nine(num = [0, 0]) {
  operator = num[1];
  number = num[0];

  return calcEverything(operator, number, 9);
}

function plus(num) {
  operator = "plus";
  return [num, operator];
}

function minus(num) {
  operator = "minus";
  return [num, operator];
}

function times(num) {
  operator = "multiply";
  return [num, operator];
}

function dividedBy(num) {
  operator = "divide";
  return [num, operator];
}

let operator = "";
