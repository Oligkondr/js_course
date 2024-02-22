const invertCase = (str) => {
    let result = '';
    for (const elem of str) {
        elem === elem.toUpperCase()
          ? result += elem.toLowerCase()
          : result += elem.toUpperCase();
    }
    return result;
};

console.log(invertCase('Hello, World!'));
