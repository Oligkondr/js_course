const sameParity = (arr) => {
    const firsParity = arr[0] % 2 === 0;
    return arr.filter((num) => (num % 2 === 0) === firsParity);
};

console.log(sameParity([-1, 0, 1, -3, 10, 2]));
console.log(sameParity([2, 0, 1, -3, 10, -2]));
console.log(sameParity([]));
