import addPrefix from "./unit5.js";

const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');
console.log(names);
console.log(newNames);
const actual2 = addPrefix(names, 'Mrs');
console.log(actual2);