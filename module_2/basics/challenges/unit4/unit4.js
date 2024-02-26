const fib = (n) => {
    let sum = 0;
    let firs = 0;
    let second = 1;

    if (n <= 1) return n;

    for (let i = 2; i <= n; i++) {
        sum = firs + second;
        firs = second;
        second = sum;
    }
    return sum;
};
