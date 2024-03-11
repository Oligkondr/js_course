const bqs = (options) => {
    let result = '';

    const sortedParams = Object.keys(options).sort();

    for (const elem of sortedParams) {
        result += `&${elem}=${options[elem]}`;
    }

    return result.slice(1);
};

const opt = {
    per: 10,
    page: 1,
};

console.log(bqs(opt));
