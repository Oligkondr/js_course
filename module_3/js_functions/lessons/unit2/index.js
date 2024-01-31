const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};
const sayPrimeOrNot = num => isPrime(num) ? 'yes' : 'no';

console.log(sayPrimeOrNot(4));
console.log(sayPrimeOrNot(5));
