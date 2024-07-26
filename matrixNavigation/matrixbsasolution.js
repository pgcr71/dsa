/*  Question: 
    Consider a rat placed at (0, 0) in a square matrix of order N * N. 
    It has to reach the destination at (N – 1, N – 1).
    Find all possible paths that the rat can take to reach from source to destination. 
    The directions in which the rat can move are ‘U'(up), ‘D'(down), ‘L’ (left), ‘R’ (right). 
    Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 
    at a cell in the matrix represents that rat can be travel through it. 
    Return the list of paths in lexicographically increasing order.
     Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.
*/

// Initialize a string direction which represents all the directions.
const direction = "DLRU";

// Arrays to represent change in rows and columns
const dr = [1, 0, 0, -1];
const dc = [0, -1, 1, 0];

// Function to check if cell(row, col) is inside the maze
// and unblocked
function isValid(row, col, n, maze) {
    return row >= 0 && col >= 0 && row < n && col < n
        && maze[row][col] === 1;
}

// Function to get all valid paths
function findPath(row, col, maze, n, ans, currentPath) {
    // If we reach the bottom right cell of the matrix, add
    // the current path to ans and return
    if (row === n - 1 && col === n - 1) {
        ans.push(currentPath);
        return;
    }
    // Mark the current cell as blocked
    maze[row][col] = 0;

    for (let i = 0; i < 4; i++) {
        // Find the next row based on the current row (row)
        // and the dr[] array
        const nextrow = row + dr[i];
        // Find the next column based on the current column
        // (col) and the dc[] array
        const nextcol = col + dc[i];

        // Check if the next cell is valid or not
        if (isValid(nextrow, nextcol, n, maze)) {
            currentPath += direction[i];
            // Recursively call the findPath function for
            // the next cell
            findPath(nextrow, nextcol, maze, n, ans, currentPath);
            // Remove the last direction when backtracking
            currentPath = currentPath.slice(0, -1);
        }
    }
    // Mark the current cell as unblocked
    maze[row][col] = 1;
}

// Driver code
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];

const n = maze.length;
// Array to store all the valid paths
const result = [];
// Store current path
let currentPath = "";

if (maze[0][0] !== 0 && maze[n - 1][n - 1] !== 0) {
    // Function call to get all valid paths
    findPath(0, 0, maze, n, result, currentPath);
}

if (result.length === 0)
    console.log(-1);
else
    console.log(result.join(" "));