function towerBuilder(floors) {
  let space,
    star,
    tower = [];
  for (let i = 1, j = 0; i <= floors; i++) {
    space = " ".repeat(floors - i);
    star = "*".repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}
towerBuilder(8);
