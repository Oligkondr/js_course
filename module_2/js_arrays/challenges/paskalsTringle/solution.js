var numRows = 10;

const pascalRecursive = (n, a) => {

    if (n < 2) return a;

    const prevRow = a[a.length - 1];
    const curRow = [1];

    for (let i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i - 1];
    }
    curRow.push(1);
    a.push(curRow);

    return pascalRecursive(n - 1, a);
};

const triangle = pascalRecursive(numRows, [[1]]);

for (let i = 0; i < triangle.length; i++)
    console.log(triangle[i] + '\n');
