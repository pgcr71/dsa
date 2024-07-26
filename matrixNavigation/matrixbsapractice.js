let directions = "RDLT";

let drow = [0, -1, 0, 1];
let dcol = [1, 0, -1, 0];

let nav = [[0, 0]];
class Cell {
  path;
  parent = [];
  visited = false;
  constructor(x, y) {
    this.x = x;
    this.y = y; //parent cell in the path
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

var matrix = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1],
];
let count = 0;
const cells = new Array(matrix.length)
  .fill(0)
  .map((_, i) =>
    new Array(matrix[0].length).fill(0).map((_, j) => new Cell(i, j)),
  );

function isValid(row, column) {
  return (
    row >= 0 &&
    column >= 0 &&
    row < matrix.length &&
    column < matrix[0].length &&
    matrix[row][column] === 1
  );
}

cells[0][0].visited = true;
cells[0][0].path = "(0,0)";
while (nav.length !== 0) {
  const lastElem = nav.shift();
  let rowIndex = lastElem[0];
  let columnIndex = lastElem[1];
  for (let i = 0; i < drow.length; i++) {
    let nextRow = rowIndex + drow[i];
    let nextCol = columnIndex + dcol[i];
    if (isValid(nextRow, nextCol)) {
      cells[nextRow][nextCol].visited = true;
      cells[nextRow][nextCol].parent.push(cells[lastElem[0]][lastElem[1]]);
      cells[nextRow][nextCol].path =
        `${cells[rowIndex][columnIndex].path}-(${nextRow}, ${nextCol})`;
      nav.push([nextRow, nextCol]);
    }
  }
}

console.log(cells[matrix.length - 1][matrix[0].length - 1]);
