const fill = (array, value, start = null, stop = array.length) => {
    for (const i in array) {
        if (start !== null) {
            i >= start && i < stop
              ? array[i] = value
              : array[i];
        } else {
            array[i] = value;
        }
    }
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];
const arr4 = [1, 2, 3, 4];

fill(arr1, '*');
console.log(arr1);
// fill(arr1, '*', 1, 3);
// console.log(arr1);
// fill(arr2, '*');
// console.log(arr2);
// fill(arr3, '*', 4);
// console.log(arr3);
// fill(arr4, '*', 0, 10);
// console.log(arr4);
