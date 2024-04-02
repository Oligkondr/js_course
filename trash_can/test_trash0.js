// #!/usr/bin/env node
//
// const type = ['green', 'yellow', 'red', 'any'];
// const rand = Math.floor(Math.random() * 4);
//
// console.log(`I love ${type[rand]} Apple!`);


const a = 'environment="X_FORWARDED_variable=value, key6=value6, X_FORWARDED_var3=value"'
let b = a.slice(13, -1);
console.log(b);
const c = b.split(', ');
console.log(c);
const r = c.filter((i) => i.startsWith('X_FORWARDED_')).map((i) => i.slice(12)).join(',')
console.log(r);
