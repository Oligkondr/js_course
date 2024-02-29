const getLongestLength = (string) => {
    if (!string.length) {
        return 0;
    }
    const substrings = [];

    const sub = (string) => {
        let tempStr = '';
        for (const elem of string) {
            if (!tempStr.includes(elem)) {
                tempStr += elem;
            } else {
                break;
            }
        }
        return tempStr.length;
    };

    while (string.length) {
        substrings.push(sub(string));
        string = string.slice(1);
    }

    console.log(substrings);
    return Math.max(...substrings);
};

console.log(getLongestLength('jabjcdel'));
