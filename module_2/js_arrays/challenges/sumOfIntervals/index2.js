const sumIntervals = (intervals) => {
    const value = [];
    for (const [start, end] of intervals) {
        for (let i = start; i < end; i++) {
            if (!value.includes(i)) {
                value.push(i)
            }
        }
    }
    return value.length;
}

const intervals1 = [[1, 5], [-30, 19], [1, 7], [16, 19], [5, 100]];
const intervals2 = [[1, 2], [11, 12]];
const intervals3 = [[1, 4], [2, 7], [5, 8], [3, 11]];
const intervals4 = [[-1, 4], [2, 5], [7, 10]];
const intervals5 = [[5, 5]];

console.log(sumIntervals(intervals1));
console.log(sumIntervals(intervals2));
console.log(sumIntervals(intervals3));
console.log(sumIntervals(intervals4));
console.log(sumIntervals(intervals5));
