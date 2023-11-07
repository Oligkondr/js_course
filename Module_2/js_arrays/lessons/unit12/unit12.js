const buildDefinitionList = (array) => {
    let result = '';
    if (array.length) {
        result = '<dl>';
        for (const element of array) {
            result += `<dt>${element[0]}</dt>`;
            result += `<dd>${element[1]}</dd>`;
        }
        result += '</dl>';
    }
    return result;
};

export default buildDefinitionList;
