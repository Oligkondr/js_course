import _ from 'lodash';

const average = (...nums) => nums.length > 0
  ? _.sum(nums) / nums.length
  : null;

console.log(average(1, 2, 3, 4, 5));
console.log(average());
