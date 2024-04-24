const isAllLettersMatch = (word1, word2) => {
    for (const elem of word2) {
        if (!word1.includes(elem)) {
            return false;
        }
    }
    return true;
};

const isSame = (word1, word2) => {
    for (const elem in word2) {
        if (word1[elem] !== word2[elem]) {
            return false;
        }
    }
    return true;
};

const getSymbolsCount = (word) => {
    const symbolsCount = {};
    for (const elem of word) {
        Object.hasOwn(symbolsCount, elem)
            ? symbolsCount[elem] += 1
            : symbolsCount[elem] = 1;
    }
    return symbolsCount;
};

const filterAnagrams = (word, anagrams) => {
    const filteredWords = anagrams.filter((anagram) => isAllLettersMatch(word, anagram));
    const wordSymbolsCount = getSymbolsCount(word);
    return filteredWords.filter((word) => isSame(wordSymbolsCount, getSymbolsCount(word)));
};

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))