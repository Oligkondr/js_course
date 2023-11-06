const getSameParity = (array) => {
    const result = [];
    if (array.length === 0) {
        return [];
    }
    const x = array[0] % 2 === 0;
    if (x) {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] % 2 === 0) {
                result.push(array[i]);
            }
        }
    } else {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] % 2 !== 0) {
                result.push(array[i]);
            }
        }
    }
    return result;
};

export default getSameParity;
