const filterAnagrams = (word, anagrams) => {
    const normalize = (str) => str.split('').sort().join('');
    const normal = normalize(word);
    return anagrams.filter((item) => normalize(item) === normal);
};

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));