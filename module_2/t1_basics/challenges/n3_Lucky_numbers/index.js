const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};

const isHappyNumber = (num) => {
    let copy = sumOfSquareDigits(num);
    for (let i = 0; i < 10; i++) {
        if (copy === 1) {
            return true;
        } else {
            copy = sumOfSquareDigits(copy);
        }
    }
    return false;
};
