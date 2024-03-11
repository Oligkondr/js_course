const trans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

const toArabic = (romNums) => {

    let result = 0;
    let count = 0;

    for (let i = 0; i < romNums.length; i += 1) {
        if (romNums[i] === 'I') {
            count += 1;
        }
        if (count > 3) {
            return false;
        }
        if (trans[romNums[i]] < trans[romNums[i + 1]] && (romNums[i] !== 'I' && romNums[i] !== 'X' && romNums[i] !== 'C')) {
            return false;
        } else if (romNums[i + 1] === undefined) {
            result += trans[romNums[i]];
        } else if ((romNums[i] === 'X' && trans[romNums[i]] < trans[romNums[i + 1]]) || (romNums[i] === 'C' && trans[romNums[i]] < trans[romNums[i + 1]]) || (romNums[i] === 'I' && romNums[i + 1] !== 'I')) {
            result -= trans[romNums[i]];
        } else {
            result += trans[romNums[i]];
        }
    }

    return result;
};

// console.log(toArabic('XCIII'));

// const getRank = (num) => { // 1024
//     const strNum = String(num);
//     const revNum = strNum.split('')
//       .reverse();
//     let zeros = '';
//     const result = [];
//     for (let elem of revNum) {
//         result.push(elem + zeros);
//         zeros += '0';
//     }
//     return result;
// };
// console.log(getRank(1024));

const toRoman = (arabNum) => {
    const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let roman = '';
    for (const i in lookup) {
        while (arabNum >= lookup[i]) {
            roman += i;
            arabNum -= lookup[i];
        }
    }
    return roman;
};

// console.log(toRoman(1));
// console.log(toRoman(59));
// console.log(toRoman(3000));

const roman2arabic = s => {
    return [...s]
      .reduce((r, c, i, s) => trans[s[i + 1]] > trans[c]
          ? r - trans[c]
          : r + trans[c]
        , 0);
};

// console.log(roman2arabic('CMXI'));
