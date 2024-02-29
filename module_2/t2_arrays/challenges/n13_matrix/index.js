const rotateLeft = (matrix) => matrix[0]
  .map((val, index) => matrix.map((row) => row[row.length - 1 - index]));

const rotateRight = (matrix) => matrix[0]
  .map((val, index) => matrix.map((row) => row[index]).reverse());


const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
]

console.log(rotateLeft(matrix));
console.log(rotateRight(matrix));
