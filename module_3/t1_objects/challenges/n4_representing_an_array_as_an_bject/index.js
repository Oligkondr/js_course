const fromPairs = (arrays) => {
    const result = {};

    for (const [key, value] of arrays) {
        result[key] = value;
    }

    return result;
};

const animals = [
    ['cat', 5], ['dog', 6], ['cat', 11],
];

console.log(fromPairs(animals));
