let directions = "RDLT";

let drow = [0, -1, 0, 1];
let dcol = [1, 0, -1, 0];

let nav = [[0, 0]];
class Cell  {
    constructor(x, y, dist, prev) {
        this.x = x;
        this.y = y;
        this.dist = dist; //distance
        this.prev = prev; //parent cell in the path
    }

	toString() {
		return "(" + this.x + ", " + this.y + ")";
	}
}

var matrix = [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1]
];
let count=0;
const visited = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(new Cell()))
let ind = []
for(let i=0; i< matrix.length; i++) {
    ind.push([])
    for (let j=0; j<matrix[0].length; j++) {
        ind[i].push(`${i}-${j}`)
    }
}
console.log(ind)

function isValid(row, column) {
    return (row >= 0) && (column >= 0) && (row < matrix.length) && (column < matrix[0].length) && (matrix[row][column] === 1) && !visited[row][column]
}

visited[0][0] = true;
while (nav.length !== 0) {
    let lastElem = nav.shift();
    if (lastElem[0] === matrix.length - 1 && lastElem[1] == matrix[0].length - 1) {
        
    }
        
    let rowIndex = lastElem[0];
    let columnIndex = lastElem[1];
    let divergencies = 0;
    for (let i = 0; i < drow.length; i++) {
        let nextRow = rowIndex + drow[i];
        let nextCol = columnIndex + dcol[i];
        let isValid1 = isValid(nextRow, nextCol);

        if (isValid1) {
            divergencies++;
            visited[nextRow][nextCol] = true;
            nav.push([nextRow, nextCol])
        }
        for(let i=0; i<divergencies; i++) {
            paths
        }
    }

}
