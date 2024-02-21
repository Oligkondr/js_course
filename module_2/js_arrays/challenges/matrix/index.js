const multiply = (matrixA, matrixB) => {

    const matrixAColumns = matrixA[0].length;
    const matrixBLines = matrixB.length;

    if (!matrixAColumns === matrixBLines) {
        return 'Error';
    }

    const matrixC = []

    const line1 = []

    let temp = 0
    for (const line of matrixA) {
        for (const elem of line) {
        }
    }
};

const mat1 = [[1, 2], [3, 2]];
const mat2 = [[3, 2], [1, 1]];

multiply(mat1, mat2);
