import _ from 'lodash';

const company = {
    name: null,
    state: 'moderating',
};

const data = {
    name: 'Hexlet',
    state: 'published',
};

const fill = (obj, keys, data) => {
    if (keys.length !== 0) {
        const needKeys = _.pick(data, keys);
        return Object.assign(obj, needKeys);
    } else {
        return Object.assign(obj, data);
    }
};
console.log(fill(company, [], data));
console.log();
