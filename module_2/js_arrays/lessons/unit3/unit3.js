const swap = (array) => {
    if (array.length < 2) {
        return array;
    }
    const temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
};

export { swap };