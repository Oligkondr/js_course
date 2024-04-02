const dnaToRna = (dna) => {
    const x = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };

    let result = '';

    for (const elem of dna) {
        if (x[elem] === undefined) {
            return null;
        }
        result += x[elem];
    }
    return result;
};

console.log(dnaToRna(''));