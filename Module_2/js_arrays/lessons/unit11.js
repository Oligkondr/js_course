const getSuperSeriesWinner = (scores) => {
    let result = '';
    let USSRCount = 0;
    let CanadaCount = 0;
    for (let game of scores) {
        if (game[0] === game[1]) {
            continue;
        } else if (game[0] < game[1]) {
            USSRCount += 1;
        } else {
            CanadaCount += 1;
        }
    }
    if (CanadaCount > USSRCount) {
        result = 'canada';
    } else if (CanadaCount < USSRCount) {
        result = 'ussr';
    } else {
        result = null;
    }
    return result;
};

export default getSuperSeriesWinner;
