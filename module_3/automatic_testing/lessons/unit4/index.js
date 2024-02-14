import lodash from 'lodash'

console.log(lodash.without([1,2,3,4], 1, 2));
console.log(lodash.without([1,2,3,4], [1,2]));
console.log(lodash.without([1,2,3,4], 9));
console.log(lodash.without([1,2,3,4], [9]));
