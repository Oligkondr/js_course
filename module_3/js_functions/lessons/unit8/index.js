const takeLast = (str, count) => {
    let ans;
    const len = str.length;
    len > 0 && len >= count
      ? ans = str
        .slice(str.length - count)
        .split('')
        .reverse()
        .join('')
      : ans = null;
    return ans;
};
console.log(takeLast('', 4));
console.log(takeLast('cd', 4));
console.log(takeLast('power', 4));
console.log(takeLast('hexlet', 4));
