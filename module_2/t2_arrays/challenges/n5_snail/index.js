const buildSnailPath = (matrix) => {
    let finalArray = [];
    while (matrix.length) {
        finalArray.push(...matrix.shift());
        for (let i = 0; i < matrix.length; i++) {
            finalArray.push(matrix[i].pop());
        }
        finalArray.push(...(matrix.pop() || []).reverse());
        for (let i = matrix.length - 1; i >= 0; i--) {
            finalArray.push(matrix[i].shift());
        }
    }
    return finalArray;
};

const Path = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]

console.log(buildSnailPath(Path));
