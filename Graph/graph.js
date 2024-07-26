
class Graph {
    constructor(size) {
      this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
      this.size = size;
      this.vertexData = Array(size).fill('');
    }
  
    addEdge(u, v) {
      if (0 <= u && u < this.size && 0 <= v && v < this.size) {
        this.adjMatrix[u][v] = 1;
        this.adjMatrix[v][u] = 1;
      }
    }
  
    addVertexData(vertex, data) {
      if (0 <= vertex && vertex < this.size) {
        this.vertexData[vertex] = data;
      }
    }
  
    printGraph() {
      console.log('Adjacency Matrix:');
      for (const row of this.adjMatrix) {
        console.log(row.join(' '));
      }
      console.log('\nVertex Data:');
      for (let vertex = 0; vertex < this.size; vertex++) {
        console.log(`Vertex ${vertex}: ${this.vertexData[vertex]}`);
      }
    }
  
    dfsUtil(v, visited) {
      visited[v] = true;
      console.log(this.vertexData[v], 'visited');
  
      for (let i = 0; i < this.size; i++) {
        if (this.adjMatrix[v][i] === 1 && !visited[i]) {
          this.dfsUtil(i, visited);
        }
      }
    }
  
    dfs(startVertexData) {
      const visited = Array(this.size).fill(false);
      const startVertex = this.vertexData.indexOf(startVertexData);
      this.dfsUtil(startVertex, visited);
    }
  }
  
  
let g = new Graph(7);

g.addVertexData(0, 'A');
g.addVertexData(1, 'B');
g.addVertexData(2, 'C');
g.addVertexData(3, 'D');
g.addVertexData(4, 'E');
g.addVertexData(5, 'F');
g.addVertexData(6, 'G');

g.addEdge(3, 0);
g.addEdge(0, 2);
g.addEdge(0, 3);  // A - D
g.addEdge(0, 4);  // A - E
g.addEdge(4, 2); // E - C
g.addEdge(2, 5);// C - F
g.addEdge(2, 1); // C - B
g.addEdge(2, 6); // C - G
g.addEdge(1, 5);  // B - F

g.dfs('A');