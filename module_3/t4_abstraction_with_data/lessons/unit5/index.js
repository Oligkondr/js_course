import { getX, getY, makeDecartPoint } from './points.js';

const makeSegment = (point1, point2) => ({ beginPoint: point1, endPoint: point2, });

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
    const x = ((getX(getBeginPoint(segment)) + getX(getEndPoint(segment))) / 2);
    const y = ((getY(getBeginPoint(segment)) + getY(getEndPoint(segment))) / 2);
    return { x, y, };
};

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

console.log(getMidpointOfSegment(segment));
console.log(getBeginPoint(segment));
console.log(getEndPoint(segment));
