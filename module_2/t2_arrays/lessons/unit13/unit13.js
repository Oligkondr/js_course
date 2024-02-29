const makeCensored = (text, words) => {
    const array = text.split(' ');
    for (let i = 0; i < array.length; i += 1) {
        for (const word of words) {
            if (array[i] === word) {
                array[i] = '$#%!';
            }
        }
    }
    return array.join(' ');
};

export default makeCensored;
