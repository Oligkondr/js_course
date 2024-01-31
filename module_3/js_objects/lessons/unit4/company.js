const is = (company1, company2) => {
    let result = true;
    const list = ['name', 'state', 'website'];
    for (const atri of list) {
        if (company1[atri] !== company2[atri]) {
            result = false;
            break;
        }
    }
    return result;
};

export default is;
