const smallestDivisor = (num) => {
    if (num === 1) return 1;
    if (num % 2 === 0) return 2;

    const iter = (counter, divisor) => {
        if (counter % divisor === 0) return divisor;
        return iter(counter, ++divisor);
    };

    return iter(num, 2);
};
