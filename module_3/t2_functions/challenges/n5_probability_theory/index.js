const calculateProbabilities = (nums) => {
    const rootObj = nums.reduce((acc, num, i) => {
        if (!Object.hasOwn(num)) {
            acc[num] = {};
        }
        return acc;
    }, {});

    for (const num of nums) {

    }
    return rootObj;
};

console.log(calculateProbabilities([1, 3, 1, 5, 1]));
