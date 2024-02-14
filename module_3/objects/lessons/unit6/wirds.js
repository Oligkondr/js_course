const countWords = (sentence) => {
    const result = {};
    sentence = sentence.toLowerCase();
    const words_array = sentence.split(' ');
    for (const word of words_array) {
        if (Object.hasOwn(result, word)) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    }
    return result;
};

export default countWords;
