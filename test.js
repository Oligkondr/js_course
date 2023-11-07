// const res = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];
// console.log(res[0]);
// console.log(res[0][0]);
// console.log(res[0][1]);

// const array = [1, 2, 3, 4, 5];
// const out = [1, 2];
// for (const x of array) {
//     if (!out.includes(x)) {
//         console.log(x);
//     }
// }

// const a = 'apple'
// console.log(`>>>${a}<<<`);

// const ar = [];
// if (ar.length) {
//     console.log('yes');
// }else {
//     console.log('no');
// }

const locations = [['Park', [10, 5]], ['Sea', [1, 3]], ['Museum', [8, 4]]];

for (const [x, [y, z]] of locations) {
    console.log([x, [y, z]]);
}
