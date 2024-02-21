import {isValidField} from './index.js';

const battleField1 = [];
const battleField2 = [
    [0, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 1],
];
const battleField3 = [
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 1],
];
const battleField4 = [
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
];

const battleField5 = [
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
];

const battleField6 = [
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
];

console.log(isValidField(battleField1)); // true
console.log(isValidField(battleField2)); // false
console.log(isValidField(battleField3)); // true
console.log(isValidField(battleField4)); // true
console.log(isValidField(battleField5)); // false
console.log(isValidField(battleField6)); // true
