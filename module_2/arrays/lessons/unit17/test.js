import isBracketStructureBalanced from './strings.js';

console.log('true');
console.log(isBracketStructureBalanced('()'));
console.log(isBracketStructureBalanced('[()]'));
console.log(isBracketStructureBalanced('({}[])'));
console.log(isBracketStructureBalanced('(<><<{[()]}>>)'));
console.log(isBracketStructureBalanced(''));
console.log('false');
console.log(isBracketStructureBalanced('(('));
console.log(isBracketStructureBalanced('[[()]'));
console.log(isBracketStructureBalanced('({}}[]'));
console.log(isBracketStructureBalanced('(<><<{[()]}>>>)'));
console.log(isBracketStructureBalanced('}'));
console.log(isBracketStructureBalanced('([)]')); // !!!!!
console.log(isBracketStructureBalanced('([))'));
console.log('true 2');
console.log(isBracketStructureBalanced('()'));
console.log(isBracketStructureBalanced('[()]'));
console.log(isBracketStructureBalanced('({}[])'));
console.log(isBracketStructureBalanced('(<><<{[()]}>>)'));
console.log(isBracketStructureBalanced(''));
