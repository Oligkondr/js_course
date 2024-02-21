const isValidField = (field) => {
    const decks = field
      .map(elem => elem
        .map((ship, i) => ship ? i + 1 : 0)
        .filter(elem => elem));

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

};

export {isValidField, calcShipsCount};
