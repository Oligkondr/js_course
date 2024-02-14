const getDomainInfo = (name) => {
    const result = {};
    if (name.startsWith('https://')) {
        result.scheme = 'https';
        result.name = name.replace('https://', '');
    } else if (name.startsWith('http://')) {
        result.scheme = 'http';
        result.name = name.replace('http://', '');
    } else {
        result.scheme = 'http';
        result.name = name;
    }
    return result;
};

export default getDomainInfo;
