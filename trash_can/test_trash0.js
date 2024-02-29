#!/usr/bin/env node

const type = ['green', 'yellow', 'red', 'any'];
const rand = Math.floor(Math.random() * 4);

console.log(`I love ${type[rand]} Apple!`);
