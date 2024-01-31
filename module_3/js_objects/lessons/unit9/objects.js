import _ from 'lodash';

const fill = (obj, keys, merge) => {
    if (!keys[0]) {
        Object.assign(obj, merge);
    }
    for (const key of keys) {
        Object.assign(obj, _.pick(merge, key));
    }
    return obj;
};
// return Object.assign(obj, merge);
// return Object.assign(obj, _.pick(merge, [keys]));

export default fill;

const company = {
    name: null,
    age: 23,
    state: 'moderating',
};
const data = {
    name: 'Hexlet',
    age: 30,
    state: 'published',
};

// console.log(fill(company, ['name'], data));
console.log(fill(company, [], data));
// console.log(fill(company, ['name', 'age'], data));
