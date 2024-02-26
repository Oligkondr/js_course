const summaryRanges = (range) => {
    const result = [];
    let start = range[0];
    let end = 0;
    let temp = `${start}->${end}`;
    for (let i = 1; i < range.length; i++) {
        console.log(range[i]);
        console.log(range[i - 1]);
        let x = range[i] - range[i - 1] === 1
        console.log(x);
        if (x) {
            end = range[i];
            console.log(end);
            console.log('----');
        } else {
            result.push(temp);
            start = range[i];
        }
    }
    result.push(temp)
    return result;
};

const range = [1, 2, 3, 4, 5];

console.log(summaryRanges(range));
