

/* The `rotate` function is attempting to rotate a square matrix by 90 degrees clockwise. It
checks if the matrix is valid (non-empty and square), then iterates through each layer of
the matrix and performs a series of swaps to rotate the elements. The function is using a
temporary variable `top` to store the value of the top element before swapping it with
the corresponding elements on the left, bottom, and right sides. 
[images/matrix90deg.png] */

function rotate90deg(matrix) {
    if (matrix.length == 0 || matrix.length != matrix[0].length) return false;
    let n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i]; // save top
            // left -> top
            debugger;
            matrix[first][i] = matrix[last - offset][first];
            // bottom -> left
            debugger;
            matrix[last - offset][first] = matrix[last][last - offset]
            //right -> bottom
            debugger;
            matrix[last][last - offset] = matrix[i][last];
            debugger;
            //top -> right
            matrix[i][last] = top; // right<- saved top
            debugger;
        }
    }
    return matrix.join('\n');
}

function spiralPrint(matrix) {
    let rowslength = matrix.length;
    let columnslength = matrix[0].length;
    let firstColumn = 0;
    let lastColumn = columnslength - 1;
    let firstrow = 0;
    let lastrow = rowslength - 1;

    while ((firstColumn <= lastColumn) && (firstrow <= lastrow)) {
        for (let i = firstColumn; i <= lastColumn; i++) {
            console.log(matrix[firstrow][i])
        }

        firstrow++;

        for (let i = firstrow; i <= lastrow; i++) {
            console.log(matrix[i][lastColumn])
        }
        lastColumn--;

        if ((lastrow >= firstrow)) {
            for (let i = lastColumn; (i >= firstColumn); i--) {
                console.log(matrix[lastrow][i])
            }
            lastrow--;
        }

        if ((lastColumn >= firstColumn)) {
            for (let i = lastrow; (i >= firstrow); i--) {
                console.log(matrix[i][firstColumn])
            }
            firstColumn++;
        }

    }
}

function makeEntireRowAndColumnZero(matrix) {
    const rowLength = matrix.length;
    const columnLength = matrix[0].length;
    const zeroCoordinate = []
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (matrix[i][j] === 0) {
                zeroCoordinate.push([i, j])
            }
        }
    }

    for (let [row, column] of zeroCoordinate) {
        for (let i = 0; i < rowLength; i++) {
            matrix[i][column] = 0
        }
        for (let i = 0; i < columnLength; i++) {
            matrix[row][i] = 0
        }
    }

    return matrix.join('\n');
}
console.log(makeEntireRowAndColumnZero([
    [1, 0, 3, 4],
    [5, 6, 0, 8],
    [1, 2, 7, 3] 
]))