const sequenceSum = (begin, end) => begin > end
  ? NaN
  : begin === end
    ? begin
    : begin + sequenceSum(begin + 1, end);

console.log(sequenceSum(5, 1));
console.log(sequenceSum(5, 5));
console.log(sequenceSum(1, 5));
