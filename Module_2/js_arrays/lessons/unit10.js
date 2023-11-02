const getTotalAmount = (money, cur) => {
    let sum = 0;
    const needMoney = [];
    for (let i of money) {
        if (i.startsWith(cur)) {
            needMoney.push(i);
        }
    }

    for (let i of needMoney) {
        i = i.slice(3);
        sum += Number(i);
    }

    return sum;
};

export default getTotalAmount;
