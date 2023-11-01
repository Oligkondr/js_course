import { getWeekends } from "./unit2.js";
import { swap } from "./unit3.js";
import get from "./unit4.js";
import addPrefix from "./unit5.js";

console.log('--- Unit 2 ---')
console.log(getWeekends())
console.log(getWeekends('long'))
console.log(getWeekends('short'))
console.log('--- Unit 3 ---')
let array0 = ['apple', 'orange', 'blueberry']
let array1 = ['apple', 'orange']
let array2 = ['apple']
console.log(swap(array0))
console.log(swap(array1))
console.log(swap(array2))
console.log('--- Unit 4 ---')
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
console.log(get(cities, 1));
console.log(get(cities, 4));
console.log(get(cities, 10, 'paris'));
console.log(get(cities, -1, 'oops'));
console.log(get(cities, 5, 'oops'));
console.log(get(cities, 6, 'oops'));
console.log(get(cities, 7));
console.log('--- Unit 5 ---')
const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');
console.log(names);
console.log(newNames);
const actual2 = addPrefix(names, 'Mrs');
console.log(actual2);