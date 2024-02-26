const getLongestLength = (string) => {
    if (!string.length) {
        return 0;
    }
    const substrings = [];

    const sub = (string) => {
        let result = '';
        for (const elem of string) {
            if (!result.includes(elem)) {
                result += elem;
            } else {
                break;
            }
        }
        return result.length;
    };

    while (string.length) {
        substrings.push(sub(string));
        string = string.slice(1);
    }

    return Math.max(...substrings);
};
