const hammingWeight = (num) => {
    const binaryValue = parseInt(num, 10).toString(2);
    let counter = 0;
    for (let i = 0; i <= binaryValue.length; i += 1) {
        if (Number(binaryValue[i]) === 1) {
            counter += 1;
        }
    }
    console.log(counter)
    return counter;
};
