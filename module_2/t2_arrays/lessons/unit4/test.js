import get from "./unit4.js";

const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
console.log(get(cities, 1));
console.log(get(cities, 4));
console.log(get(cities, 10, 'paris'));
console.log(get(cities, -1, 'oops'));
console.log(get(cities, 5, 'oops'));
console.log(get(cities, 6, 'oops'));
console.log(get(cities, 7));