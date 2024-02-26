const isSubsequence = (sub) => {
    if (sub.length === 0) return false;
    if (sub.length === 1) return false;
    for (let i = 1; i < sub.length; i++) {
        if (sub[i] - sub[i - 1] !== 1) {
            return false;
        }
    }
    return true;
};

// const sub = [10, 11, 12, 13];
// const sub = [-5, -4, -3, -2];
const sub = [];

console.log(isSubsequence(sub));
