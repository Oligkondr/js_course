const clone = obj => {
    let newObj = {};
    for (const elem in obj) {
        newObj[elem] = obj[elem]
    }
    return newObj;
};
console.log(clone({'color': 'green', 'name': 'apple', 'size': 'large'}));
