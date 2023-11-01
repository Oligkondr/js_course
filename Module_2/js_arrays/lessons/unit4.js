const get = (array, index, defVal = null) => {
    let result;
    if (index <= array.length && index >= 0) {
        result = array[index];
    } else {
        result = defVal;
    }
    return result;
};

export default get;