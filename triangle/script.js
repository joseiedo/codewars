function makeTriangle(height) {
  for (let row = "#"; row.length <= height; row += "#") {
    console.log(row);
  }
}

makeTriangle(8);
