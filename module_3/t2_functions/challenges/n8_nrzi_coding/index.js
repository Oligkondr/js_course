const nrzi = (signal) => {
    if (signal.length === 1) {
        return '';
    }
    let result  = '';
    for (let i = 0; i < signal.length; i ++) {
        if (signal[i] !== '|' && signal[i - 1] !== '|') {
            result += '0';
        } else if (signal[i] !== '|'){
            // continue;
        } else {
            result += '1';
        }
    }
    return result;
};

console.log(nrzi('_|¯|____|¯|__|¯¯¯'))