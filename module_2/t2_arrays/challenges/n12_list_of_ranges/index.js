const summaryRanges = (range) => {
    const result = [];
    let start = range[0];
    let end = 0;
    let temp = '';
    let count = 0;
    for (let i = 1; i < range.length; i++) {
        if (range[i] - range[i - 1] === 1) {
            end = range[i];
            temp = `${start}->${end}`;
            count++;
        } else {
            if (count > 1) {
                result.push(temp);
                temp = '';
            }
            start = range[i];
            count = 0;
        }
    }

    if (temp) {
        result.push(temp);
    }

    return result;
};
console.log(summaryRanges([1, 2, 3, 4, 5, 1, 3, 4, 5, 7]));
