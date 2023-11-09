const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (text) => {
    let ans = true;
    const stack = [];
    for (const element of text) {
        if (openingSymbols.includes(element)) {
            stack.push(element);
        } else if (closingSymbols.includes(element)) {
            const open = stack.pop();
            if (element === ')' && open !== '(') ans = false;
            else if (element === ']' && open !== '[') ans = false;
            else if (element === '}' && open !== '{') ans = false;
            else if (element === '>' && open !== '<') ans = false;
        }
    }
    if (stack.length !== 0) ans = false;
    return ans;
};
export default isBracketStructureBalanced;
