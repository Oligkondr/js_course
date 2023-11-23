const calcInPolishNotation = (array) => {
    const stack = [];
    for (const element of array) {
        if (typeof element === 'number') {
            stack.push(element);
        } else if (element === '+') {
            let temp = 0;
            temp += stack.pop();
            temp += stack.pop();
            stack.push(temp);
        } else if (element === '-') {
            let temp = 0;
            temp -= stack.pop();
            temp += stack.pop();
            stack.push(temp);
        } else if (element === '*') {
            let temp = 1;
            temp *= stack.pop();
            temp *= stack.pop();
            stack.push(temp);
        } else if (element === '/') {
            const del = stack.pop();
            if (del === 0) return null;
            let temp = stack.pop();
            stack.push(temp /= del);
        }
    }
    return stack[0];
};

export default calcInPolishNotation;
