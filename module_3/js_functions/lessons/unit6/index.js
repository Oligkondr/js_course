const convert = (...arrays) => {
    const dates = [];
    for (const date of arrays) {
        dates.push(new Date(...date).toDateString());
    }
    return dates;
};
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));

// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday
