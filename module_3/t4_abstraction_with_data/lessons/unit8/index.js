// BEGIN (write your solution here)
import getGcd from './utils.js';

const makeRational = (numer, denom) => {
    const gcd = getGcd(numer, denom);
    return {
        numer: numer / gcd,
        denom: denom / gcd,
    };
};

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const add = (rational1, rational2) => {
    const numer = getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1);
    const denom = getDenom(rational1) * getDenom(rational2);
    return makeRational(numer, denom);
};

const sub = (rational1, rational2) => {
    const numer = getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1);
    const denom = getDenom(rational1) * getDenom(rational2);
    return makeRational(numer, denom);
};
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
    makeRational,
    getNumer,
    getDenom,
    add,
    sub,
    ratToString,
};
