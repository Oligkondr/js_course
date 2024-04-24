const reverse = (str) => (
    str.length === 0
        ? str
        : `${str.slice(-1)}${reverse(str.slice(0, -1))}`
);
