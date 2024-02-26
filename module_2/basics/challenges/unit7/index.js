const reverseInt = (num) => {
    return num > 0
      ? Number(String(num).split('').reverse().join('')) // 31
      : -Number(String(Math.abs(num)).split('').reverse().join('')); // -31
};

console.log(reverseInt(13));
console.log(reverseInt(-13));
