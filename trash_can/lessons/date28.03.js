// Задание 1
const summa = (n) => {
    const iter = (counter, acc) => {
        if (counter > n) {
            return acc;
        }
        return iter(counter + 1, acc + counter);
    };
    return iter(10, 0);
};
// console.log(summa(12));

// Задание 2 !!!!!
const fib = (n) => {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    const iter = (counter, a, b) => {
        if (counter === 1) {
            return b;
        }
        return iter(counter - 1, b, a + b);
    };
    return iter(n, 0, 1);
};
console.log(fib(6));

// Задание 3
// const multi = (n, m) => {
//     const iter = (counter, acc) => {
//         if (counter > m) {
//             return acc;
//         }
//         return iter(counter + 1, counter * acc);
//     };
//     return;
// };
// console.log(multi(2, 5));

// Задание 4
const power = (a, n) => {
    const iter = (counter, acc) => {
        if (counter > n) {
            return acc;
        }
        return iter(counter + 1, acc * a);
    };
    return iter(1, 1);
};
// console.log(power(5, 4))

// Задание 5
const sumFibonacci = (n) => {

}

// Задание 6
const nod = (n) => {
    const iter = (counter, acc) => {

    }
    return iter(n, 1)
};
