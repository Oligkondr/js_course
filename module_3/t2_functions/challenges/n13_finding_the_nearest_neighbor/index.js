const findIndexOfNearest = (arr, num) => {
    if (!arr.length) {
        return null;
    }
    let clo = arr[0] - num;
    return arr.reduce((acc, elem, i) => {
        const x = Math.abs(elem - num)
        if (x < clo) {
            clo = x
            acc = i
        }
        return acc;
    }, 0)
};
// console.log(findIndexOfNearest([15, 10, 3, 4], 0));
// console.log(findIndexOfNearest([7, 5, 3, 2], 4));
// console.log(findIndexOfNearest([10], 0));
// console.log(findIndexOfNearest([15, 10], 0));
// console.log(findIndexOfNearest([], 2));
// console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4));
