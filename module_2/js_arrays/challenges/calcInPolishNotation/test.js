import calcInPolishNotation from './solution.js';

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])); // 15
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])); // 1
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '/'])); // 4
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])); // 1
console.log(calcInPolishNotation([1, 2, '+', 2, '*'])); // 6
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 0, '/'])); // null
console.log(calcInPolishNotation([3, 0, '/', 2, '+'])); // null
console.log(calcInPolishNotation([7, 12, 2, '/', '-'])); // 1
console.log(calcInPolishNotation([8, 6, 2, '-', '/'])); // 2
console.log(calcInPolishNotation([5, 2, '-', 0, '+'])); // 3
