import isObject from 'lodash/isObject.js';

const cloneDeep = (obj) => {
    const result = {};
    for (const el in obj) {
        if(isObject(obj[el])) {
            result[el] = cloneDeep(obj[el])
        } else {
            result[el] = obj[el];
        }
    }
    return result;
};

const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

console.log(cloneDeep(data));