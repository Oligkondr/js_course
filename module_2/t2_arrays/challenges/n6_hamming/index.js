const hammingWeight = (num) => {
    const binaryValue = num.toString(2);
    let counter = 0;
    for (const elem of binaryValue) {
        if (Number(elem) === 1) {
            counter += 1;
        }
    }
    return counter;
};
console.log(hammingWeight(101));
