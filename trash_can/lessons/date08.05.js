// const dict =
//   {
//       app: [
//           {
//               dict: [
//                   'index.html',
//                   'main.js',
//               ],
//           },
//           'index.js',
//           {
//               assets: [
//                   'favicon.ico',
//                   'app.css',
//               ],
//           },
//       ],
//   };

const normalize = (numer, denom) => {
    let norm;
    for (let i = 1; i < Math.max(numer, denom); i++) {
        if (numer % i === 0 && denom % i === 0) {
            norm = i;
        }
    }
    console.log(norm);
    return {
        'numer': numer / norm,
        'denom': denom / norm,
    };
};

const getNumer = (normalize) => {
    return normalize.numer;
};

const getDenom = (normalize) => {
    return normalize.denom;
};


// Tests
const test = normalize(234, 89);

console.log(test);

console.log(getNumer(test));
console.log(getDenom(test));
