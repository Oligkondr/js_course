const rec = (num) => {
    if (num === 1) {
        return 1
    }
    return num + rec(num - 1)
};

const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};
console.log(fib(6));

const mul = (n, m) => {
    if (n > m) {
        return 1
    }
    if (n % 2 !== 0) {
        return n * mul(n + 1, m)
    } else {
        return mul(n + 1, m)
    }
}
// console.log(mult(1, 5))

const power = (a, n) => {
    if (n === 0) {
        return 1;
    }
    return a * power(a, n - 1);
};

// console.log(power(5, 2));
// console.log(power(2, 3));
// console.log(power(6, 7));
