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
