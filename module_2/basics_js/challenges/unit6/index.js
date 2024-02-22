const isPerfect = (num) => {
    if (num < 6) return false;

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
};

console.log(isPerfect(6));
console.log(isPerfect(0));
