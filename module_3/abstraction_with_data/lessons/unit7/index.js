import {getQuadrant, getX, getY, makeDecartPoint} from './point.js';

const makeRectangle = (point, width, height) => ({point, width, height});

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
    const point1 = getStartPoint(rectangle);
    const point2 = makeDecartPoint(
      getX(point1) + getWidth(rectangle),
      getY(point1) - getHeight(rectangle),
    );

    return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

const p = makeDecartPoint(-4, 3);
// const p = makeDecartPoint(0, 1);
const w = 5;
const h = 2;

console.log(p);
console.log('------');

const rect = makeRectangle(p, w, h);
console.log(rect);
console.log('------');

console.log(containsOrigin(rect));
