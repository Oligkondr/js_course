const shipLocations = (field) => {
    return field
      .map(elem => elem
        .map((ship, i) => ship ? i + 1 : 0)
        .filter(elem => elem));
};

const isValidField = (field) => {
    const decks = shipLocations(field);
    console.log(decks);
    for (let i = 1; i < decks.length; i++) {
        for (const elem of decks[i - 1]) {
            if (decks[i].includes(elem - 1) || decks[i].includes(elem + 1)) {
                return false;
            }
        }
    }
    return true;
};

const calcShipsCount = (field) => {
    return field;
};

const battleField6 = [
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
];

console.log(calcShipsCount(battleField6));

export {isValidField, calcShipsCount};
