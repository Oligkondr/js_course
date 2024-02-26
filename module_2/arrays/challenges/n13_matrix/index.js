const rotateLeft = (matrix) => {
    return matrix[0].map((val, index) => matrix.map(row => row[row.length - 1 - index]));
}
const rotateRight = (matrix) => {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}
