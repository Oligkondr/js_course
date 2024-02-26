const generator = (rowNum) => {
    if (rowNum === 0) {
        return [1];
    }
    let result = [];
    for (let row = 1; row <= rowNum + 1; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row - 2][col - 1] + result[row - 2][col]));
            }
        }
        result.push(arr);
    }
    return result[rowNum];
};

console.log(generator(1));
console.log(generator(4));
