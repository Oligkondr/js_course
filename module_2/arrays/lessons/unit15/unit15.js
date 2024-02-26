const countUniqChars = (text) => {
    let result = 0;
    const arrayText = text.split('');
    const outWork = [];
    for (const symbol of arrayText) {
        if (!outWork.includes(symbol)) {
            outWork.push(symbol);
            result += 1;
        }
    }
    return result;
};

export default countUniqChars;