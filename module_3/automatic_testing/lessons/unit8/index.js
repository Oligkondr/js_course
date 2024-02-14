import _ from 'lodash';

const wrong2 = (obj, path, value) => {
    if (_.get(obj, path) !== undefined) {
        _.set(obj, path, value);
    }
    return obj;
};

const object = {a: {b: 4}};
const object2 = {a: {b: 4}};

console.log(wrong2(object, 'a.c', 5));
console.log(_.set(object2, 'a.c', 5));
