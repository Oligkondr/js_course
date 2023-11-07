const getIntersectionOfSortedArrays = (array1, array2) => {
    const result = [];
    for (const elem of array2) {
        if (array1.includes(elem) && !result.includes(elem)) {
            result.push(elem);
        }
    }
    return result;
};

export default getIntersectionOfSortedArrays;
