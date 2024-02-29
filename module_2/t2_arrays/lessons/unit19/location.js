const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};
const getTheNearestLocation = (locations, currentPoint) => {
    if (!locations.length) {
        return null;
    }
    let nearestPlace = [];
    const [x2, y2] = currentPoint;
    let distance = 100000;
    let tempDistance = 0;
    for (const [name, [x1, y1]] of locations) {
        tempDistance = getDistance([x1, y1], [x2, y2]);
        if (tempDistance < distance) {
            distance = tempDistance;
            nearestPlace = [`${name}`, [x1, y1]];
        }
    }
    return nearestPlace;
};

export {getTheNearestLocation};
