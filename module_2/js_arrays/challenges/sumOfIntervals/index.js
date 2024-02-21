const normalizeIntervals = (intervals) => {
    const newIntervals = [];
    const first = [intervals[0][0], intervals[0][1]];

    for (const elem of intervals) {
        if ((elem[0] >= first[0] && elem[0] <= first[1]) && elem[1] >= first[1]) {
            first[1] = elem[1];
        } else if ((elem[0] > first[1]) || (elem[1] < first[0])) {
            newIntervals.push([first[0], first[1]]);
            first[0] = elem[0];
            first[1] = elem[1];
        } else {
            if (elem[0] < first[0]) {
                first[0] = elem[0];
            }
            if (elem[1] > first[1]) {
                first[1] = elem[1];
            }
        }
    }
    newIntervals.push(first);

    return newIntervals;
};

const sumIntervals = (intervals) => {
    const nomInt = normalizeIntervals(intervals);

    let result = 0;
    for (const elem of nomInt) {
        result += elem[0] > 0
          ? elem[1] - [elem[0]]
          : -elem[0] + elem[1];
    }

    return result;
};

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
