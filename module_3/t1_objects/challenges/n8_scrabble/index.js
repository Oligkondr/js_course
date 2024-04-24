const scrabble = (symbols, word) => {
    if (symbols.length < word) {
        return false;
    }

    word = word.toLowerCase();

    const toObject = (str) => str.split('')
        .reduce((acc, symbol) => {
            Object.hasOwn(acc, symbol) ? acc[symbol] += 1 : acc[symbol] = 1;
            return acc;
        }, {});


    const symbolsToObject = toObject(symbols);
    const wordToObject = toObject(word);

    for (const elem in wordToObject) {
        if (Object.hasOwn(symbolsToObject, elem)) {
            if (symbolsToObject[elem] < wordToObject[elem]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

const symbols1 = 'rkqodlw';
const word1 = 'world';
const symbols2 = 'katas';
const word2 = 'steak';
console.log(scrabble(symbols1, word1)); // true
console.log(scrabble(symbols2, word2)); // false
