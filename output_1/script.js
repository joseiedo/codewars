print("---------------------------------------");

for (let row = 0; row < 5; row++) {
  print(`|${" ".repeat(37)}|`);
}

print("---------------------------------------");

// Array Pares

var array = [2, 3, 5, 7, 11, 13, 18, 34];

const arrayPares = array.filter((item) => {
  if (item % 2 === 0) return item;
});

arrayPares.forEach((item) => console.log(item));
