import {
    getHost,
    getPath,
    getProtocol,
    getQueryParam,
    make,
    setHost,
    setPath,
    setProtocol,
    setQueryParam,
    toString,
} from './index.js';

// const url = make('https://hexlet.io/community?q=low');
// const url = make('http://hexlet.io:8080/community?q=low');
// const url = make('https://hexlet.io/community?q=low&user=guest');
const url = make('https://example.com?foo=1&bar=2');

console.log(url);

console.log('----');

setProtocol(url, 'http:');
console.log(toString(url));
console.log(getProtocol(url));

console.log('----');

setHost(url, 'obos.su');
console.log(toString(url));
console.log(getHost(url));

console.log('----');

setPath(url, '/404');
console.log(toString(url));
console.log(getPath(url));

console.log('----');

setQueryParam(url, 'q', 'low');
console.log(toString(url));
console.log(getQueryParam(url, 'foo', 'jopa'));
console.log(getQueryParam(url, 'user', 'jopa'));
