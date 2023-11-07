const getMax = (array) => {
    if (!array.length) {
        return null;
    }
    let [max, ...rest] = array;
    for (const element of rest) {
        max = Math.max(max, element);
    }
    return max;
};

export {getMax};
