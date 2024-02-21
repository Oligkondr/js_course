const multiply = (matrixA, matrixB) => {

    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    const matrixC = [];

    if (colsA !== rowsB) {
        return false;
    }

    for (let i = 0; i < rowsA; i++) {
        matrixC[i] = [];
    }

    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let t = 0;
            for (let j = 0; j < rowsB; j++) {
                t += matrixA[i][j] * matrixB[j][k];
            }
            matrixC[i][k] = t;
        }
    }
    return matrixC;
};
