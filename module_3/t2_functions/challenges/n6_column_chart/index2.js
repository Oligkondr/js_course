const barChart = (arr) => {
    for (let i = Math.max(...arr); i >= Math.min(Math.min(...arr), 0); i--) {
        let str = '';
        for (const num of arr) {
            str += num > 0
                ? i <= num && i > 0 ? '*' : ' '
                : i >= num && i < 0 ? '#' : ' '
        }
        if (i) {
            console.log(str)
        }
    }
};

// barChart([5, 10, -5, -3, 7])
barChart([20, 2, 8],)
