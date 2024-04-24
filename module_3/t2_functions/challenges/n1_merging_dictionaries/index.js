const merge = (...arrays) =>
    arrays.reduce((acc, array) => {
        const keys = Object.keys(array);
        for (const key of keys) {
            Object.hasOwn(acc, key)
                ? (!acc[key].includes(array[key])
                    ? acc[key].push(array[key])
                    : acc[key])
                : acc[key] = [array[key]];
        }
        return acc;
    }, {});


console.log(merge(
    {a: 1, b: 2, c: 3},
    {},
    {a: 3, b: 2, d: 5},
    {a: 6},
    {b: 4, c: 3, d: 2},
    {e: 9},
));