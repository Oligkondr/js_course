const chunk = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
};

console.log(chunk(['a','b','c','d'], 2));
console.log(chunk(['a','b','c','d'], 3));
