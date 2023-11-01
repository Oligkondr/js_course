const addPrefix = (array, prefix) => {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        result.push(`${prefix} ${array[i]}`);
    }
    return result;
};

export default addPrefix;