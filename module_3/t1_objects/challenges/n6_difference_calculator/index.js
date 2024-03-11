const genDiff = (objA, objB) => {
    const result = {};

    const allKeys = Object.keys(objA);
    for (const key of Object.keys(objB)) {
        if (!allKeys.includes(key)) {
            allKeys.push(key);
        }
    }
    console.log(allKeys);

    for (const key of allKeys) {
        if (Object.hasOwn(objA, key) && !Object.hasOwn(objB, key)) {
            result[key] = 'deleted';
        }

        if (Object.hasOwn(objA, key) && Object.hasOwn(objB, key) && objA[key] !== objB[key]) {
            result[key] = 'changed';
        }

        if (objA[key] === objB[key]) {
            result[key] = 'unchanged';
        }

        if (!Object.hasOwn(objA, key) && Object.hasOwn(objB, key)) {
            result[key] = 'added';
        }
    }

    return result;
};

const objA = {
    one: 'eon',
    two: 'two',
    four: true,
};
const objB = {
    two: 'own',
    zero: 4,
    four: true,
};

console.log(genDiff(objA, objB));
