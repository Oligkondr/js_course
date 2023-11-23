import { getTheNearestLocation } from './location.js';

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

console.log(getTheNearestLocation([], currentPoint));
console.log(getTheNearestLocation(locations, currentPoint));
