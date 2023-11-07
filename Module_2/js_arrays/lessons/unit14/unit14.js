const getSameCount = (array1, array2) => {
    let count = 0;
    const workedOut = [];
    for (const x of array1) {
        for (const y of array2) {
            if (x === y && !workedOut.includes(x)) {
                count += 1;
                workedOut.push(x);
            }
        }
    }
    return count;
};

export default getSameCount;
